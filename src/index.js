const { weather } = require("./weather")

const submitButton = document.querySelector('.submit-button')
const searchForm = document.querySelector('.search-form')
const searchQuery = document.querySelector('.query')

submitButton.addEventListener('submit', (e) => {e.preventDefault()})

submitButton.addEventListener('click', async (e) => {
    e.preventDefault()
    if (searchQuery.value === '') return
    const weatherData = await weather.getLocation(searchQuery.value)
    
})