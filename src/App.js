import React from 'react';
import styles from './App.module.css';
import Current from './components/Current';
import Forecast from './components/Forecast';
import OtherCities from './components/OtherCities';
import VerticalDivider from './components/VerticalDivider';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.weather}>
        <div>
          <Current />
        </div>
        <div className={styles.bottom}>
          <OtherCities />
          <VerticalDivider color="rgba(0, 0, 0, 0.1)" width="3px"/>
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;