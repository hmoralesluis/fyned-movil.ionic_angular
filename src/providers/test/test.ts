import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Restaurant } from '../../models/restauran.model';
import { BehaviorSubject } from 'rxjs';




/*
  Generated class for the TestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TestProvider {

	private _restaurants = new BehaviorSubject<Restaurant[]>([]);
	apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {

  }


  get restaurants() {
    return this._restaurants.asObservable();
  }

  // findAllRestaurants() {
  //   return this.http.get('http://localhost:3003/apirestaurants')
  //   .pipe(
  //     map(this.extractData)
  //   );
	// }

	testapi() {
		return new Promise(resolve => {
			this.http.get('http://localhost:3003/apirestaurants').subscribe(data => {
				resolve(data);
			}, err => {
				console.log(err);
			});
		});
	}

  findRestaurantById() {
    return this.http.get('http://localhost:3003/apicategory/5d0f90ff59533707d067857c')
    .pipe(
      map(respData => {
        return new Restaurant(
          '1233',
          '1233',
          '1233',
          '1233',
          '1233',
          '1233'
        );
        // return respData;
      })
    );
  }

  // findAll() {
  //   return this.http.get('http://localhost:3003/apirestaurants').pipe(
  //     map(this.extractData)
  //   );
  //   // console.log('url value are ' + value);
  //   // .pipe(
  //   //   map(this.extractData),
  //   //   catchError(this.handleError)
  //   // );
  // }

  // private extractData(res: Response) {
  //   let body = res;
  //   return body || {};
  // }

}
