import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskModalComponent } from './add-task-modal.component';



@NgModule({
  declarations: [AddTaskModalComponent],
  imports: [
    CommonModule
  ],
  exports: [AddTaskModalComponent]
})
export class AddTaskModalModule { }
