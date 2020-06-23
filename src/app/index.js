const { Weather } = require('./Weather');


const { Store } = require('./Store')
const { UI } = require('./UI');
const { strict } = require('assert');

const store = new Store();
const { city, countryCode } = store.getLocationData();
const weather = new Weather(city,countryCode); //Ubicacion por defecto

const ui = new UI();

require('./index.css')

async function fetchWeather() {
  const data = await weather.getWeather();
  console.log(data);
  
  ui.render(data);
  
}

document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    const city = document.getElementById('city').value
    const countryCode = document.getElementById('countryCode').value
    weather.changeLocation(city,countryCode); //Cambio la localizacion por defecto 
    store.setLocationData(city,countryCode);
    fetchWeather();
    e.preventDefault();
})

document.addEventListener('DOMContentLoaded',fetchWeather); 