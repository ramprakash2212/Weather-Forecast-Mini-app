import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { weatherApiConstants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public weather_api_url: string = weatherApiConstants.WEATHER_API_URL;
  public weather_api_key: string = weatherApiConstants.WEATHER_API_KEY;
  public number_of_days: number = weatherApiConstants.NUMBER_OF_DAYS;
  
  constructor(private http: HttpClient) { }

  /**
   * Method is used to collect weather information based on city
   * @param city 
   * @returns 
   */
  public getWeatherInformation(city: string) {
    return this.http.get(this.weather_api_url + "?city=" + city + "&key=" + this.weather_api_key + "&days=" + this.number_of_days);
  }
}
