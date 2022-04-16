import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { TaskItemModule } from 'src/app/shared/task-item/task-item.module';
import { AddTaskModalModule } from 'src/app/shared/add-task-modal/add-task-modal.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    TaskItemModule,
    AddTaskModalModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
