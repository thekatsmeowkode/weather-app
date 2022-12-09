/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });
const UI = (() => {
    function populateHTML(items) {
        let city = document.querySelector('.city-name')
        let temp = document.querySelector('.temperature')
        let feelsLike = document.querySelector('.feels-like')
        let wind = document.querySelector('.wind')
        let humid = document.querySelector('.humidity')
        city.textContent = items.name
        temp.textContent = `${items.main.temp} °F`
        feelsLike.textContent = `${items.main.feels_like} °F`
        wind.textContent = `${items.wind.speed} MPH`
        humid.textContent = `${items.main.humidity} %`
        getZone(items)
    }

    function getZone(items) {
        let card = document.querySelector('.card')
        let zone = document.querySelector('.zone')
        let temp = items.main.temp
        let humid = items.main.humidity
        let wind = items.wind.speed
        //SUMMER
        if (temp <= 84 && temp >= 40) {
            card.style.backgroundColor = 'green'
            zone.textContent = 'Green'
        }
        else if (temp >84 && temp <90) {
            if (humid >= 65 || humid <= 90) {
                card.style.backgroundColor = 'yellow'
                zone.textContent = 'Yellow - Caution'
            }
            else if (humid >= 90) {
                card.style.backgroundColor = 'red'
                zone.textContent = "Red - Danger"
            }
        }
        else if (temp >= 90 && temp < 94) {
            if (humid < 55) {
                card.style.backgroundColor = 'yellow'
                zone.textContent = 'Yellow - Caution'
            }
            else {
                card.style.backgroundColor = 'red'
                zone.textContent = "Red - Danger"
            }
        }
        else if (temp >= 94 && temp < 100) {
            if (humid < 50) {
                card.style.backgroundColor = 'yellow'
                zone.textContent = 'Yellow - Caution'
            }
            else {
                card.style.backgroundColor = 'red'
                zone.textContent = "Red - Danger"
            }
        }
        else if (temp >= 100) {
            card.style.backgroundColor = 'red'
            zone.textContent = "Red - Danger"
        }
        //WINTER
        else if (temp < 40 && temp >= 30) {
            if (wind <= 15) {
                card.style.backgroundColor = 'green'
                zone.textContent = 'Green'
            }
            else {
                card.style.backgroundColor = 'yellow'
                zone.textContent = 'Yellow - Caution'
            }
        }
        else if (temp < 30 && temp >= 20) {
            card.style.backgroundColor = 'yellow'
            zone.textContent = 'Yellow - Caution'
        }
        else if (temp < 20 ) {
            if (wind <= 5) {
                card.style.backgroundColor = 'yellow'
                zone.textContent = 'Yellow - Caution'
            }
            else {
                card.style.backgroundColor = 'red'
                zone.textContent = "Red - Danger"
            }
        }
        else {
            card.style.backgroundColor = 'white'
            zone.textContent = 'error'
        }
    }
        

    return {populateHTML}
})()

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weather": () => (/* binding */ weather)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.js");


const weather = (() => {
        async function getLocation(location) {
        let locationName = `http://api.openweathermap.org/geo/1.0/direct?q=${location}}&limit=1&appid=d3293a04fec44f7f2ad2190b9795f011`
        try {
            const response = await fetch(locationName, {mode:'cors'})
            if (!response.ok) {throw new Error(`${location} not found`)}
            const locationData = await (response.json())
            let latitude = locationData[0].lat
            let longitude = locationData[0].lon
            getWeather(latitude, longitude)
        }
        catch (error) {
            alert(error)
            return null 
        }
    }

    async function getWeather(lat, lon) {
        let weatherData = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d3293a04fec44f7f2ad2190b9795f011&units=imperial`
        try {
            const response = await fetch(weatherData, {mode:'cors'})
            if (!response.ok) {throw new Error('Weather not found')}
            const weather = await (response.json())
            convertWeather(weather)
        }
        catch (error) {
            alert(error)
            return null
        }
    }

    function convertWeather(items) {
        const
            {name : cityName,
            main: {temp : temperature, feels_like: feelsLike, humidity: humid},
            wind: {speed: windSpeed}} = items

        _UI__WEBPACK_IMPORTED_MODULE_0__.UI.populateHTML(items)
        // return {cityName, temperature, feelsLike, windSpeed, humid}
    }

    return {convertWeather, getLocation}
})()

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI.js */ "./src/UI.js");



const submitButton = document.querySelector('.submit-button')
const searchForm = document.querySelector('.search-form')
const searchQuery = document.querySelector('.query')

submitButton.addEventListener('submit', (e) => {e.preventDefault()})

submitButton.addEventListener('click', async (e) => {
    e.preventDefault()
    if (searchQuery.value === '') return
    const weatherData = await _weather__WEBPACK_IMPORTED_MODULE_0__.weather.getLocation(searchQuery.value)
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaUJBQWlCO0FBQy9DLG1DQUFtQyx1QkFBdUI7QUFDMUQsOEJBQThCLGtCQUFrQjtBQUNoRCwrQkFBK0IscUJBQXFCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0Z3QjtBQUN6QjtBQUNPO0FBQ1A7QUFDQSw2RUFBNkUsVUFBVTtBQUN2RjtBQUNBLHdEQUF3RCxZQUFZO0FBQ3BFLCtCQUErQixtQkFBbUIsVUFBVTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUYsSUFBSSxPQUFPLElBQUk7QUFDaEc7QUFDQSx1REFBdUQsWUFBWTtBQUNuRSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixtQkFBbUIsMkRBQTJEO0FBQzlFLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQSxRQUFRLGdEQUFlO0FBQ3ZCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7Ozs7OztVQzVDRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05tQztBQUNUO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsbUJBQW1CO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHlEQUFtQjtBQUNqRCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFVJID0gKCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlSFRNTChpdGVtcykge1xyXG4gICAgICAgIGxldCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktbmFtZScpXHJcbiAgICAgICAgbGV0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKVxyXG4gICAgICAgIGxldCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZScpXHJcbiAgICAgICAgbGV0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCcpXHJcbiAgICAgICAgbGV0IGh1bWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5JylcclxuICAgICAgICBjaXR5LnRleHRDb250ZW50ID0gaXRlbXMubmFtZVxyXG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtpdGVtcy5tYWluLnRlbXB9IMKwRmBcclxuICAgICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtpdGVtcy5tYWluLmZlZWxzX2xpa2V9IMKwRmBcclxuICAgICAgICB3aW5kLnRleHRDb250ZW50ID0gYCR7aXRlbXMud2luZC5zcGVlZH0gTVBIYFxyXG4gICAgICAgIGh1bWlkLnRleHRDb250ZW50ID0gYCR7aXRlbXMubWFpbi5odW1pZGl0eX0gJWBcclxuICAgICAgICBnZXRab25lKGl0ZW1zKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFpvbmUoaXRlbXMpIHtcclxuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJylcclxuICAgICAgICBsZXQgem9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy56b25lJylcclxuICAgICAgICBsZXQgdGVtcCA9IGl0ZW1zLm1haW4udGVtcFxyXG4gICAgICAgIGxldCBodW1pZCA9IGl0ZW1zLm1haW4uaHVtaWRpdHlcclxuICAgICAgICBsZXQgd2luZCA9IGl0ZW1zLndpbmQuc3BlZWRcclxuICAgICAgICAvL1NVTU1FUlxyXG4gICAgICAgIGlmICh0ZW1wIDw9IDg0ICYmIHRlbXAgPj0gNDApIHtcclxuICAgICAgICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgIHpvbmUudGV4dENvbnRlbnQgPSAnR3JlZW4nXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRlbXAgPjg0ICYmIHRlbXAgPDkwKSB7XHJcbiAgICAgICAgICAgIGlmIChodW1pZCA+PSA2NSB8fCBodW1pZCA8PSA5MCkge1xyXG4gICAgICAgICAgICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93J1xyXG4gICAgICAgICAgICAgICAgem9uZS50ZXh0Q29udGVudCA9ICdZZWxsb3cgLSBDYXV0aW9uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGh1bWlkID49IDkwKSB7XHJcbiAgICAgICAgICAgICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnXHJcbiAgICAgICAgICAgICAgICB6b25lLnRleHRDb250ZW50ID0gXCJSZWQgLSBEYW5nZXJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRlbXAgPj0gOTAgJiYgdGVtcCA8IDk0KSB7XHJcbiAgICAgICAgICAgIGlmIChodW1pZCA8IDU1KSB7XHJcbiAgICAgICAgICAgICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnXHJcbiAgICAgICAgICAgICAgICB6b25lLnRleHRDb250ZW50ID0gJ1llbGxvdyAtIENhdXRpb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnXHJcbiAgICAgICAgICAgICAgICB6b25lLnRleHRDb250ZW50ID0gXCJSZWQgLSBEYW5nZXJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRlbXAgPj0gOTQgJiYgdGVtcCA8IDEwMCkge1xyXG4gICAgICAgICAgICBpZiAoaHVtaWQgPCA1MCkge1xyXG4gICAgICAgICAgICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93J1xyXG4gICAgICAgICAgICAgICAgem9uZS50ZXh0Q29udGVudCA9ICdZZWxsb3cgLSBDYXV0aW9uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJ1xyXG4gICAgICAgICAgICAgICAgem9uZS50ZXh0Q29udGVudCA9IFwiUmVkIC0gRGFuZ2VyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0ZW1wID49IDEwMCkge1xyXG4gICAgICAgICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnXHJcbiAgICAgICAgICAgIHpvbmUudGV4dENvbnRlbnQgPSBcIlJlZCAtIERhbmdlclwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vV0lOVEVSXHJcbiAgICAgICAgZWxzZSBpZiAodGVtcCA8IDQwICYmIHRlbXAgPj0gMzApIHtcclxuICAgICAgICAgICAgaWYgKHdpbmQgPD0gMTUpIHtcclxuICAgICAgICAgICAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgem9uZS50ZXh0Q29udGVudCA9ICdHcmVlbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdydcclxuICAgICAgICAgICAgICAgIHpvbmUudGV4dENvbnRlbnQgPSAnWWVsbG93IC0gQ2F1dGlvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0ZW1wIDwgMzAgJiYgdGVtcCA+PSAyMCkge1xyXG4gICAgICAgICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnXHJcbiAgICAgICAgICAgIHpvbmUudGV4dENvbnRlbnQgPSAnWWVsbG93IC0gQ2F1dGlvbidcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGVtcCA8IDIwICkge1xyXG4gICAgICAgICAgICBpZiAod2luZCA8PSA1KSB7XHJcbiAgICAgICAgICAgICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnXHJcbiAgICAgICAgICAgICAgICB6b25lLnRleHRDb250ZW50ID0gJ1llbGxvdyAtIENhdXRpb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnXHJcbiAgICAgICAgICAgICAgICB6b25lLnRleHRDb250ZW50ID0gXCJSZWQgLSBEYW5nZXJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgem9uZS50ZXh0Q29udGVudCA9ICdlcnJvcidcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgcmV0dXJuIHtwb3B1bGF0ZUhUTUx9XHJcbn0pKCkiLCJpbXBvcnQgeyBVSSB9IGZyb20gXCIuL1VJXCJcclxuXHJcbmV4cG9ydCBjb25zdCB3ZWF0aGVyID0gKCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbihsb2NhdGlvbikge1xyXG4gICAgICAgIGxldCBsb2NhdGlvbk5hbWUgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9ufX0mbGltaXQ9MSZhcHBpZD1kMzI5M2EwNGZlYzQ0ZjdmMmFkMjE5MGI5Nzk1ZjAxMWBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGxvY2F0aW9uTmFtZSwge21vZGU6J2NvcnMnfSlcclxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge3Rocm93IG5ldyBFcnJvcihgJHtsb2NhdGlvbn0gbm90IGZvdW5kYCl9XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGF3YWl0IChyZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIGxldCBsYXRpdHVkZSA9IGxvY2F0aW9uRGF0YVswXS5sYXRcclxuICAgICAgICAgICAgbGV0IGxvbmdpdHVkZSA9IGxvY2F0aW9uRGF0YVswXS5sb25cclxuICAgICAgICAgICAgZ2V0V2VhdGhlcihsYXRpdHVkZSwgbG9uZ2l0dWRlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3IpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxhdCwgbG9uKSB7XHJcbiAgICAgICAgbGV0IHdlYXRoZXJEYXRhID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD1kMzI5M2EwNGZlYzQ0ZjdmMmFkMjE5MGI5Nzk1ZjAxMSZ1bml0cz1pbXBlcmlhbGBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHdlYXRoZXJEYXRhLCB7bW9kZTonY29ycyd9KVxyXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7dGhyb3cgbmV3IEVycm9yKCdXZWF0aGVyIG5vdCBmb3VuZCcpfVxyXG4gICAgICAgICAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgKHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgY29udmVydFdlYXRoZXIod2VhdGhlcilcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb252ZXJ0V2VhdGhlcihpdGVtcykge1xyXG4gICAgICAgIGNvbnN0XHJcbiAgICAgICAgICAgIHtuYW1lIDogY2l0eU5hbWUsXHJcbiAgICAgICAgICAgIG1haW46IHt0ZW1wIDogdGVtcGVyYXR1cmUsIGZlZWxzX2xpa2U6IGZlZWxzTGlrZSwgaHVtaWRpdHk6IGh1bWlkfSxcclxuICAgICAgICAgICAgd2luZDoge3NwZWVkOiB3aW5kU3BlZWR9fSA9IGl0ZW1zXHJcblxyXG4gICAgICAgIFVJLnBvcHVsYXRlSFRNTChpdGVtcylcclxuICAgICAgICAvLyByZXR1cm4ge2NpdHlOYW1lLCB0ZW1wZXJhdHVyZSwgZmVlbHNMaWtlLCB3aW5kU3BlZWQsIGh1bWlkfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Y29udmVydFdlYXRoZXIsIGdldExvY2F0aW9ufVxyXG59KSgpIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB3ZWF0aGVyIH0gZnJvbSBcIi4vd2VhdGhlclwiXHJcbmltcG9ydCB7VUl9IGZyb20gJy4vVUkuanMnXHJcblxyXG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LWJ1dHRvbicpXHJcbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWZvcm0nKVxyXG5jb25zdCBzZWFyY2hRdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWVyeScpXHJcblxyXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtlLnByZXZlbnREZWZhdWx0KCl9KVxyXG5cclxuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgaWYgKHNlYXJjaFF1ZXJ5LnZhbHVlID09PSAnJykgcmV0dXJuXHJcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHdlYXRoZXIuZ2V0TG9jYXRpb24oc2VhcmNoUXVlcnkudmFsdWUpXHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9