import React from 'react';
import axios from 'axios';

const baseURL = 'https://api.openweathermap.org/data/2.5';
const units = 'metric';
const appid = '341c61617f750296a284129da8508009';

const OpenWeatherMap = axios.create({
  baseURL,
  params: {
    units,
    appid,
  }
})

export default OpenWeatherMap;