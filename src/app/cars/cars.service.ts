import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Car} from "./models/car";
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class CarsService {

  private apiUrl = "http://localhost:3000/api/cars";

  constructor(private http : HttpClient) { }

  getCars() : Observable<Car[]> {
    return this.http.get(this.apiUrl)
      .pipe(map((res: any) => res))
  }

  getCar(id: number) : Observable<Car> {
    return this.http.get(this.apiUrl + `/${id}`)
      .pipe(map((res: any) => res))
  }

  addCar(data: any) : Observable<Car> {
    return this.http.post(this.apiUrl, data)
      .pipe(map((res: any) => res))
  }

  updateCar(id: number, data: any) : Observable<Car> {
    return this.http.put(this.apiUrl + `/${id}`, data)
      .pipe(map((res: any) => res))
  }

  removeCar(id: number) : Observable<Car> {
    return this.http.delete(this.apiUrl + `/${id}`)
      .pipe(map((res: any) => res))
  }

}
