import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from './config';

let urluserbymail = api.SERVER_URL + 'apiuserbyemail';

/*
  Generated class for the RestBackendProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestBackendProvider {

  private isLoggin: boolean = false;
	private idUserlogin: string = '0';
	private imagesRestUrl = 'http://localhost:3003/images/uploads/restaurant/';
	private imagesDishUrl = 'http://localhost:3003/images/uploads/gig/';
	private imagesCathUrl = 'http://localhost:3003/images/uploads/category/';

	// private imagesRestUrl = 'http://164.68.116.40:3003/images/uploads/restaurant/';
	// private imagesDishUrl = 'http://164.68.116.40:3003/images/uploads/gig/';
	// private imagesCathUrl = 'http://164.68.116.40:3003/images/uploads/category/';

	private latitude: number = 0;
	private longitude: number = 0;
	private haveCordenadas: Boolean = false;

  constructor(public http: HttpClient) {
	}

	getImgRestUrl() {
		return this.imagesRestUrl;
	}

	getImgDishUrl() {
		return this.imagesDishUrl;
	}

	getImgCatUrl() {
		return this.imagesCathUrl;
	}

  setIduserlogin(userId: string) {
    this.idUserlogin = userId;
  }

  getIduserlogin() {
    return this.idUserlogin;
  }

  getIsLogging() {
    return this.isLoggin;
	}

	getLatitude() {
		return this.latitude;
	}

	setLatitude(lat: number) {
		this.latitude = lat;
	}

	getLongitude() {
		return this.longitude;
	}

	setLongitude(lon: number) {
		this.longitude = lon;
	}

	getHaveCordenadas() {
		return this.haveCordenadas;
	}

	setHaveCordenadas(haveC: Boolean) {
		this.haveCordenadas = haveC;
	}

	
	test() {
		return new Promise(resolve => {
      this.http.post(api.SERVER_URL+'apitest', {todo: 'Hamlet'}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
	}

  checkUserByEmail(email: string) {
    return new Promise(resolve => {
      this.http.get(urluserbymail+'/'+email).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addUser(name: string, email: string, pass: string) {
    return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'adduserexterno/'+name+'/'+email+'/'+pass).subscribe(userdata => {
        resolve(userdata);
      }, err => {
        console.log(err);
      });
    });
  }

  crearCarro(idUsuario: string) {
    return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'apicreatecart/'+idUsuario).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  crearRestFavoritos(idUsuario: string) {
    return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'apicreatelovedrestaurant/'+idUsuario).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  crearPlatosFavoritos(idUsuario: string) {
    return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'apicreatelovedgig/'+idUsuario).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  canLoginTheUser(email: string, pass: string) {
    return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'apicanlogintheuser/'+email+'/'+pass).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  logIn() {
    this.isLoggin = true;
  }

  logOut() {
    this.isLoggin = false;
    this.idUserlogin = '0';
  }



  getRestAndPlatosByRestaurantId(idRest: string) {
    return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'apirestaurantandgigs/'+idRest).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
	}

	getDishById(dishId: string) {
		return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'apigig/'+dishId).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  findAllRestaurants() {
    return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'apirestaurants').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  findAllDishes() {
    return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'apigigs').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    })
  }

  findSugerenciaDishes() {
    return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'apigigssugerencia').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    })
  }

  addRestaurantToFavorite(restId: string) {
    return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'apiaddresttolovedrest/'+this.idUserlogin+'/'+restId).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getFavoriteRestaurantByUserId() {
    return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'apigetlovedrestbyuserid/'+this.idUserlogin).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  delFavoriteRestaurantByUserId(idRest: string) {
    return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'apidelresttolovedrest/'+this.idUserlogin+'/'+idRest).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  addDishToFavorite(dishId: string) {
    return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'apiaddgigtolovedgig/'+this.idUserlogin+'/'+dishId).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getFavoriteDishtByUserId() {
    return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'apigetlovedgigbyuserid/'+this.idUserlogin).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  delFavoritedishByUserId(idDish: string) {
    return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'apidelgigtolovedgig/'+this.idUserlogin+'/'+idDish).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addDishToCart(dishId: string, qty: number) {
    return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'apiaddgigtocart/'+this.idUserlogin+'/'+dishId+'/'+qty).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getCartByUserId() {
    return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'apigetcartbyuserid/'+this.idUserlogin).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  modifyItemFromCartQty(itemId: string, qty: number) {
    return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'apimodifyitemqtyfromcart/'+this.idUserlogin+'/'+itemId+'/'+qty).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  deleteItemFromCart(itemId: string) {
    return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'apidelorderfromcart/'+this.idUserlogin+'/'+itemId).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  createorderandcleancart() {
    return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'apicreateorderbyuserid/'+this.idUserlogin).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getorderbyuser() {
    return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'getordercartbyuserid/'+this.idUserlogin).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getcategories() {
    return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'apicategories').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getsysdistance() {
    return new Promise(resolve => {
      this.http.get(api.SERVER_URL+'apigetdistance').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
