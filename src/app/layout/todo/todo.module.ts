import { TodoComponent } from './todo.component';
import { TodoRoutingModule } from './todo-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule, TodoRoutingModule
  ],
  declarations: [TodoComponent],
  exports: [TodoComponent]
})
export class TodoModule { }
