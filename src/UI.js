export const UI = (() => {
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