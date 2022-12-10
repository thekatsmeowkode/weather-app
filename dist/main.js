/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/childcareweatherchart.png":
/*!***************************************!*\
  !*** ./src/childcareweatherchart.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "73292682efac2551f419fcdce1906633.png");

/***/ }),

/***/ "./src/childcareweatherinfo.png":
/*!**************************************!*\
  !*** ./src/childcareweatherinfo.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "73663a5b1826367bba4b82681b2520f1.png");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _childcareweatherinfo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./childcareweatherinfo.png */ "./src/childcareweatherinfo.png");
/* harmony import */ var _childcareweatherchart_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./childcareweatherchart.png */ "./src/childcareweatherchart.png");



const submitButton = document.querySelector(".submit-button");
const searchQuery = document.querySelector(".query");
const imageHolder = document.querySelector(".image-holder");
const chartHolder = document.querySelector('.chart-holder')

submitButton.addEventListener("submit", (e) => {
  e.preventDefault();
});

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();
  if (searchQuery.value === "") return;
  const weatherData = await getLocation(searchQuery.value);
});

const myImg = new Image();
myImg.src = _childcareweatherinfo_png__WEBPACK_IMPORTED_MODULE_0__["default"];
myImg.alt = "Information on behavior of children in weather and various hazards"
imageHolder.appendChild(myImg);

const myChart = new Image()
myChart.src = _childcareweatherchart_png__WEBPACK_IMPORTED_MODULE_1__["default"]
myChart.alt = "Child Care Aware Weather Chart"
chartHolder.appendChild(myChart)

async function getLocation(location) {
  let locationName = `http://api.openweathermap.org/geo/1.0/direct?q=${location}}&limit=1&appid=d3293a04fec44f7f2ad2190b9795f011`;
  try {
    const response = await fetch(locationName, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`${location} not found`);
    }
    const locationData = await response.json();
    let latitude = locationData[0].lat;
    let longitude = locationData[0].lon;
    getWeather(latitude, longitude);
  } catch (error) {
    alert(error);
    return null;
  }
}

async function getWeather(lat, lon) {
  let weatherData = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d3293a04fec44f7f2ad2190b9795f011&units=imperial`;
  try {
    const response = await fetch(weatherData, { mode: "cors" });
    if (!response.ok) {
      throw new Error("Weather not found");
    }
    const weather = await response.json();
    convertWeather(weather);
  } catch (error) {
    alert(error);
    return null;
  }
}

function convertWeather(items) {
  const {
    name: cityName,
    main: { temp: temperature, feels_like: feelsLike, humidity: humid },
    wind: { speed: windSpeed },
  } = items;

  populateHTML(items);
  // return {cityName, temperature, feelsLike, windSpeed, humid}
}

function populateHTML(items) {
  let city = document.querySelector(".city-name");
  let temp = document.querySelector(".temperature");
  let feelsLike = document.querySelector(".feels-like");
  let wind = document.querySelector(".wind");
  let humid = document.querySelector(".humidity");
  city.textContent = items.name;
  temp.textContent = `${items.main.temp} °F`;
  feelsLike.textContent = `${items.main.feels_like} °F`;
  wind.textContent = `${items.wind.speed} MPH`;
  humid.textContent = `${items.main.humidity} %`;
  getZone(items);
}

function getZone(items) {
  let card = document.querySelector(".card");
  let zone = document.querySelector(".zone");
  let warningLabel = document.querySelector(".warning-label");
  let temp = items.main.temp;
  let humid = items.main.humidity;
  let wind = items.wind.speed;
  //SUMMER
  if (temp <= 84 && temp > 50) {
    card.style.backgroundColor = "green";
    zone.textContent = "Green";
    warningLabel.textContent = "80° or below is considered comfortable";
  } else if (temp > 84 && temp < 90) {
    if (humid >= 65 || humid <= 90) {
      card.style.backgroundColor = "yellow";
      zone.textContent = "Yellow - Caution";
      warningLabel = "90° is beginning to feel uncomfortable";
    } else if (humid >= 90) {
      card.style.backgroundColor = "red";
      zone.textContent = "Red - Danger";
      warningLabel.textContent = "90° is beginning to feel uncomfortable";
    }
  } else if (temp >= 90 && temp < 94) {
    if (humid < 55) {
      card.style.backgroundColor = "yellow";
      zone.textContent = "Yellow - Caution";
      warningLabel.textContent = "90° is beginning to feel uncomfortable";
    } else {
      card.style.backgroundColor = "red";
      zone.textContent = "Red - Danger";
      warningLabel.textContent = "90° is beginning to feel uncomfortable";
    }
  } else if (temp >= 94 && temp < 100) {
    if (humid < 50) {
      card.style.backgroundColor = "yellow";
      zone.textContent = "Yellow - Caution";
      warningLabel.textContent = "100° is uncomfortable and may be hazardous";
    } else {
      card.style.backgroundColor = "red";
      zone.textContent = "Red - Danger";
      warningLabel.textContent = "100° is uncomfortable and may be hazardous";
    }
  } else if (temp >= 100) {
    card.style.backgroundColor = "red";
    zone.textContent = "Red - Danger";
    warningLabel.textContent = "110° is considered dangerous";
  }
  //WINTER
  else if (temp > 40 && temp <= 50) {
    if (wind <= 15) {
      card.style.backgroundColor = "green";
      zone.textContent = "Green";
      warningLabel.textContent = "30° is chilly and generally uncomfortable";
    } else {
      card.style.backgroundColor = "yellow";
      zone.textContent = "Yellow - Caution";
      warningLabel.textContent = "30° is chilly and generally uncomfortable";
    }
  } else if (temp > 30 && temp <= 40) {
    card.style.backgroundColor = "yellow";
    zone.textContent = "Yellow - Caution";
    warningLabel.textContent = "30° is chilly and generally uncomfortable";
  } else if (temp < 30 && temp >= 20) {
    if (wind <= 5) {
      card.style.backgroundColor = "yellow";
      zone.textContent = "Yellow - Caution";
      warningLabel.textContent = "15° to 30° is cold";
    } else {
      card.style.backgroundColor = "red";
      zone.textContent = "Red - Danger";
      warningLabel.textContent = "20° to 30° is cold";
    }
  } else if (temp < 20 && temp > 0) {
    card.style.backgroundColor = "red";
    zone.textContent = "Red - Danger";
    warningLabel.textContent =
      "20° to 0° is bitter cold with significant risk of frostbite";
  } else if (temp <= 0) {
    card.style.backgroundColor = "red";
    zone.textContent = "Red - Danger";
    warningLabel.textContent =
      "-20° to -60° is extreme cold and frostbite is likely";
  } else {
    card.style.backgroundColor = "white";
    zone.textContent = "error";
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7OztVQ0EvRTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7OztBQ2ZxRDtBQUNOO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsWUFBWSxpRUFBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsa0VBQUs7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsVUFBVTtBQUNqRjtBQUNBLGlEQUFpRCxjQUFjO0FBQy9EO0FBQ0EseUJBQXlCLFVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsSUFBSSxPQUFPLElBQUk7QUFDMUY7QUFDQSxnREFBZ0QsY0FBYztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJEQUEyRDtBQUN2RSxZQUFZLGtCQUFrQjtBQUM5QixJQUFJO0FBQ0o7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDLDZCQUE2Qix1QkFBdUI7QUFDcEQsd0JBQXdCLGtCQUFrQjtBQUMxQyx5QkFBeUIscUJBQXFCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jaGlsZGNhcmV3ZWF0aGVyY2hhcnQucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NoaWxkY2FyZXdlYXRoZXJpbmZvLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjczMjkyNjgyZWZhYzI1NTFmNDE5ZmNkY2UxOTA2NjMzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3MzY2M2E1YjE4MjYzNjdiYmE0YjgyNjgxYjI1MjBmMS5wbmdcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgSW5mb3JtYXRpb24gZnJvbSBcIi4vY2hpbGRjYXJld2VhdGhlcmluZm8ucG5nXCI7XHJcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoaWxkY2FyZXdlYXRoZXJjaGFydC5wbmcnXHJcblxyXG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1idXR0b25cIik7XHJcbmNvbnN0IHNlYXJjaFF1ZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVyeVwiKTtcclxuY29uc3QgaW1hZ2VIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltYWdlLWhvbGRlclwiKTtcclxuY29uc3QgY2hhcnRIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhcnQtaG9sZGVyJylcclxuXHJcbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgaWYgKHNlYXJjaFF1ZXJ5LnZhbHVlID09PSBcIlwiKSByZXR1cm47XHJcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRMb2NhdGlvbihzZWFyY2hRdWVyeS52YWx1ZSk7XHJcbn0pO1xyXG5cclxuY29uc3QgbXlJbWcgPSBuZXcgSW1hZ2UoKTtcclxubXlJbWcuc3JjID0gSW5mb3JtYXRpb247XHJcbm15SW1nLmFsdCA9IFwiSW5mb3JtYXRpb24gb24gYmVoYXZpb3Igb2YgY2hpbGRyZW4gaW4gd2VhdGhlciBhbmQgdmFyaW91cyBoYXphcmRzXCJcclxuaW1hZ2VIb2xkZXIuYXBwZW5kQ2hpbGQobXlJbWcpO1xyXG5cclxuY29uc3QgbXlDaGFydCA9IG5ldyBJbWFnZSgpXHJcbm15Q2hhcnQuc3JjID0gQ2hhcnRcclxubXlDaGFydC5hbHQgPSBcIkNoaWxkIENhcmUgQXdhcmUgV2VhdGhlciBDaGFydFwiXHJcbmNoYXJ0SG9sZGVyLmFwcGVuZENoaWxkKG15Q2hhcnQpXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbihsb2NhdGlvbikge1xyXG4gIGxldCBsb2NhdGlvbk5hbWUgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9ufX0mbGltaXQ9MSZhcHBpZD1kMzI5M2EwNGZlYzQ0ZjdmMmFkMjE5MGI5Nzk1ZjAxMWA7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobG9jYXRpb25OYW1lLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7bG9jYXRpb259IG5vdCBmb3VuZGApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbG9jYXRpb25EYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgbGV0IGxhdGl0dWRlID0gbG9jYXRpb25EYXRhWzBdLmxhdDtcclxuICAgIGxldCBsb25naXR1ZGUgPSBsb2NhdGlvbkRhdGFbMF0ubG9uO1xyXG4gICAgZ2V0V2VhdGhlcihsYXRpdHVkZSwgbG9uZ2l0dWRlKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxhdCwgbG9uKSB7XHJcbiAgbGV0IHdlYXRoZXJEYXRhID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD1kMzI5M2EwNGZlYzQ0ZjdmMmFkMjE5MGI5Nzk1ZjAxMSZ1bml0cz1pbXBlcmlhbGA7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2god2VhdGhlckRhdGEsIHsgbW9kZTogXCJjb3JzXCIgfSk7XHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIldlYXRoZXIgbm90IGZvdW5kXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnZlcnRXZWF0aGVyKHdlYXRoZXIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRXZWF0aGVyKGl0ZW1zKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgbmFtZTogY2l0eU5hbWUsXHJcbiAgICBtYWluOiB7IHRlbXA6IHRlbXBlcmF0dXJlLCBmZWVsc19saWtlOiBmZWVsc0xpa2UsIGh1bWlkaXR5OiBodW1pZCB9LFxyXG4gICAgd2luZDogeyBzcGVlZDogd2luZFNwZWVkIH0sXHJcbiAgfSA9IGl0ZW1zO1xyXG5cclxuICBwb3B1bGF0ZUhUTUwoaXRlbXMpO1xyXG4gIC8vIHJldHVybiB7Y2l0eU5hbWUsIHRlbXBlcmF0dXJlLCBmZWVsc0xpa2UsIHdpbmRTcGVlZCwgaHVtaWR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlSFRNTChpdGVtcykge1xyXG4gIGxldCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5LW5hbWVcIik7XHJcbiAgbGV0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlXCIpO1xyXG4gIGxldCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzLWxpa2VcIik7XHJcbiAgbGV0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRcIik7XHJcbiAgbGV0IGh1bWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eVwiKTtcclxuICBjaXR5LnRleHRDb250ZW50ID0gaXRlbXMubmFtZTtcclxuICB0ZW1wLnRleHRDb250ZW50ID0gYCR7aXRlbXMubWFpbi50ZW1wfSDCsEZgO1xyXG4gIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke2l0ZW1zLm1haW4uZmVlbHNfbGlrZX0gwrBGYDtcclxuICB3aW5kLnRleHRDb250ZW50ID0gYCR7aXRlbXMud2luZC5zcGVlZH0gTVBIYDtcclxuICBodW1pZC50ZXh0Q29udGVudCA9IGAke2l0ZW1zLm1haW4uaHVtaWRpdHl9ICVgO1xyXG4gIGdldFpvbmUoaXRlbXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRab25lKGl0ZW1zKSB7XHJcbiAgbGV0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIik7XHJcbiAgbGV0IHpvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnpvbmVcIik7XHJcbiAgbGV0IHdhcm5pbmdMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2FybmluZy1sYWJlbFwiKTtcclxuICBsZXQgdGVtcCA9IGl0ZW1zLm1haW4udGVtcDtcclxuICBsZXQgaHVtaWQgPSBpdGVtcy5tYWluLmh1bWlkaXR5O1xyXG4gIGxldCB3aW5kID0gaXRlbXMud2luZC5zcGVlZDtcclxuICAvL1NVTU1FUlxyXG4gIGlmICh0ZW1wIDw9IDg0ICYmIHRlbXAgPiA1MCkge1xyXG4gICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XHJcbiAgICB6b25lLnRleHRDb250ZW50ID0gXCJHcmVlblwiO1xyXG4gICAgd2FybmluZ0xhYmVsLnRleHRDb250ZW50ID0gXCI4MMKwIG9yIGJlbG93IGlzIGNvbnNpZGVyZWQgY29tZm9ydGFibGVcIjtcclxuICB9IGVsc2UgaWYgKHRlbXAgPiA4NCAmJiB0ZW1wIDwgOTApIHtcclxuICAgIGlmIChodW1pZCA+PSA2NSB8fCBodW1pZCA8PSA5MCkge1xyXG4gICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XHJcbiAgICAgIHpvbmUudGV4dENvbnRlbnQgPSBcIlllbGxvdyAtIENhdXRpb25cIjtcclxuICAgICAgd2FybmluZ0xhYmVsID0gXCI5MMKwIGlzIGJlZ2lubmluZyB0byBmZWVsIHVuY29tZm9ydGFibGVcIjtcclxuICAgIH0gZWxzZSBpZiAoaHVtaWQgPj0gOTApIHtcclxuICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICB6b25lLnRleHRDb250ZW50ID0gXCJSZWQgLSBEYW5nZXJcIjtcclxuICAgICAgd2FybmluZ0xhYmVsLnRleHRDb250ZW50ID0gXCI5MMKwIGlzIGJlZ2lubmluZyB0byBmZWVsIHVuY29tZm9ydGFibGVcIjtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHRlbXAgPj0gOTAgJiYgdGVtcCA8IDk0KSB7XHJcbiAgICBpZiAoaHVtaWQgPCA1NSkge1xyXG4gICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XHJcbiAgICAgIHpvbmUudGV4dENvbnRlbnQgPSBcIlllbGxvdyAtIENhdXRpb25cIjtcclxuICAgICAgd2FybmluZ0xhYmVsLnRleHRDb250ZW50ID0gXCI5MMKwIGlzIGJlZ2lubmluZyB0byBmZWVsIHVuY29tZm9ydGFibGVcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcclxuICAgICAgem9uZS50ZXh0Q29udGVudCA9IFwiUmVkIC0gRGFuZ2VyXCI7XHJcbiAgICAgIHdhcm5pbmdMYWJlbC50ZXh0Q29udGVudCA9IFwiOTDCsCBpcyBiZWdpbm5pbmcgdG8gZmVlbCB1bmNvbWZvcnRhYmxlXCI7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICh0ZW1wID49IDk0ICYmIHRlbXAgPCAxMDApIHtcclxuICAgIGlmIChodW1pZCA8IDUwKSB7XHJcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ5ZWxsb3dcIjtcclxuICAgICAgem9uZS50ZXh0Q29udGVudCA9IFwiWWVsbG93IC0gQ2F1dGlvblwiO1xyXG4gICAgICB3YXJuaW5nTGFiZWwudGV4dENvbnRlbnQgPSBcIjEwMMKwIGlzIHVuY29tZm9ydGFibGUgYW5kIG1heSBiZSBoYXphcmRvdXNcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcclxuICAgICAgem9uZS50ZXh0Q29udGVudCA9IFwiUmVkIC0gRGFuZ2VyXCI7XHJcbiAgICAgIHdhcm5pbmdMYWJlbC50ZXh0Q29udGVudCA9IFwiMTAwwrAgaXMgdW5jb21mb3J0YWJsZSBhbmQgbWF5IGJlIGhhemFyZG91c1wiO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAodGVtcCA+PSAxMDApIHtcclxuICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcclxuICAgIHpvbmUudGV4dENvbnRlbnQgPSBcIlJlZCAtIERhbmdlclwiO1xyXG4gICAgd2FybmluZ0xhYmVsLnRleHRDb250ZW50ID0gXCIxMTDCsCBpcyBjb25zaWRlcmVkIGRhbmdlcm91c1wiO1xyXG4gIH1cclxuICAvL1dJTlRFUlxyXG4gIGVsc2UgaWYgKHRlbXAgPiA0MCAmJiB0ZW1wIDw9IDUwKSB7XHJcbiAgICBpZiAod2luZCA8PSAxNSkge1xyXG4gICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgem9uZS50ZXh0Q29udGVudCA9IFwiR3JlZW5cIjtcclxuICAgICAgd2FybmluZ0xhYmVsLnRleHRDb250ZW50ID0gXCIzMMKwIGlzIGNoaWxseSBhbmQgZ2VuZXJhbGx5IHVuY29tZm9ydGFibGVcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ5ZWxsb3dcIjtcclxuICAgICAgem9uZS50ZXh0Q29udGVudCA9IFwiWWVsbG93IC0gQ2F1dGlvblwiO1xyXG4gICAgICB3YXJuaW5nTGFiZWwudGV4dENvbnRlbnQgPSBcIjMwwrAgaXMgY2hpbGx5IGFuZCBnZW5lcmFsbHkgdW5jb21mb3J0YWJsZVwiO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAodGVtcCA+IDMwICYmIHRlbXAgPD0gNDApIHtcclxuICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ5ZWxsb3dcIjtcclxuICAgIHpvbmUudGV4dENvbnRlbnQgPSBcIlllbGxvdyAtIENhdXRpb25cIjtcclxuICAgIHdhcm5pbmdMYWJlbC50ZXh0Q29udGVudCA9IFwiMzDCsCBpcyBjaGlsbHkgYW5kIGdlbmVyYWxseSB1bmNvbWZvcnRhYmxlXCI7XHJcbiAgfSBlbHNlIGlmICh0ZW1wIDwgMzAgJiYgdGVtcCA+PSAyMCkge1xyXG4gICAgaWYgKHdpbmQgPD0gNSkge1xyXG4gICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XHJcbiAgICAgIHpvbmUudGV4dENvbnRlbnQgPSBcIlllbGxvdyAtIENhdXRpb25cIjtcclxuICAgICAgd2FybmluZ0xhYmVsLnRleHRDb250ZW50ID0gXCIxNcKwIHRvIDMwwrAgaXMgY29sZFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICB6b25lLnRleHRDb250ZW50ID0gXCJSZWQgLSBEYW5nZXJcIjtcclxuICAgICAgd2FybmluZ0xhYmVsLnRleHRDb250ZW50ID0gXCIyMMKwIHRvIDMwwrAgaXMgY29sZFwiO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAodGVtcCA8IDIwICYmIHRlbXAgPiAwKSB7XHJcbiAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XHJcbiAgICB6b25lLnRleHRDb250ZW50ID0gXCJSZWQgLSBEYW5nZXJcIjtcclxuICAgIHdhcm5pbmdMYWJlbC50ZXh0Q29udGVudCA9XHJcbiAgICAgIFwiMjDCsCB0byAwwrAgaXMgYml0dGVyIGNvbGQgd2l0aCBzaWduaWZpY2FudCByaXNrIG9mIGZyb3N0Yml0ZVwiO1xyXG4gIH0gZWxzZSBpZiAodGVtcCA8PSAwKSB7XHJcbiAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XHJcbiAgICB6b25lLnRleHRDb250ZW50ID0gXCJSZWQgLSBEYW5nZXJcIjtcclxuICAgIHdhcm5pbmdMYWJlbC50ZXh0Q29udGVudCA9XHJcbiAgICAgIFwiLTIwwrAgdG8gLTYwwrAgaXMgZXh0cmVtZSBjb2xkIGFuZCBmcm9zdGJpdGUgaXMgbGlrZWx5XCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgem9uZS50ZXh0Q29udGVudCA9IFwiZXJyb3JcIjtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9