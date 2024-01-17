import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';import { ToolbarComponent } from './toolbar/toolbar';


@NgModule({
 imports:      [ ToolbarComponent ],
 declarations: [],
 exports:      [ ToolbarComponent, CommonModule, FormsModule ]
})
export class SharedModule { }
