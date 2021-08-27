import { CarResolve } from './car-resolve.service';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';


const CARS_ROUTES: Route[] = [
  { path: 'cars/:id',
  component: CarDetailsComponent,
  resolve : { car : CarResolve }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(CARS_ROUTES)
],
  exports: [RouterModule]
})

export class CarsRoutingModule { }
