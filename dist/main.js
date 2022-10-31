/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weather": () => (/* binding */ weather)
/* harmony export */ });
const weather = (() => {
    function convertWeather(items) {
        const
            {name : cityName,
            main: {temp : temperature, feels_like: feelsLike, humidity: humid},
            wind: {speed: windSpeed}} = items

        return {cityName, temperature, feelsLike, windSpeed, humid}
    }

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
const { weather } = __webpack_require__(/*! ./weather */ "./src/weather.js")

const submitButton = document.querySelector('.submit-button')
const searchForm = document.querySelector('.search-form')
const searchQuery = document.querySelector('.query')

submitButton.addEventListener('submit', (e) => {e.preventDefault()})

submitButton.addEventListener('click', async (e) => {
    e.preventDefault()
    if (searchQuery.value === '') return
    const weatherData = await weather.getLocation(searchQuery.value)
    
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBLGFBQWE7QUFDYixtQkFBbUIsMkRBQTJEO0FBQzlFLG1CQUFtQixtQkFBbUI7O0FBRXRDLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBLDZFQUE2RSxVQUFVO0FBQ3ZGO0FBQ0Esd0RBQXdELFlBQVk7QUFDcEUsK0JBQStCLG1CQUFtQixVQUFVO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUZBQWlGLElBQUksT0FBTyxJQUFJO0FBQ2hHO0FBQ0EsdURBQXVELFlBQVk7QUFDbkUsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7Ozs7OztVQ3pDRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ05BLFFBQVEsVUFBVSxFQUFFLG1CQUFPLENBQUMsbUNBQVc7O0FBRXZDO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0QsbUJBQW1COztBQUVuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB3ZWF0aGVyID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBjb252ZXJ0V2VhdGhlcihpdGVtcykge1xuICAgICAgICBjb25zdFxuICAgICAgICAgICAge25hbWUgOiBjaXR5TmFtZSxcbiAgICAgICAgICAgIG1haW46IHt0ZW1wIDogdGVtcGVyYXR1cmUsIGZlZWxzX2xpa2U6IGZlZWxzTGlrZSwgaHVtaWRpdHk6IGh1bWlkfSxcbiAgICAgICAgICAgIHdpbmQ6IHtzcGVlZDogd2luZFNwZWVkfX0gPSBpdGVtc1xuXG4gICAgICAgIHJldHVybiB7Y2l0eU5hbWUsIHRlbXBlcmF0dXJlLCBmZWVsc0xpa2UsIHdpbmRTcGVlZCwgaHVtaWR9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb24obG9jYXRpb24pIHtcbiAgICAgICAgbGV0IGxvY2F0aW9uTmFtZSA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb259fSZsaW1pdD0xJmFwcGlkPWQzMjkzYTA0ZmVjNDRmN2YyYWQyMTkwYjk3OTVmMDExYFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChsb2NhdGlvbk5hbWUsIHttb2RlOidjb3JzJ30pXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7dGhyb3cgbmV3IEVycm9yKGAke2xvY2F0aW9ufSBub3QgZm91bmRgKX1cbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGF3YWl0IChyZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICBsZXQgbGF0aXR1ZGUgPSBsb2NhdGlvbkRhdGFbMF0ubGF0XG4gICAgICAgICAgICBsZXQgbG9uZ2l0dWRlID0gbG9jYXRpb25EYXRhWzBdLmxvblxuICAgICAgICAgICAgZ2V0V2VhdGhlcihsYXRpdHVkZSwgbG9uZ2l0dWRlKVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgYWxlcnQoZXJyb3IpXG4gICAgICAgICAgICByZXR1cm4gbnVsbCBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobGF0LCBsb24pIHtcbiAgICAgICAgbGV0IHdlYXRoZXJEYXRhID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD1kMzI5M2EwNGZlYzQ0ZjdmMmFkMjE5MGI5Nzk1ZjAxMSZ1bml0cz1pbXBlcmlhbGBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2god2VhdGhlckRhdGEsIHttb2RlOidjb3JzJ30pXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7dGhyb3cgbmV3IEVycm9yKCdXZWF0aGVyIG5vdCBmb3VuZCcpfVxuICAgICAgICAgICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IChyZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICBjb252ZXJ0V2VhdGhlcih3ZWF0aGVyKVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgYWxlcnQoZXJyb3IpXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtjb252ZXJ0V2VhdGhlciwgZ2V0TG9jYXRpb259XG59KSgpIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCB7IHdlYXRoZXIgfSA9IHJlcXVpcmUoXCIuL3dlYXRoZXJcIilcblxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1idXR0b24nKVxuY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZm9ybScpXG5jb25zdCBzZWFyY2hRdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWVyeScpXG5cbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge2UucHJldmVudERlZmF1bHQoKX0pXG5cbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKHNlYXJjaFF1ZXJ5LnZhbHVlID09PSAnJykgcmV0dXJuXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyLmdldExvY2F0aW9uKHNlYXJjaFF1ZXJ5LnZhbHVlKVxuICAgIFxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=