import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api } from './config';
import { Observable } from 'rxjs/Observable';
import { map, tap, catchError } from 'rxjs/operators';

let restaurantsURL = api.SERVER_URL + 'apirestaurants',
    favoritesURL =  api.SERVER_URL + 'apicreatelovedrestaurant';

// let httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class RestaurantServiceRest {

    constructor(public http: HttpClient) {
    }

    findAll() {	
			return new Promise(resolve => {
				this.http.get(restaurantsURL).subscribe(data => {
					resolve(data);
				}, err => {
					console.log(err);
				});
			});
					
	    // return this.http.get(restaurantsURL).pipe(
	    //   map(this.extractData),
	    //   catchError(this.handleError)
	    // );
    }

    // findByName(key: string): Observable<{}> {
    //   return this.http.get(restaurantsURL + "?key=" + key).pipe(
    //   	map(this.extractData),
    //   	catchError(this.handleError)
    // 	);
    // }

    // findById(id): Observable<{}> {
    //   return this.http.get(restaurantsURL + id).pipe(
	  //     map(this.extractData),
	  //     catchError(this.handleError)
	  //   );
    // }

    // getFavorites(): Observable<{}> {
    //    return this.http.get(restaurantsURL).pipe(
	  //     map(this.extractData),
	  //     catchError(this.handleError)
	  //   );
    // }

    favorite(restaurant) {
    //   let body = JSON.stringify(restaurant);
    //   return this.http.post(favoritesURL, body, httpOptions).pipe(
    //   	tap((res) => console.log('Favorite added!')),
    //   	catchError(this.handleError)
		// );		
			return new Promise((resolve, reject) => {
				this.http.post(favoritesURL, JSON.stringify({data: 'restaurant'}))
				// .subscribe();
					.subscribe(res => {
						resolve(res);
					}, (err) => {
						reject(err);
					});
			});
    }

    // unfavorite(favorite) {
	  //   return this.http.delete(favoritesURL + favorite.id, httpOptions).pipe(
	  //     tap(_ => console.log(`Favorite deleted id => ${favorite.id}`)),
	  //     catchError(this.handleError)
	  //   );
    // }

    // // Private
	  // private extractData(res: Response) {
	  //   let body = res;
	  //   return body || {};
	  // }

	  // private handleError (error: Response | any) {
	  //   let errMsg: string;
	  //   if (error instanceof Response) {
	  //     const err = error || '';
	  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	  //   } else {
	  //     errMsg = error.message ? error.message : error.toString();
	  //   }
	  //   console.error(errMsg);
	  //   return Observable.throw(errMsg);
	  // }

}
