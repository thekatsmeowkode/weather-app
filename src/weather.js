import { UI } from "./UI"

export const weather = (() => {
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

        UI.populateHTML(items)
        // return {cityName, temperature, feelsLike, windSpeed, humid}
    }

    return {convertWeather, getLocation}
})()