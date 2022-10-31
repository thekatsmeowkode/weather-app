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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaUJBQWlCO0FBQy9DLG1DQUFtQyx1QkFBdUI7QUFDMUQsOEJBQThCLGtCQUFrQjtBQUNoRCwrQkFBK0IscUJBQXFCO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzdGd0I7O0FBRWxCO0FBQ1A7QUFDQSw2RUFBNkUsVUFBVTtBQUN2RjtBQUNBLHdEQUF3RCxZQUFZO0FBQ3BFLCtCQUErQixtQkFBbUIsVUFBVTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlGQUFpRixJQUFJLE9BQU8sSUFBSTtBQUNoRztBQUNBLHVEQUF1RCxZQUFZO0FBQ25FLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsbUJBQW1CLDJEQUEyRDtBQUM5RSxtQkFBbUIsbUJBQW1COztBQUV0QyxRQUFRLGdEQUFlO0FBQ3ZCLG1CQUFtQjtBQUNuQjs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7Ozs7O1VDNUNEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ1Q7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0QsbUJBQW1COztBQUVuRTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIseURBQW1CO0FBQ2pELENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVUkgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIHBvcHVsYXRlSFRNTChpdGVtcykge1xuICAgICAgICBsZXQgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LW5hbWUnKVxuICAgICAgICBsZXQgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZScpXG4gICAgICAgIGxldCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZScpXG4gICAgICAgIGxldCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQnKVxuICAgICAgICBsZXQgaHVtaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKVxuICAgICAgICBjaXR5LnRleHRDb250ZW50ID0gaXRlbXMubmFtZVxuICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7aXRlbXMubWFpbi50ZW1wfSDCsEZgXG4gICAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke2l0ZW1zLm1haW4uZmVlbHNfbGlrZX0gwrBGYFxuICAgICAgICB3aW5kLnRleHRDb250ZW50ID0gYCR7aXRlbXMud2luZC5zcGVlZH0gTVBIYFxuICAgICAgICBodW1pZC50ZXh0Q29udGVudCA9IGAke2l0ZW1zLm1haW4uaHVtaWRpdHl9ICVgXG4gICAgICAgIGdldFpvbmUoaXRlbXMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Wm9uZShpdGVtcykge1xuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJylcbiAgICAgICAgbGV0IHpvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuem9uZScpXG4gICAgICAgIGxldCB0ZW1wID0gaXRlbXMubWFpbi50ZW1wXG4gICAgICAgIGxldCBodW1pZCA9IGl0ZW1zLm1haW4uaHVtaWRpdHlcbiAgICAgICAgbGV0IHdpbmQgPSBpdGVtcy53aW5kLnNwZWVkXG4gICAgICAgIC8vU1VNTUVSXG4gICAgICAgIGlmICh0ZW1wIDw9IDg0ICYmIHRlbXAgPj0gNDApIHtcbiAgICAgICAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xuICAgICAgICAgICAgem9uZS50ZXh0Q29udGVudCA9ICdHcmVlbidcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0ZW1wID44NCAmJiB0ZW1wIDw5MCkge1xuICAgICAgICAgICAgaWYgKGh1bWlkID49IDY1IHx8IGh1bWlkIDw9IDkwKSB7XG4gICAgICAgICAgICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93J1xuICAgICAgICAgICAgICAgIHpvbmUudGV4dENvbnRlbnQgPSAnWWVsbG93IC0gQ2F1dGlvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGh1bWlkID49IDkwKSB7XG4gICAgICAgICAgICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJ1xuICAgICAgICAgICAgICAgIHpvbmUudGV4dENvbnRlbnQgPSBcIlJlZCAtIERhbmdlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGVtcCA+PSA5MCAmJiB0ZW1wIDwgOTQpIHtcbiAgICAgICAgICAgIGlmIChodW1pZCA8IDU1KSB7XG4gICAgICAgICAgICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93J1xuICAgICAgICAgICAgICAgIHpvbmUudGV4dENvbnRlbnQgPSAnWWVsbG93IC0gQ2F1dGlvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCdcbiAgICAgICAgICAgICAgICB6b25lLnRleHRDb250ZW50ID0gXCJSZWQgLSBEYW5nZXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRlbXAgPj0gOTQgJiYgdGVtcCA8IDEwMCkge1xuICAgICAgICAgICAgaWYgKGh1bWlkIDwgNTApIHtcbiAgICAgICAgICAgICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnXG4gICAgICAgICAgICAgICAgem9uZS50ZXh0Q29udGVudCA9ICdZZWxsb3cgLSBDYXV0aW9uJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJ1xuICAgICAgICAgICAgICAgIHpvbmUudGV4dENvbnRlbnQgPSBcIlJlZCAtIERhbmdlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGVtcCA+PSAxMDApIHtcbiAgICAgICAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCdcbiAgICAgICAgICAgIHpvbmUudGV4dENvbnRlbnQgPSBcIlJlZCAtIERhbmdlclwiXG4gICAgICAgIH1cbiAgICAgICAgLy9XSU5URVJcbiAgICAgICAgZWxzZSBpZiAodGVtcCA8IDQwICYmIHRlbXAgPj0gMzApIHtcbiAgICAgICAgICAgIGlmICh3aW5kIDw9IDE1KSB7XG4gICAgICAgICAgICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXG4gICAgICAgICAgICAgICAgem9uZS50ZXh0Q29udGVudCA9ICdHcmVlbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdydcbiAgICAgICAgICAgICAgICB6b25lLnRleHRDb250ZW50ID0gJ1llbGxvdyAtIENhdXRpb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGVtcCA8IDMwICYmIHRlbXAgPj0gMjApIHtcbiAgICAgICAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdydcbiAgICAgICAgICAgIHpvbmUudGV4dENvbnRlbnQgPSAnWWVsbG93IC0gQ2F1dGlvbidcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0ZW1wIDwgMjAgKSB7XG4gICAgICAgICAgICBpZiAod2luZCA8PSA1KSB7XG4gICAgICAgICAgICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93J1xuICAgICAgICAgICAgICAgIHpvbmUudGV4dENvbnRlbnQgPSAnWWVsbG93IC0gQ2F1dGlvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCdcbiAgICAgICAgICAgICAgICB6b25lLnRleHRDb250ZW50ID0gXCJSZWQgLSBEYW5nZXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXG4gICAgICAgICAgICB6b25lLnRleHRDb250ZW50ID0gJ2Vycm9yJ1xuICAgICAgICB9XG4gICAgfVxuICAgICAgICBcblxuICAgIHJldHVybiB7cG9wdWxhdGVIVE1MfVxufSkoKSIsImltcG9ydCB7IFVJIH0gZnJvbSBcIi4vVUlcIlxuXG5leHBvcnQgY29uc3Qgd2VhdGhlciA9ICgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uKGxvY2F0aW9uKSB7XG4gICAgICAgIGxldCBsb2NhdGlvbk5hbWUgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9ufX0mbGltaXQ9MSZhcHBpZD1kMzI5M2EwNGZlYzQ0ZjdmMmFkMjE5MGI5Nzk1ZjAxMWBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobG9jYXRpb25OYW1lLCB7bW9kZTonY29ycyd9KVxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge3Rocm93IG5ldyBFcnJvcihgJHtsb2NhdGlvbn0gbm90IGZvdW5kYCl9XG4gICAgICAgICAgICBjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCAocmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgbGV0IGxhdGl0dWRlID0gbG9jYXRpb25EYXRhWzBdLmxhdFxuICAgICAgICAgICAgbGV0IGxvbmdpdHVkZSA9IGxvY2F0aW9uRGF0YVswXS5sb25cbiAgICAgICAgICAgIGdldFdlYXRoZXIobGF0aXR1ZGUsIGxvbmdpdHVkZSlcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKVxuICAgICAgICAgICAgcmV0dXJuIG51bGwgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxhdCwgbG9uKSB7XG4gICAgICAgIGxldCB3ZWF0aGVyRGF0YSA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9ZDMyOTNhMDRmZWM0NGY3ZjJhZDIxOTBiOTc5NWYwMTEmdW5pdHM9aW1wZXJpYWxgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHdlYXRoZXJEYXRhLCB7bW9kZTonY29ycyd9KVxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge3Rocm93IG5ldyBFcnJvcignV2VhdGhlciBub3QgZm91bmQnKX1cbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCAocmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgY29udmVydFdlYXRoZXIod2VhdGhlcilcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnZlcnRXZWF0aGVyKGl0ZW1zKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICB7bmFtZSA6IGNpdHlOYW1lLFxuICAgICAgICAgICAgbWFpbjoge3RlbXAgOiB0ZW1wZXJhdHVyZSwgZmVlbHNfbGlrZTogZmVlbHNMaWtlLCBodW1pZGl0eTogaHVtaWR9LFxuICAgICAgICAgICAgd2luZDoge3NwZWVkOiB3aW5kU3BlZWR9fSA9IGl0ZW1zXG5cbiAgICAgICAgVUkucG9wdWxhdGVIVE1MKGl0ZW1zKVxuICAgICAgICAvLyByZXR1cm4ge2NpdHlOYW1lLCB0ZW1wZXJhdHVyZSwgZmVlbHNMaWtlLCB3aW5kU3BlZWQsIGh1bWlkfVxuICAgIH1cblxuICAgIHJldHVybiB7Y29udmVydFdlYXRoZXIsIGdldExvY2F0aW9ufVxufSkoKSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgd2VhdGhlciB9IGZyb20gXCIuL3dlYXRoZXJcIlxuaW1wb3J0IHtVSX0gZnJvbSAnLi9VSS5qcydcblxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1idXR0b24nKVxuY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZm9ybScpXG5jb25zdCBzZWFyY2hRdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWVyeScpXG5cbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge2UucHJldmVudERlZmF1bHQoKX0pXG5cbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKHNlYXJjaFF1ZXJ5LnZhbHVlID09PSAnJykgcmV0dXJuXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyLmdldExvY2F0aW9uKHNlYXJjaFF1ZXJ5LnZhbHVlKVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=