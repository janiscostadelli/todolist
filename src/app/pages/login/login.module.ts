import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HeaderModule,
    FormsModule,
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
