import { Routes } from '@angular/router';
import { LocalWeatherPageComponent } from './local-weather-page/local-weather-page.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { HomePageComponent } from './homepage/homepage.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: HomePageComponent},
  { path: 'local-weather-page', title: 'Day at a glance', component: LocalWeatherPageComponent},
  { path: 'to-do-list', title: 'To do list', component: ToDoListComponent}
];
