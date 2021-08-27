import { RouterModule } from '@angular/router';
import { CarsService } from './cars/cars.service';
import { CarsModule } from './cars/cars.module';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core-module/core.module';
import { CarsListComponent } from './cars/cars-list/cars-list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarsModule,
    HttpClientModule,
    CoreModule,
    RouterModule.forRoot([
      { path: 'cars', component: CarsListComponent }
    ])
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
