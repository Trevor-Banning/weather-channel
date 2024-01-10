import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-local-weather-page',
  standalone: true,
  imports: [],
  templateUrl: './local-weather-page.component.html',
  styleUrl: './local-weather-page.component.scss'
})
export class LocalWeatherPageComponent {
  ngOnInit(){
  const params = {
    access_key: '9906024f1ff9bd94343e7267a9ae7d58',
    query: 'Fort Collins'
  }

  axios.get('http://api.weatherstack.com/current', {params})
    .then(response => {
      const apiResponse = response.data;
      console.log(`Current temperature in ${apiResponse.location?.name} is ${apiResponse.current.temperature}℃`);
    }).catch(error => {
      console.log(error);
    });
  }
}
