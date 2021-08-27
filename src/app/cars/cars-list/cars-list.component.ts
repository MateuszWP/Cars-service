import { CarsService } from './../cars.service';
import { TotalCostComponent } from './../total-cost/total-cost.component';
import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Car } from '../models/car';
import { Router } from '@angular/router';

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit {

  @ViewChild("totalCostRef") totalCostRef!: TotalCostComponent;
  totalCost : any;
  grossCost : any;
  cars : Car[];

  constructor(private carsService : CarsService, private router : Router) {
    this.cars = [];
  }

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars() : void {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.countTotalCost();
    })
  }

  goToCarDetails(car : Car) {
    this.router.navigate(['/cars', car.id]);
  }
  //ngAfterViewInit(): void {
    //this.totalCostRef.showGross();
  //)

  showGross() : void {
    this.totalCostRef.showGross();
  }

  countTotalCost() : void {
    this.totalCost = this.cars
      .map((car) => car.cost)
      .reduce((prev, next) => prev + next);
  }

  onShownGross(grossCost : number) : void {
    this.grossCost = grossCost;
  }
}
