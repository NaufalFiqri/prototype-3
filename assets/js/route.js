/**
 * @fileoverview Menage all routes
 * @copyright naufalfiqri 2023 All rights reserved
 * @author  naufalfiqri <naufalfiqrifauzi@gmail.com>
 */

"use strict";
import { updateWeather, error404 } from "./app.js";
const defaultLocation = "#/weather?lat=51.5073219&lon=-0.1276474"; // London

const currentLocation = function () {};

const searchedLocation = (query) => {};

const routes = new Map([
  ["/current-location", currentLocation],
  ["/weather", searchedLocation],
]);
