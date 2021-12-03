import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  URI: string = '';
  apiKey: string ='edeb62d33bea034dde38a95817686a57'
  API: string= 'https://api.openweathermap.org/data/2.5/weather?'
  constructor(private http: HttpClient) {
    this.URI = this.API+`appid=${this.apiKey}&q=` 
   }
   getWeather(cityName: string, countryCode: string){
     return this.http.get(`${this.URI}${cityName},${countryCode}`)
   }
}
