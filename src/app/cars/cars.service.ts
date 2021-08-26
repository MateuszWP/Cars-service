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
}
