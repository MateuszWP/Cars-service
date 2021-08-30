import { CarResolve } from './car-resolve.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { SharedModule } from '../shared-module/shared.module';
import { CarDetailsComponent } from './car-details/car-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [
    CarsListComponent
  ],

  providers: [
    CarResolve
  ],

  declarations: [
    CarsListComponent,
    TotalCostComponent,
    CarDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class CarsModule { }
