import React from 'react';
import OpenWeatherMap from '../../utils/OpenWeatherMap/OpenWeatherMap';
import styles from './Current.module.css';
import VerticalDivider from '../VerticalDivider';

const BRISBANE_CITY = '2174003';

const getCurrentCityWeather = () => OpenWeatherMap.get('/weather', {
  params: {
    id: BRISBANE_CITY,
  },
}).then((response) => response.data);

class Current extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: undefined,
    }

    this.handleDataChange = this.handleDataChange.bind(this);
  }

  handleDataChange(newData) {
    this.setState({
      data: newData,
    });
  };

  componentDidMount() {
    getCurrentCityWeather().then(this.handleDataChange)
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return 'Loading';
    }

    return (
      <div className={styles.current}>
        <div className={styles.left}>
          <div className={styles.temperature}>
            {data.main.temp}
          </div>

          <div className={styles.weather}>
            {data.weather[0].main}
          </div>

          <div className={styles.metas}>
            <div className={styles.humidity}>
              HUMIDITY <br /> {data.main.humidity}%
            </div>
            <VerticalDivider width="2px" color="rgba(255, 255, 255, 0.7)" />
            <div className={styles.wind}>
              WIND <br /> {data.wind.speed}K/M
            </div>
          </div>

        </div>

        <div className={styles.right}>
          <h1 className={styles.city}>Brisbane</h1>
        </div>
        <div className={styles.bottom} />
      </div>
    )
  }
}

export default Current;