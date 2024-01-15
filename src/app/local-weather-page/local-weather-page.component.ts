import { Component } from '@angular/core';
import axios from 'axios';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { localWeatherModel } from '../models/local-weather-model';
import { MatToolbarModule} from '@angular/material/toolbar'
@Component({
  selector: 'app-local-weather-page',
  standalone: true,
  imports: [MatFormFieldModule, MatCardModule, MatSidenavModule, MatListModule, MatToolbarModule],
  templateUrl: './local-weather-page.component.html',
  styleUrl: './local-weather-page.component.scss'
})
export class LocalWeatherPageComponent {

  weather = new localWeatherModel()
  ngOnInit(){
  const params = {
    access_key: '9906024f1ff9bd94343e7267a9ae7d58',
    query: 'Fort Collins'
  }

  axios.get('http://api.weatherstack.com/current', {params})
    .then(response => {
      console.log(response.data)
      this.weather.cityName = response.data.location.name;
      this.weather.currentTemperature = response.data.current.temperature;
      this.weather.feelsLike = response.data.current.feelslike;
      this.weather.localTime = response.data.location.localtime;
      this.weather.description = response.data.current.weather_descriptions;
    }).catch(error => {
      console.log(error);
    });
  }
}
