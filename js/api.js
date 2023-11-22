const weatherh1 = document.querySelector('.weather-h1'),
      statusrElement = document.querySelector('#status-r'),
      numrElement = document.querySelector('#num-r'),
      numhElement = document.querySelector('#num-h'),
      statushElement = document.querySelector('#status-h'),
      numwElement = document.querySelector('#num-w'),
      statuswElement = document.querySelector('#status-w'),
      cityInfo = document.querySelector('.city-info'),
      locationButtons = document.querySelectorAll('.locations-btn')

locationButtons.forEach(item => {
    item.addEventListener('click', handleLocationClick);
});

function handleLocationClick(event){
    const location = event.target.dataset.location;
    const url = locations[location];
    setStats(url, location)
}

async function getAPI(url){
    const response = await fetch(url)
    return response.json()
}

function weatherCodeDict(code){
    switch(code){
        case 0:
            return 'Clear sky'
            break
        case 1:
            return 'Mainly clear'
            break
        case 2:
            return 'Partly cloudy'
            break
        case 3:
            return 'Overcast'
            break
        case 45:
            return 'Fog'
            break
        case 48:
            return 'Despositing rime fog'
            break
        case 51:
            return 'Light Drizzle'
            break
        case 53:
            return 'Moderate Drizzle'
            break
        case 55:
            return 'Dense Drizzle'
            break
        case 56:
            return 'Light Freezing Drizzle'
            break
        case 57:
            return 'Dense Freezing Drizzle'
            break
        case 61:
            return 'Slight rain'
            break
        case 63:
            return 'Moderate rain'
            break
        case 65:
            return 'Heavy rain'
            break
        case 66:
            return 'Light freezing rain'
            break
        case 67:
            return 'Dense freezing rain'
            break
        case 71:
            return 'Slight snow fall'
            break
        case 73:
            return 'Moderate snow fall'
            break
        case 75:
            return 'Dense snow fall'
            break
        case 77:
            return 'Snow grains'
            break
        case 80:
            return 'Slight rain showers'
            break
        case 81:
            return 'Moderate rain showers'
            break
        case 82:
            return 'Violent rain showers'
            break
        case 85:
            return 'Slight snow showers'
            break
        case 86:
            return 'Heavy snow showers'
            break
        case  '95':
            return 'Thunderstorms'
            break
        case 96:
            return 'Thunderstorms with slight hail'
            break
        case 99:
            return 'Thunderstorms with heavy hail'
    }
}

const locations = {
    'São Paulo': 'https://api.open-meteo.com/v1/forecast?latitude=-23.54&longitude=-46.63&hourly=temperature_2m,relativehumidity_2m,cloudcover,windspeed_10m,weathercode',
    'Birmingham': 'https://api.open-meteo.com/v1/forecast?latitude=52.48&longitude=-1.89&hourly=temperature_2m,relativehumidity_2m,cloudcover,windspeed_10m,weathercode',
    'Manchester': 'https://api.open-meteo.com/v1/forecast?latitude=53.48&longitude=-1.23&hourly=temperature_2m,relativehumidity_2m,cloudcover,windspeed_10m,weathercode',
    'New York': 'https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.00&hourly=temperature_2m,relativehumidity_2m,cloudcover,windspeed_10m,weathercode',
    'California': 'https://api.open-meteo.com/v1/forecast?latitude=38.62&longitude=-92.56&hourly=temperature_2m,relativehumidity_2m,cloudcover,windspeed_10m,weathercode'
}

function setStats(url, city) {
    getAPI(url)
    .then((data) => {
        let temperature_unit = data.hourly_units.temperature_2m
        let cloudcover_unit = data.hourly_units.cloudcover
        let humidity_unit = data.hourly_units.relativehumidity_2m
        let wind_unit = data.hourly_units.windspeed_10m

        let temperature = data.hourly.temperature_2m[0] + ' ' + temperature_unit
        let cloudcover = data.hourly.cloudcover[0] + cloudcover_unit
        let humidity = data.hourly.relativehumidity_2m[0] + humidity_unit
        let wind = data.hourly.windspeed_10m[0] + wind_unit

        let weathercode = data.hourly.weathercode[0]
        let weatherStats = weatherCodeDict(weathercode)

        statusrElement.textContent = weatherStats
        numrElement.textContent = cloudcover
        numhElement.textContent = humidity
        numwElement.textContent = wind
        cityInfo.textContent = city


        weatherh1.textContent = temperature
    })

}

window.onload = () => {
    setStats(locations['São Paulo'], 'São Paulo')
}