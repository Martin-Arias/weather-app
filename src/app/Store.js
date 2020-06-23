export class Store {
    constructor(){
        this.city;
        this.countryCode;
        this.defaultCountry = 'ua';
        this.defaultCity = 'Kiev'
    }
    getLocationData(){
        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity
            this.countryCode = this.defaultCountry
        }else{
            this.city = localStorage.getItem('city');
            this.city = localStorage.getItem('countryCode');
        }
        return {
            city: this.city,
            countryCode : this.countryCode
        }
    }

    setLocationData(city, countryCode){
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);

    }
}
