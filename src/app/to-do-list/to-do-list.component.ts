import { Component } from '@angular/core';
import { ToolbarComponent } from '../shared/toolbar/toolbar';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ToolbarComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {

}
