/**
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright naufalfiqri 2023 All rights reserved
 * @author  naufalfiqri <naufalfiqrifauzi@gmail.com>
 */

"use strict";

const api_key = "7d972b28fc95af77fe1871b15c651a67";

/**
 * Fetch data from server
 * @param {string} URL API url
 * @param {Function} callback callback
 */

export const fetchData = function (URL, callback) {
  fetch(`${URL}&appid=${api_key}`)
    .then((res) => res.json())
    .then((data) => callback(data));
};

export const url = {
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=7d972b28fc95af77fe1871b15c651a67`;
  },
  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=7d972b28fc95af77fe1871b15c651a67`;
  },
  airPollution(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=7d972b28fc95af77fe1871b15c651a67`;
  },
  reverseGeo(lat, lon) {
    return `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5`;
  },
  /**
   * @param {string} query Search query e.g.: "London", "New York"
   */
  geo(query) {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
  },
};
