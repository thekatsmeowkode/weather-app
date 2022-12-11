import Information from "./childcareweatherinfo.png";
import Chart from './childcareweatherchart.png'
// import stylesheet from './styles.css'


const submitButton = document.querySelector(".submit-button");
const searchQuery = document.querySelector(".query");
const imageHolder = document.querySelector(".image-holder");
const chartHolder = document.querySelector('.chart-holder')
const green = `${rgb(0, 190, 0)}`

submitButton.addEventListener("submit", (e) => {
  e.preventDefault();
});

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();
  if (searchQuery.value === "") return;
  const weatherData = await getLocation(searchQuery.value);
});

const myImg = new Image();
myImg.src = Information;
myImg.alt = "Information on behavior of children in weather and various hazards"
imageHolder.appendChild(myImg);

const myChart = new Image()
myChart.src = Chart
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
    card.style.backgroundColor = green;
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
      card.style.backgroundColor = green;
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
