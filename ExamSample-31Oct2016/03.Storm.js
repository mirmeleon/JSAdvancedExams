let Record = (function () {
    let closureId = 0;

   return class Record {
    constructor(temperature, humidity, pressure, windSpeed){

       this.temperature = temperature;
       this.humidity = humidity;
       this.pressure = pressure;
       this.windSpeed = windSpeed;
       this.id = closureId++;
    }
    get status(){
        let weatherStatus;
        if(this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25){
            weatherStatus = 'Stormy';
        }
        else {
            weatherStatus = 'Not stormy'
        }
        return weatherStatus;
    }
    toString(){


        let res = `Reading ID: ${this.id}\n`;
        res += `Temperature: ${this.temperature}*C\n`;
        res += `Relative Humidity: ${this.humidity}%\n`;
        res += `Pressure: ${this.pressure}hpa\n`;
        res += `Wind Speed: ${this.windSpeed}m/s\n`;
        res += `Weather: ${this.status}`;
        return res;
    }
}

})();
let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());


let record2 = new Record(10, 40, 680, 30);
console.log(record2.toString());




