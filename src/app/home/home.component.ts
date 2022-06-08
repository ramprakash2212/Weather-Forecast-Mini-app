import { Component, OnInit } from '@angular/core';
import { weatherCities, weatherConstants } from '../constants';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public weather_forecast: string = weatherConstants.WEATHER_FORECAST;
  public weather_city: string = weatherConstants.WEATHER_CITY;
  public cities = weatherCities;
  public weatherInfo: any;
  public selectedCity: any;
  public imagepath: string = weatherConstants.IMAGE_PATH;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
    if (this.cities && this.cities.length > 0) {
      this.selectedCity = this.cities[0];
      this._weatherService.getWeatherInformation(this.cities[0]).subscribe(data => this.collectWeatherData(data));
    }
  }

  /**
   * Method is used to get weather Information from service
   */
  public getWeatherData() {
    if (this.selectedCity) {
      this._weatherService.getWeatherInformation(this.selectedCity).subscribe(data => this.collectWeatherData(data));
    }
  }

  /**
   * Method is used to collect weather Data
   * @param weatherData 
   * @returns 
   */
  public collectWeatherData(weatherData: any) {
    if (weatherData && weatherData.data && weatherData.data.length > 0) {
      this.weatherInfo = weatherData.data;
      return this.weatherInfo;
    }
  }
  
  /**
   * Method is used to concatenate weather image using image path
   * @param args 
   * @returns 
   */
  public getImagePath(args: any) {
    let resultData = '';
    if (this.imagepath && args && args.weather && args.weather.icon) {
      resultData = this.imagepath + args.weather.icon + '.png';
    }
    return resultData;
  }
}
