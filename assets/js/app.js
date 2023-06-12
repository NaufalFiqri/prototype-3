/**
 * @copyright naufalfiqri 2023 All rights reserved
 * @author  naufalfiqri <naufalfiqrifauzi@gmail.com>
 */

"use strict";

import { fetchData, url } from "./api.js";
import * as module from "./module.js";

/**
 * Add event listener on multiple elements
 * @param {NodeList} elements Elements node array
 * @param {*} eventType 
 * @param {*} callback 
 */
const addEventOnElements = function (elements, eventType, callback) {
  for (const elemtnt of elements) element.addEventListener(eventType, callback);
};
