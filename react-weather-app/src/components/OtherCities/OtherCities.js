import React from 'react';
import styles from './OtherCities.module.css';
import OpenWeatherMap from '../../utils/OpenWeatherMap';
import City from './components/City';

const OTHER_CITIES = [{
  name: 'Sydney', id: 2147714,
}, {
  name: 'Melbourne', id: 2158177,
}, {
  name: 'Townsville', id: 2146142,
}]

const getOtherCitiesWeather = () => {
  const otherCitiesId = OTHER_CITIES.map((city) => city.id).join(',')

  return OpenWeatherMap.get('/group', {
    params: {
      id: otherCitiesId,
    }
  }).then((response) => response.data);
}

class OtherCities extends React.Component {
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
    getOtherCitiesWeather().then(this.handleDataChange);
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return 'Loading';
    }

    return (
      <div className={styles.otherCities}>
        <h2 className={styles.header}>Other Cities</h2>
        <div>
        {data.list.map(({id, name, main: {temp}, weather: [{main, icon}]}) => 
          <City
            key = {id}
            name = {name}
            temperature = {temp}
            weather = {{description: main, icon}}
            />
            )}
        </div>
      </div>
    )
  }
}

export default OtherCities;