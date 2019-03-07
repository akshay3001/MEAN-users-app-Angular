import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FieldComponent } from './field.component';
import { SignupComponent } from './signup/signup.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FieldComponent,
    SignupComponent,
    VendorDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
