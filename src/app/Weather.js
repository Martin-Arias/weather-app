export class Weather {
    
    constructor(city, countryCode){ //Construyo la peticion a la API
        this.apikey = '68b9003e2c8cb22bfaebd30e2af8014f'
        this.city = city;
        this.countryCode = countryCode;
    }
    async getWeather(){
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric&lang=es` //Peticion a la API
        const response = await fetch(URI); //Respuesta de la API
        const data =  await response.json(); //Formateo a JSON
        return data;
    }
    changeLocation(city,countryCode){
        this.city = city;
        this.countryCode = countryCode;
    }
}
