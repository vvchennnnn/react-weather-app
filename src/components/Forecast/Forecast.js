import React from 'react';
import styles from './Forecast.module.css';
import Weather from './components/Weather';
import OpenWeatherMap from '../../utils/OpenWeatherMap';

const BRISBANE_LAT = '-27.467939';
const BRISBANE_LON = '153.028091'
const EXCLUDE_DATA = 'current,minutely,hourly'

const getCurrentCityForecastWeather = () => OpenWeatherMap.get('/onecall', {
  params: {
    lat: BRISBANE_LAT,
    lon: BRISBANE_LON,
    exclude: EXCLUDE_DATA,
  },
}).then((response) => response.data);
class Forecast extends React.Component {
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
  }

  componentDidMount() {
    getCurrentCityForecastWeather().then(this.handleDataChange);
  }

  render() {
    const { data } = this.state;
    console.log(data);

    if (!data) {
      return 'Loading';
    }

    return (
      <div className={styles.forecast}>
        <h2 className={styles.header}>Forecast</h2>
        <div className={styles.daily}>
          {data.daily.slice(0, 5).map(({ dt, temp: {day}, weather: [{main, icon}]}) => 
            <Weather
              temperature = {Math.round(day)}
              weather = {{description: main, icon}}
            />
          )}
        </div>
        
      </div>
    )
  }

}

export default Forecast;