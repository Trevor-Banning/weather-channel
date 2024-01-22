import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu'
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { title } from 'process';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatMenuModule, RouterModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss'
})
export class ToolbarComponent {

pageTitle: string;

constructor(private route: ActivatedRoute){

}
ngOnInit(){
  this.route.title.subscribe(title => {
    this.pageTitle = title
  })
}
}
