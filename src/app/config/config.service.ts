import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Products } from '../products';

@Injectable({providedIn: 'root'})
export class ConfigService {
  private url = 'http://interviews-env.b8amvayt6w.eu-west-1.elasticbeanstalk.com/products';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getProducts(): Observable<Products[]>{
    return this.http.get<Products[]>(this.url);
  }
}
