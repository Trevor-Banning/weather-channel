import { Component } from '@angular/core';
import { ToolbarComponent } from '../shared/toolbar/toolbar';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ToolbarComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomePageComponent {

}
