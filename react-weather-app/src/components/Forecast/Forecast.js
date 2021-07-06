import React from 'react';
import styles from './Forecast.module.css';
import Weather from './components/Weather';
class Forecast extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.forecast}>
        <h2>Forecast</h2>
        
      </div>
    )
  }

}

export default Forecast;