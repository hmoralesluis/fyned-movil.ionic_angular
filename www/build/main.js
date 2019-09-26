webpackJsonp([24],{

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestBackendProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var urluserbymail = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apiuserbyemail';
var restaurantsURL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apirestaurants';
/*
  Generated class for the RestBackendProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestBackendProvider = /** @class */ (function () {
    function RestBackendProvider(http) {
        this.http = http;
        this.isLoggin = false;
        this.idUserlogin = '0';
        // private imagesRestUrl = 'http://localhost:3003/images/uploads/restaurant/';
        // private imagesDishUrl = 'http://localhost:3003/images/uploads/gig/';
        // private imagesCathUrl = 'http://localhost:3003/images/uploads/category/';
        this.imagesRestUrl = 'http://164.68.116.40:3003/images/uploads/restaurant/';
        this.imagesDishUrl = 'http://164.68.116.40:3003/images/uploads/gig/';
        this.imagesCathUrl = 'http://164.68.116.40:3003/images/uploads/category/';
    }
    RestBackendProvider.prototype.getImgRestUrl = function () {
        return this.imagesRestUrl;
    };
    RestBackendProvider.prototype.getImgDishUrl = function () {
        return this.imagesDishUrl;
    };
    RestBackendProvider.prototype.getImgCatUrl = function () {
        return this.imagesCathUrl;
    };
    RestBackendProvider.prototype.setIduserlogin = function (userId) {
        this.idUserlogin = userId;
    };
    RestBackendProvider.prototype.getIduserlogin = function () {
        return this.idUserlogin;
    };
    RestBackendProvider.prototype.getIsLogging = function () {
        return this.isLoggin;
    };
    RestBackendProvider.prototype.test = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apitest', { todo: 'Hamlet' }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.checkUserByEmail = function (email) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(urluserbymail + '/' + email).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.addUser = function (name, email, pass) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'adduserexterno/' + name + '/' + email + '/' + pass).subscribe(function (userdata) {
                resolve(userdata);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.crearCarro = function (idUsuario) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apicreatecart/' + idUsuario).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.crearRestFavoritos = function (idUsuario) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apicreatelovedrestaurant/' + idUsuario).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.crearPlatosFavoritos = function (idUsuario) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apicreatelovedgig/' + idUsuario).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.canLoginTheUser = function (email, pass) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apicanlogintheuser/' + email + '/' + pass).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.logIn = function () {
        this.isLoggin = true;
    };
    RestBackendProvider.prototype.logOut = function () {
        this.isLoggin = false;
        this.idUserlogin = '0';
    };
    RestBackendProvider.prototype.getRestAndPlatosByRestaurantId = function (idRest) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apirestaurantandgigs/' + idRest).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.getDishById = function (dishId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apigig/' + dishId).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.findAllRestaurants = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(restaurantsURL).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.findAllDishes = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apigigs').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.findSugerenciaDishes = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apigigssugerencia').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.addRestaurantToFavorite = function (restId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apiaddresttolovedrest/' + _this.idUserlogin + '/' + restId).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.getFavoriteRestaurantByUserId = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apigetlovedrestbyuserid/' + _this.idUserlogin).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.delFavoriteRestaurantByUserId = function (idRest) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apidelresttolovedrest/' + _this.idUserlogin + '/' + idRest).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.addDishToFavorite = function (dishId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apiaddgigtolovedgig/' + _this.idUserlogin + '/' + dishId).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.getFavoriteDishtByUserId = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apigetlovedgigbyuserid/' + _this.idUserlogin).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.delFavoritedishByUserId = function (idDish) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apidelgigtolovedgig/' + _this.idUserlogin + '/' + idDish).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.addDishToCart = function (dishId, qty) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apiaddgigtocart/' + _this.idUserlogin + '/' + dishId + '/' + qty).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.getCartByUserId = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apigetcartbyuserid/' + _this.idUserlogin).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.modifyItemFromCartQty = function (itemId, qty) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apimodifyitemqtyfromcart/' + _this.idUserlogin + '/' + itemId + '/' + qty).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.deleteItemFromCart = function (itemId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apidelorderfromcart/' + _this.idUserlogin + '/' + itemId).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.createorderandcleancart = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apicreateorderbyuserid/' + _this.idUserlogin).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.getorderbyuser = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'getordercartbyuserid/' + _this.idUserlogin).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider.prototype.getcategories = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apicategories').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestBackendProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestBackendProvider);
    return RestBackendProvider;
}());

//# sourceMappingURL=rest-backend.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 175;

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		721,
		48
	],
	"../pages/auth/auth.module": [
		722,
		47
	],
	"../pages/cart/cart.module": [
		723,
		46
	],
	"../pages/category/category.module": [
		724,
		45
	],
	"../pages/checkout/checkout.module": [
		725,
		44
	],
	"../pages/dish-detail/dish-detail.module": [
		726,
		43
	],
	"../pages/dish-list/dish-list.module": [
		727,
		42
	],
	"../pages/favorite-dish/favorite-dish.module": [
		728,
		41
	],
	"../pages/favorite-list/favorite-list.module": [
		730,
		40
	],
	"../pages/home/home.module": [
		729,
		39
	],
	"../pages/message-detail/message-detail.module": [
		731,
		38
	],
	"../pages/message-list/message-list.module": [
		732,
		37
	],
	"../pages/my-account/my-account.module": [
		733,
		36
	],
	"../pages/nearby/nearby.module": [
		734,
		35
	],
	"../pages/notifications/notifications.module": [
		735,
		34
	],
	"../pages/orders/orders.module": [
		736,
		33
	],
	"../pages/restaurant-detail/restaurant-detail.module": [
		737,
		32
	],
	"../pages/restaurant-filter/restaurant-filter.module": [
		738,
		31
	],
	"../pages/restaurant-list/restaurant-list.module": [
		739,
		30
	],
	"../pages/settings/settings.module": [
		740,
		29
	],
	"../pages/sugerencia/sugerencia.module": [
		741,
		28
	],
	"../pages/support/support.module": [
		742,
		27
	],
	"../pages/your-restaurant/your-restaurant.module": [
		743,
		26
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 221;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api; });
var api = {
    SERVER_URL: 'http://164.68.116.40:3003/',
    // SERVER_URL: 'http://localhost:3003/',
    countriesApi: 'https://restcountries.eu/rest/v2/all'
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_dishes__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DishService = /** @class */ (function () {
    function DishService() {
        this.favoriteCounter = 0;
        this.favorites = [];
        this.dishes = __WEBPACK_IMPORTED_MODULE_1__mock_dishes__["a" /* default */];
    }
    DishService.prototype.findAll = function () {
        return this.dishes;
    };
    DishService.prototype.findById = function (id) {
        return Promise.resolve(this.dishes[id - 1]);
    };
    DishService.prototype.getItem = function (id) {
        for (var i = 0; i < this.dishes.length; i++) {
            if (this.dishes[i].id === parseInt(id)) {
                return this.dishes[i];
            }
        }
        return null;
    };
    DishService.prototype.getFavorites = function () {
        return Promise.resolve(this.favorites);
    };
    DishService.prototype.favorite = function (dish) {
        this.favoriteCounter = this.favoriteCounter + 1;
        this.favorites.push({ id: this.favoriteCounter, dish: dish });
        return Promise.resolve();
    };
    DishService.prototype.unfavorite = function (favorite) {
        var index = this.favorites.indexOf(favorite);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    };
    DishService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], DishService);
    return DishService;
}());

//# sourceMappingURL=dish-service-mock.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_restaurants__ = __webpack_require__(403);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RestaurantService = /** @class */ (function () {
    function RestaurantService() {
        this.favoriteCounter = 0;
        this.favorites = [];
        this.restaurants = __WEBPACK_IMPORTED_MODULE_1__mock_restaurants__["a" /* default */];
    }
    RestaurantService.prototype.findAll = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_restaurants__["a" /* default */]);
    };
    RestaurantService.prototype.getRestaurants = function () {
        return this.restaurants;
    };
    RestaurantService.prototype.findById = function (id) {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_restaurants__["a" /* default */][id - 1]);
    };
    RestaurantService.prototype.getItem = function (id) {
        for (var i = 0; i < this.restaurants.length; i++) {
            if (this.restaurants[i].id === parseInt(id)) {
                return this.restaurants[i];
            }
        }
        return null;
    };
    RestaurantService.prototype.findByName = function (searchKey) {
        var key = searchKey.toUpperCase();
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_restaurants__["a" /* default */].filter(function (restaurant) {
            return (restaurant.title + ' ' + restaurant.address + ' ' + restaurant.city + ' ' + restaurant.description).toUpperCase().indexOf(key) > -1;
        }));
    };
    RestaurantService.prototype.getFavorites = function () {
        return Promise.resolve(this.favorites);
    };
    RestaurantService.prototype.favorite = function (restaurant) {
        this.favoriteCounter = this.favoriteCounter + 1;
        this.favorites.push({ id: this.favoriteCounter, restaurant: restaurant });
        return Promise.resolve();
    };
    RestaurantService.prototype.unfavorite = function (favorite) {
        var index = this.favorites.indexOf(favorite);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    };
    RestaurantService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], RestaurantService);
    return RestaurantService;
}());

//# sourceMappingURL=restaurant-service-mock.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import restaurants from './mock-restaurants';
var CartService = /** @class */ (function () {
    function CartService() {
        this.orderCounter = 0;
        this.orders = [];
        // findAll() {
        //   return Promise.resolve(restaurants);
        // }
        // findById(id) {
        //   return Promise.resolve(restaurants[id - 1]);
        // }
        // findByName(searchKey: string) {
        //   let key: string = searchKey.toUpperCase();
        //   return Promise.resolve(restaurants.filter((restaurant: any) =>
        //       (restaurant.title +  ' ' +restaurant.address +  ' ' + restaurant.city + ' ' + restaurant.description).toUpperCase().indexOf(key) > -1));
        // }
        // getFavorites() {
        //   return Promise.resolve(this.favorites);
        // }
        // favorite(restaurant) {
        //   this.favoriteCounter = this.favoriteCounter + 1;
        //   this.favorites.push({id: this.favoriteCounter, restaurant: restaurant});
        //   return Promise.resolve();
        // }
        // unfavorite(favorite) {
        //   let index = this.favorites.indexOf(favorite);
        //   if (index > -1) {
        //     this.favorites.splice(index, 1);
        //   }
        //   return Promise.resolve();
        // }
    }
    CartService.prototype.addtoCart = function (order, qtd) {
        this.orderCounter = this.orderCounter + 1;
        this.orders.push({ id: this.orderCounter, order: order, qtd: qtd });
        return Promise.resolve();
    };
    CartService.prototype.getOrders = function () {
        return Promise.resolve(this.orders);
    };
    CartService.prototype.removefromCart = function (order) {
        var index = this.orders.indexOf(order);
        if (index > -1) {
            this.orders.splice(index, 1);
        }
        return Promise.resolve();
    };
    CartService.prototype.editQtdOrder = function (order, op) {
        // let order = this.orders[id - 1]
        // let index = this.orders.indexOf(order);
        // let order;
        //   if (index > -1) {
        //     this.orders[index];
        //   }
        for (var i in this.orders) {
            if (this.orders[i].id === order.id) {
                if (op === 'minus') {
                    this.orders[i].qtd--;
                    break;
                }
                if (op === 'plus') {
                    this.orders[i].qtd++;
                    break;
                }
            }
        }
        return Promise.resolve();
    };
    CartService.prototype.cleanCart = function () {
        this.orders = [];
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CartService);
    return CartService;
}());

//# sourceMappingURL=cart-service-mock.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrdersService = /** @class */ (function () {
    function OrdersService() {
        this.orderCounter = 0;
        this.orders = [];
    }
    OrdersService.prototype.saveOrder = function (order, total, orderNumber) {
        this.orderCounter = this.orderCounter + 1;
        this.orders.push({ id: this.orderCounter, order: order, total: total, onumber: orderNumber });
        return Promise.resolve();
    };
    OrdersService.prototype.getOrders = function () {
        return Promise.resolve(this.orders);
    };
    OrdersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], OrdersService);
    return OrdersService;
}());

//# sourceMappingURL=orders-service-mock.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_messages__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messageCounter = 0;
        this.messages = __WEBPACK_IMPORTED_MODULE_1__mock_messages__["a" /* default */];
        // console.log('mock messages: ', messages);
        // console.log(this.messages)
    }
    MessageService.prototype.findById = function (id) {
        // console.log(id)
        return Promise.resolve(this.messages[id - 1]);
    };
    MessageService.prototype.getMessages = function () {
        return this.messages;
    };
    MessageService.prototype.message = function (message) {
        this.messageCounter = this.messageCounter + 1;
        this.messages.push({ id: this.messageCounter, message: message });
        return Promise.resolve();
    };
    MessageService.prototype.getItem = function (id) {
        for (var i = 0; i < this.messages.length; i++) {
            if (this.messages[i].id === parseInt(id)) {
                return this.messages[i];
            }
        }
        return null;
    };
    MessageService.prototype.delMessage = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());

//# sourceMappingURL=message-service-mock.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_categories__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CategoryService = /** @class */ (function () {
    function CategoryService() {
    }
    CategoryService.prototype.findAll = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_categories__["a" /* default */]);
    };
    CategoryService.prototype.findById = function (id) {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_categories__["a" /* default */][id - 1]);
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CategoryService);
    return CategoryService;
}());

//# sourceMappingURL=category-service-mock.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pipes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__term_search__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__capitalize_pipe__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orderby_pipe__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shorten_pipe__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__temperature_pipe__ = __webpack_require__(694);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var pipes = [
    __WEBPACK_IMPORTED_MODULE_1__term_search__["a" /* TermSearchPipe */],
    __WEBPACK_IMPORTED_MODULE_2__capitalize_pipe__["a" /* CapitalizePipe */],
    __WEBPACK_IMPORTED_MODULE_3__orderby_pipe__["a" /* OrderByPipe */],
    __WEBPACK_IMPORTED_MODULE_4__shorten_pipe__["a" /* ShortenStringPipe */],
    __WEBPACK_IMPORTED_MODULE_5__temperature_pipe__["a" /* TemperaturePipe */],
];
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [pipes],
            exports: [pipes]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_restauran_model__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the TestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TestProvider = /** @class */ (function () {
    function TestProvider(http) {
        this.http = http;
        this._restaurants = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"]([]);
        this.apiUrl = 'https://jsonplaceholder.typicode.com';
    }
    Object.defineProperty(TestProvider.prototype, "restaurants", {
        get: function () {
            return this._restaurants.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // findAllRestaurants() {
    //   return this.http.get('http://localhost:3003/apirestaurants')
    //   .pipe(
    //     map(this.extractData)
    //   );
    // }
    TestProvider.prototype.testapi = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('http://localhost:3003/apirestaurants').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    TestProvider.prototype.findRestaurantById = function () {
        return this.http.get('http://localhost:3003/apicategory/5d0f90ff59533707d067857c')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (respData) {
            return new __WEBPACK_IMPORTED_MODULE_3__models_restauran_model__["a" /* Restaurant */]('1233', '1233', '1233', '1233', '1233', '1233');
            // return respData;
        }));
    };
    TestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TestProvider);
    return TestProvider;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(381);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_pipes_module__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_message_service_mock__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_restaurant_service_mock__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_restaurant_service_rest__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_dish_service_mock__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_category_service_mock__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_cart_service_mock__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_orders_service_mock__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_keyboard__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_test_test__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_rest_backend__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* foodIonicApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* foodIonicApp */], {
                    preloadModules: true,
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'page-about', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/auth/auth.module#AuthPageModule', name: 'page-auth', segment: 'auth', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'page-cart', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'page-category', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'page-checkout', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dish-detail/dish-detail.module#DishDetailPageModule', name: 'page-dish-detail', segment: 'dish/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dish-list/dish-list.module#DishListPageModule', name: 'page-dish-list', segment: 'dish-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorite-dish/favorite-dish.module#FavoriteDishPageModule', name: 'page-favorite-dish', segment: 'favoritedish', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'page-home', segment: 'home', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/favorite-list/favorite-list.module#FavoriteListPageModule', name: 'page-favorite-list', segment: 'favorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message-detail/message-detail.module#MessageDetailPageModule', name: 'page-message-detail', segment: 'message/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message-list/message-list.module#MessageListPageModule', name: 'page-message-list', segment: 'message-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-account/my-account.module#MyAccountPageModule', name: 'page-my-account', segment: 'my-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nearby/nearby.module#NearbyPageModule', name: 'page-nearby', segment: 'nearby', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'page-notifications', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'page-orders', segment: 'orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurant-detail/restaurant-detail.module#RestaurantDetailPageModule', name: 'page-restaurant-detail', segment: 'restaurant/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurant-filter/restaurant-filter.module#RestaurantFilterPageModule', name: 'page-restaurant-filter', segment: 'restaurant-filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurant-list/restaurant-list.module#RestaurantListPageModule', name: 'page-restaurant-list', segment: 'restaurant-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'page-settings', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sugerencia/sugerencia.module#SugerenciaPageModule', name: 'page-sugerencia', segment: 'sugerencia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/support/support.module#SupportPageModule', name: 'page-support', segment: 'support', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/your-restaurant/your-restaurant.module#YourRestaurantPageModule', name: 'page-your-restaurant', segment: 'your-restaurant', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__foodIonicDB',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyD9BxeSvt3u--Oj-_GD-qG2nPr1uODrR0Y'
                }),
                __WEBPACK_IMPORTED_MODULE_7__pipes_pipes_module__["a" /* PipesModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* foodIonicApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_19__providers_rest_backend__["a" /* RestBackendProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_restaurant_service_mock__["a" /* RestaurantService */],
                __WEBPACK_IMPORTED_MODULE_10__providers_restaurant_service_rest__["a" /* RestaurantServiceRest */],
                __WEBPACK_IMPORTED_MODULE_11__providers_dish_service_mock__["a" /* DishService */],
                __WEBPACK_IMPORTED_MODULE_12__providers_category_service_mock__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_8__providers_message_service_mock__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_13__providers_cart_service_mock__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_14__providers_orders_service_mock__["a" /* OrdersService */],
                __WEBPACK_IMPORTED_MODULE_18__providers_test_test__["a" /* TestProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var categories = [
    {
        id: 1,
        name: "Pizza",
        picture: "assets/img/restaurants/restaurant01.jpg",
        quantity: 41
    },
    {
        id: 2,
        name: "Pasta",
        picture: "assets/img/restaurants/restaurant02.jpg",
        quantity: 64
    },
    {
        id: 3,
        name: "Variable",
        picture: "assets/img/restaurants/restaurant03.jpg",
        quantity: 64
    },
    {
        id: 4,
        name: "Barbecue",
        picture: "assets/img/restaurants/restaurant04.jpg",
        quantity: 28
    }
];
/* harmony default export */ __webpack_exports__["a"] = (categories);
//# sourceMappingURL=mock-categories.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var dishes = [
    {
        id: 1,
        name: "Pacific Jammed",
        ingredients: "sweet potatos, spices, green bean, quinoa, lentil, crab meat",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus at consequuntur dolores, ea reprehenderit ipsam voluptas nulla recusandae.",
        picture: "assets/img/dishes/dish01.jpg",
        images: [
            "assets/img/dishes/dish01.jpg",
            "assets/img/dishes/dish03.jpg",
            "assets/img/dishes/dish04.jpg",
            "assets/img/dishes/dish05.jpg",
        ],
        price: 12.5,
        qtd: 0
    },
    {
        id: 2,
        name: "Sausage Pasta",
        ingredients: "sweet potatos, spices, green bean, quinoa, lentil, crab meat",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus at consequuntur dolores, ea reprehenderit ipsam voluptas nulla recusandae.",
        picture: "assets/img/dishes/dish02.jpg",
        images: [
            "assets/img/dishes/dish02.jpg",
            "assets/img/dishes/dish04.jpg",
            "assets/img/dishes/dish05.jpg",
            "assets/img/dishes/dish06.jpg",
        ],
        price: 6.25,
        qtd: 0
    },
    {
        id: 3,
        name: "Sliced Pig Cake",
        ingredients: "sweet potatos, spices, green bean, quinoa, lentil, crab meat",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus at consequuntur dolores, ea reprehenderit ipsam voluptas nulla recusandae.",
        picture: "assets/img/dishes/dish03.jpg",
        images: [
            "assets/img/dishes/dish03.jpg",
            "assets/img/dishes/dish02.jpg",
            "assets/img/dishes/dish04.jpg",
            "assets/img/dishes/dish05.jpg",
        ],
        price: 23,
        qtd: 0
    },
    {
        id: 4,
        name: "Mamamia Pizza",
        ingredients: "sweet potatos, spices, green bean, quinoa, lentil, crab meat",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus at consequuntur dolores, ea reprehenderit ipsam voluptas nulla recusandae.",
        picture: "assets/img/dishes/dish04.jpg",
        images: [
            "assets/img/dishes/dish04.jpg",
            "assets/img/dishes/dish06.jpg",
            "assets/img/dishes/dish07.jpg",
            "assets/img/dishes/dish08.jpg",
        ],
        price: 7.75,
        qtd: 0
    },
    {
        id: 5,
        name: "Texas Burguer",
        ingredients: "sweet potatos, spices, green bean, quinoa, lentil, crab meat",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus at consequuntur dolores, ea reprehenderit ipsam voluptas nulla recusandae.",
        picture: "assets/img/dishes/dish05.jpg",
        images: [
            "assets/img/dishes/dish05.jpg",
            "assets/img/dishes/dish07.jpg",
            "assets/img/dishes/dish08.jpg",
            "assets/img/dishes/dish01.jpg",
        ],
        price: 30,
        qtd: 0
    },
    {
        id: 6,
        name: "Flavored Beef",
        ingredients: "sweet potatos, spices, green bean, quinoa, lentil, crab meat",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus at consequuntur dolores, ea reprehenderit ipsam voluptas nulla recusandae.",
        picture: "assets/img/dishes/dish06.jpg",
        images: [
            "assets/img/dishes/dish06.jpg",
            "assets/img/dishes/dish08.jpg",
            "assets/img/dishes/dish02.jpg",
            "assets/img/dishes/dish04.jpg",
        ],
        price: 15,
        qtd: 0
    },
    {
        id: 7,
        name: "Special Brazilian Soup",
        ingredients: "sweet potatos, spices, green bean, quinoa, lentil, crab meat",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus at consequuntur dolores, ea reprehenderit ipsam voluptas nulla recusandae.",
        picture: "assets/img/dishes/dish07.jpg",
        images: [
            "assets/img/dishes/dish07.jpg",
            "assets/img/dishes/dish02.jpg",
            "assets/img/dishes/dish04.jpg",
            "assets/img/dishes/dish06.jpg",
        ],
        price: 17.45,
        qtd: 0
    },
    {
        id: 8,
        name: "Vip Rice Salad",
        ingredients: "sweet potatos, spices, green bean, quinoa, lentil, crab meat",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus at consequuntur dolores, ea reprehenderit ipsam voluptas nulla recusandae.",
        picture: "assets/img/dishes/dish08.jpg",
        images: [
            "assets/img/dishes/dish08.jpg",
            "assets/img/dishes/dish03.jpg",
            "assets/img/dishes/dish04.jpg",
            "assets/img/dishes/dish05.jpg",
        ],
        price: 10.5,
        qtd: 0
    }
];
/* harmony default export */ __webpack_exports__["a"] = (dishes);
//# sourceMappingURL=mock-dishes.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var restaurants = [
    {
        id: 1,
        address: "18 Henry st",
        city: "Cambridge",
        state: "MA",
        zip: "01742",
        title: "Buddha Bar",
        long: -71.11095,
        lat: 42.35663,
        picture: "assets/img/restaurants/restaurant01.jpg",
        thumbnail: "assets/img/restaurants/restaurant01sq.jpg",
        images: [
            "assets/img/restaurants/restaurant01.jpg",
            "assets/img/restaurants/restaurant03.jpg",
            "assets/img/restaurants/restaurant05.jpg",
            "assets/img/restaurants/restaurant07.jpg"
        ],
        tags: "Oriental",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!",
        label: "open",
        period: "none",
        price: "$$$",
        rating: 4.4,
        dishes: {
            id: 1,
            name: "Caroline Seymor",
            title: "Senior Broker",
            picture: "assets/img/dishes/caroline_seymor.jpg"
        },
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place, as long as you don't want to leave",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "Nice dishes Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.",
                rating: 2
            }
        ]
    },
    {
        id: 2,
        address: "24 Pearl st",
        city: "Cambridge",
        state: "MA",
        zip: "02420",
        title: "Lorem Restaurant",
        long: -71.10869,
        lat: 42.359103,
        picture: "assets/img/restaurants/restaurant02.jpg",
        thumbnail: "assets/img/restaurants/restaurant02sq.jpg",
        images: [
            "assets/img/restaurants/restaurant02.jpg",
            "assets/img/restaurants/restaurant04.jpg",
            "assets/img/restaurants/restaurant06.jpg",
            "assets/img/restaurants/restaurant08.jpg"
        ],
        tags: "Variable",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!",
        label: "open",
        period: "none",
        price: "$$$$",
        rating: 5,
        dishes: {
            id: 1,
            name: "Caroline Seymor",
            title: "Senior Broker",
            picture: "assets/img/dishes/caroline_seymor.jpg"
        },
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place, as long as you don't want to leave",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "Nice dishes Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.",
                rating: 2
            }
        ]
    },
    {
        id: 3,
        address: "61 West Cedar st",
        city: "Boston",
        state: "MA",
        zip: "02420",
        title: "Ipsum Restaurant",
        long: -71.070061,
        lat: 42.359986,
        picture: "assets/img/restaurants/restaurant03.jpg",
        thumbnail: "assets/img/restaurants/restaurant03sq.jpg",
        images: [
            "assets/img/restaurants/restaurant03.jpg",
            "assets/img/restaurants/restaurant05.jpg",
            "assets/img/restaurants/restaurant07.jpg",
            "assets/img/restaurants/restaurant09.jpg"
        ],
        tags: "Local Food",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!",
        label: "closed",
        period: "week",
        price: "$$",
        rating: 4.9,
        dishes: {
            id: 2,
            name: "Michael Drukov",
            title: "Senior Broker",
            picture: "assets/img/dishes/michael_drukov.jpg"
        },
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place, as long as you don't want to leave",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "Nice dishes Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.",
                rating: 2
            }
        ]
    },
    {
        id: 4,
        address: "32 Prince st",
        city: "Cambridge",
        state: "MA",
        zip: "02420",
        title: "Bloom's Restaurant",
        long: -71.110448,
        lat: 42.360642,
        picture: "assets/img/restaurants/restaurant04.jpg",
        thumbnail: "assets/img/restaurants/restaurant04sq.jpg",
        images: [
            "assets/img/restaurants/restaurant04.jpg",
            "assets/img/restaurants/restaurant06.jpg",
            "assets/img/restaurants/restaurant08.jpg",
            "assets/img/restaurants/restaurant07.jpg"
        ],
        tags: "Street Food",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!",
        label: "closed",
        period: "month",
        price: "$$$",
        rating: 3.2,
        dishes: {
            id: 3,
            name: "Jonathan Jones",
            title: "Senior Broker",
            picture: "assets/img/dishes/jonathan_jones.jpg"
        },
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place, as long as you don't want to leave",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "Nice dishes Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.",
                rating: 2
            }
        ]
    },
    {
        id: 5,
        address: "211 Charles Street",
        city: "Boston",
        state: "MA",
        zip: "02420",
        title: "Blue Print Restaurant & Bar",
        long: -71.084454,
        lat: 42.368168,
        picture: "assets/img/restaurants/restaurant05.jpg",
        thumbnail: "assets/img/restaurants/restaurant05sq.jpg",
        images: [
            "assets/img/restaurants/restaurant05.jpg",
            "assets/img/restaurants/restaurant07.jpg",
            "assets/img/restaurants/restaurant09.jpg",
            "assets/img/restaurants/restaurant11.jpg"
        ],
        tags: "Variable",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!",
        label: "closed",
        period: "week",
        price: "$$$$",
        rating: 4.1,
        dishes: {
            id: 4,
            name: "Rosario Rodriguez",
            title: "Senior Broker",
            picture: "assets/img/dishes/rosario_rodriguez.jpg"
        },
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place, as long as you don't want to leave",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "Nice dishes Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.",
                rating: 2
            }
        ]
    },
    {
        id: 6,
        address: "448 Hanover st",
        city: "Boston",
        state: "MA",
        zip: "02420",
        title: "George's Hamburguer & Meats",
        long: -71.052617,
        lat: 42.366855,
        picture: "assets/img/restaurants/restaurant06.jpg",
        thumbnail: "assets/img/restaurants/restaurant06sq.jpg",
        images: [
            "assets/img/restaurants/restaurant06.jpg",
            "assets/img/restaurants/restaurant08.jpg",
            "assets/img/restaurants/restaurant10.jpg",
            "assets/img/restaurants/restaurant12.jpg"
        ],
        tags: "Barbecue",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!",
        label: "closed",
        period: "month",
        price: "$",
        rating: 4,
        dishes: {
            id: 5,
            name: "Olivia Green",
            title: "Senior Broker",
            picture: "assets/img/dishes/olivia_green.jpg"
        },
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place, as long as you don't want to leave",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "Nice dishes Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.",
                rating: 2
            }
        ]
    },
    {
        id: 7,
        address: "127 Endicott st",
        city: "Boston",
        state: "MA",
        zip: "02420",
        title: "La Vitta",
        long: -71.057352,
        lat: 42.365003,
        picture: "assets/img/restaurants/restaurant07.jpg",
        thumbnail: "assets/img/restaurants/restaurant07sq.jpg",
        images: [
            "assets/img/restaurants/restaurant07.jpg",
            "assets/img/restaurants/restaurant09.jpg",
            "assets/img/restaurants/restaurant11.jpg",
            "assets/img/restaurants/restaurant13.jpg"
        ],
        tags: "Pasta",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!",
        label: "closed",
        period: "month",
        price: "$$$",
        rating: 4.8,
        dishes: {
            id: 6,
            name: "Miriam Aupont",
            title: "Senior Broker",
            picture: "assets/img/dishes/miriam_aupont.jpg"
        },
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place, as long as you don't want to leave",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "Nice dishes Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.",
                rating: 2
            }
        ]
    },
    {
        id: 8,
        address: "48 Brattle st",
        city: "Cambridge",
        state: "MA",
        zip: "02420",
        title: "Barracuda's Seafood",
        long: -71.121653,
        lat: 42.374117,
        picture: "assets/img/restaurants/restaurant08.jpg",
        thumbnail: "assets/img/restaurants/restaurant08sq.jpg",
        images: [
            "assets/img/restaurants/restaurant08.jpg",
            "assets/img/restaurants/restaurant10.jpg",
            "assets/img/restaurants/restaurant12.jpg",
            "assets/img/restaurants/restaurant01.jpg"
        ],
        tags: "Seafood",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!",
        label: "closed",
        period: "week",
        price: "$$$$$",
        rating: 5,
        dishes: {
            id: 7,
            name: "Michelle Lambert",
            title: "Senior Broker",
            picture: "assets/img/dishes/michelle_lambert.jpg"
        },
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place, as long as you don't want to leave",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "Nice dishes Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.",
                rating: 2
            }
        ]
    },
    {
        id: 9,
        address: "121 Harborwalk",
        city: "Boston",
        state: "MA",
        zip: "02420",
        title: "Melvyn's",
        long: -71.049327,
        lat: 42.35695,
        picture: "assets/img/restaurants/restaurant09.jpg",
        thumbnail: "assets/img/restaurants/restaurant09sq.jpg",
        images: [
            "assets/img/restaurants/restaurant09.jpg",
            "assets/img/restaurants/restaurant11.jpg",
            "assets/img/restaurants/restaurant13.jpg",
            "assets/img/restaurants/restaurant02.jpg"
        ],
        tags: "Bistro",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!",
        label: "open",
        period: "none",
        price: "$$$$",
        rating: 3.7,
        dishes: {
            id: 2,
            name: "Michael Drukov",
            title: "Senior Broker",
            picture: "assets/img/dishes/michael_drukov.jpg"
        },
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place, as long as you don't want to leave",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "Nice dishes Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.",
                rating: 2
            }
        ]
    },
    {
        id: 10,
        address: "503 Park Drive",
        city: "Boston",
        state: "MA",
        zip: "02420",
        title: "Bukhara Restaurant",
        long: -71.105475,
        lat: 42.347400,
        picture: "assets/img/restaurants/restaurant10.jpg",
        thumbnail: "assets/img/restaurants/restaurant10sq.jpg",
        images: [
            "assets/img/restaurants/restaurant10.jpg",
            "assets/img/restaurants/restaurant12.jpg",
            "assets/img/restaurants/restaurant01.jpg",
            "assets/img/restaurants/restaurant03.jpg"
        ],
        tags: "Indian Food",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!",
        label: "open",
        period: "none",
        price: "$$",
        rating: 2.5,
        dishes: {
            id: 1,
            name: "Caroline Seymor",
            title: "Senior Broker",
            picture: "assets/img/dishes/caroline_seymor.jpg"
        },
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place, as long as you don't want to leave",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "Nice dishes Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.",
                rating: 2
            }
        ]
    },
    {
        id: 11,
        address: "95 Gloucester st",
        city: "Boston",
        state: "MA",
        zip: "02420",
        title: "CraftWoks Restaurant & Breweries",
        lat: 42.349693,
        long: -71.084407,
        picture: "assets/img/restaurants/restaurant11.jpg",
        thumbnail: "assets/img/restaurants/restaurant11sq.jpg",
        images: [
            "assets/img/restaurants/restaurant11.jpg",
            "assets/img/restaurants/restaurant13.jpg",
            "assets/img/restaurants/restaurant02.jpg",
            "assets/img/restaurants/restaurant04.jpg"
        ],
        tags: "Casual Dining",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!",
        label: "open",
        period: "none",
        price: "$$$",
        rating: 4.6,
        dishes: {
            id: 4,
            name: "Rosario Rodriguez",
            title: "Senior Broker",
            picture: "assets/img/dishes/rosario_rodriguez.jpg"
        },
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place, as long as you don't want to leave",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "Nice dishes Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.",
                rating: 2
            }
        ]
    },
    {
        id: 12,
        address: "145 Commonwealth ave",
        city: "Boston",
        state: "MA",
        zip: "02420",
        title: "Gordon Biersch",
        lat: 42.352466,
        long: -71.075311,
        picture: "assets/img/restaurants/restaurant12.jpg",
        thumbnail: "assets/img/restaurants/restaurant12sq.jpg",
        images: [
            "assets/img/restaurants/restaurant12.jpg",
            "assets/img/restaurants/restaurant01.jpg",
            "assets/img/restaurants/restaurant03.jpg",
            "assets/img/restaurants/restaurant05.jpg"
        ],
        tags: "Casual Dining",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!",
        label: "open",
        period: "week",
        price: "$$$$",
        rating: 3.8,
        dishes: {
            id: 5,
            name: "Olivia Green",
            title: "Senior Broker",
            picture: "assets/img/dishes/olivia_green.jpg"
        },
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place, as long as you don't want to leave",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "Nice dishes Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.",
                rating: 2
            }
        ]
    },
    {
        id: 13,
        address: "145 Commonwealth ave",
        city: "Boston",
        state: "MA",
        zip: "02420",
        title: "Old Chicago",
        lat: 42.352466,
        long: -71.075311,
        picture: "assets/img/restaurants/restaurant13.jpg",
        thumbnail: "assets/img/restaurants/restaurant13sq.jpg",
        images: [
            "assets/img/restaurants/restaurant13.jpg",
            "assets/img/restaurants/restaurant02.jpg",
            "assets/img/restaurants/restaurant04.jpg",
            "assets/img/restaurants/restaurant06.jpg"
        ],
        tags: "Pizza",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!",
        label: "closed",
        period: "week",
        price: "$$$$$",
        rating: 4.5,
        dishes: {
            id: 5,
            name: "Olivia Green",
            title: "Senior Broker",
            picture: "assets/img/dishes/olivia_green.jpg"
        },
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place, as long as you don't want to leave",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "Nice dishes Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.",
                rating: 2
            }
        ]
    }
];
/* harmony default export */ __webpack_exports__["a"] = (restaurants);
//# sourceMappingURL=mock-restaurants.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var messages = [
    {
        id: 1,
        title: "New Offer 25% OFF",
        date: "2017-11-01T00:00:00.000-0300",
        senderId: 2,
        senderName: "Caroline Broker",
        email: "caroline@ionproperty.com",
        message: "Please body! contact me for help you with my new offer, keep in touch for this or other offers.",
        read: false
    },
    {
        id: 2,
        title: "New Offer 15% OFF by month!",
        date: "2017-11-01T00:00:00.000-0300",
        senderId: 3,
        senderName: "Michael Jones",
        email: "michael@ionproperty.com",
        message: "Please body! contact me for help you with my new offer, keep in touch for this or other offers.",
        read: true
    },
    {
        id: 3,
        title: "Visit our office today!",
        date: "2017-10-20T00:00:00.000-0300",
        senderId: 3,
        senderName: "Michael Jones",
        email: "michael@ionproperty.com",
        message: "Please body! contact me for help you with my new offer, keep in touch for this or other offers.",
        read: true
    },
    {
        id: 4,
        title: "You New property",
        date: "2017-10-09T00:00:00.000-0300",
        senderId: 5,
        senderName: "Jessica Stevens",
        email: "jessica@ionproperty.com",
        message: "Please body! contact me for help you with my new offer, keep in touch for this or other offers.",
        read: false
    }
];
/* harmony default export */ __webpack_exports__["a"] = (messages);
//# sourceMappingURL=mock-messages.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermSearchPipe = /** @class */ (function () {
    function TermSearchPipe() {
    }
    TermSearchPipe.prototype.transform = function (value, query, field) {
        return query ? value.reduce(function (prev, next) {
            if (next[field].includes(query)) {
                prev.push(next);
            }
            return prev;
        }, []) : value;
    };
    TermSearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'termSearch',
            pure: false
        }),
        __metadata("design:paramtypes", [])
    ], TermSearchPipe);
    return TermSearchPipe;
}());

//# sourceMappingURL=term-search.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    // Autocapitalizes the first letter of each word in a phrase.
    // Input: {{'john doe' | capitalize}}
    // Output: John Doe
    CapitalizePipe.prototype.transform = function (value) {
        if (value) {
            var words = value.split(' ');
            value = words.map(function (word) { return word.substring(0, 1).toUpperCase() + word.substring(1); }).join(' ');
        }
        return value;
    };
    CapitalizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'capitalize'
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());

//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
        this.value = [];
    }
    OrderByPipe_1 = OrderByPipe;
    OrderByPipe.orderByComparator = function (a, b) {
        if (a === null || typeof a === 'undefined') {
            a = 0;
        }
        if (b === null || typeof b === 'undefined') {
            b = 0;
        }
        if ((isNaN(parseFloat(a)) ||
            !isFinite(a)) ||
            (isNaN(parseFloat(b)) || !isFinite(b))) {
            // Isn"t a number so lowercase the string to properly compare
            a = a.toString();
            b = b.toString();
            if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
            }
            if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
            }
        }
        else {
            // Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b)) {
                return -1;
            }
            if (parseFloat(a) > parseFloat(b)) {
                return 1;
            }
        }
        return 0; // equal each other
    };
    OrderByPipe.prototype.transform = function (input, config) {
        if (config === void 0) { config = '+'; }
        if (!input) {
            return input;
        }
        // make a copy of the input"s reference
        this.value = input.slice();
        var value = this.value;
        if (!Array.isArray(value)) {
            return value;
        }
        if (!Array.isArray(config) || (Array.isArray(config) && config.length === 1)) {
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
            var desc_1 = propertyToCheck.substr(0, 1) === '-';
            // Basic array
            if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+') {
                return !desc_1 ? value.sort() : value.sort().reverse();
            }
            else {
                var property_1 = propertyToCheck.substr(0, 1) === '+' || propertyToCheck.substr(0, 1) === '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                return value.sort(function (a, b) {
                    var aValue = a[property_1];
                    var bValue = b[property_1];
                    var propertySplit = property_1.split('.');
                    if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && propertySplit.length > 1) {
                        aValue = a;
                        bValue = b;
                        for (var j = 0; j < propertySplit.length; j++) {
                            aValue = aValue[propertySplit[j]];
                            bValue = bValue[propertySplit[j]];
                        }
                    }
                    return !desc_1
                        ? OrderByPipe_1.orderByComparator(aValue, bValue)
                        : -OrderByPipe_1.orderByComparator(aValue, bValue);
                });
            }
        }
        else {
            // Loop over property of the array in order and sort
            return value.sort(function (a, b) {
                for (var i = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) === '-';
                    var property = config[i].substr(0, 1) === '+' || config[i].substr(0, 1) === '-'
                        ? config[i].substr(1)
                        : config[i];
                    var aValue = a[property];
                    var bValue = b[property];
                    var propertySplit = property.split('.');
                    if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && propertySplit.length > 1) {
                        aValue = a;
                        bValue = b;
                        for (var j = 0; j < propertySplit.length; j++) {
                            aValue = aValue[propertySplit[j]];
                            bValue = bValue[propertySplit[j]];
                        }
                    }
                    var comparison = !desc
                        ? OrderByPipe_1.orderByComparator(aValue, bValue)
                        : -OrderByPipe_1.orderByComparator(aValue, bValue);
                    // Don't return 0 yet in case of needing to sort by next property
                    if (comparison !== 0) {
                        return comparison;
                    }
                }
                return 0; // equal each other
            });
        }
    };
    OrderByPipe = OrderByPipe_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'orderBy', pure: false })
    ], OrderByPipe);
    return OrderByPipe;
    var OrderByPipe_1;
}());

//# sourceMappingURL=orderby.pipe.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortenStringPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShortenStringPipe = /** @class */ (function () {
    function ShortenStringPipe() {
    }
    // Shortens the string to a given length.
    // Input: {{'This is a very long string' | shorten:18}}
    // Output: This is a very lon...
    ShortenStringPipe.prototype.transform = function (value, maxWidth, suffix) {
        if (maxWidth === void 0) { maxWidth = 30; }
        if (suffix === void 0) { suffix = '...'; }
        if (value && value.length > maxWidth) {
            value = value.substring(0, maxWidth) + suffix;
        }
        return value;
    };
    ShortenStringPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'shorten'
        })
    ], ShortenStringPipe);
    return ShortenStringPipe;
}());

//# sourceMappingURL=shorten.pipe.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemperaturePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TemperaturePipe = /** @class */ (function () {
    function TemperaturePipe() {
    }
    TemperaturePipe.prototype.transform = function (value, args) {
        var c = Math.round(parseInt(value, 10) - 273.15);
        var f = Math.round(parseInt(value, 10) * 9 / 5 - 459.67);
        return args === 'c' ? c + " \u00B0C" : f + " \u00B0F";
    };
    TemperaturePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'temperature'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], TemperaturePipe);
    return TemperaturePipe;
}());

//# sourceMappingURL=temperature.pipe.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Restaurant; });
var Restaurant = /** @class */ (function () {
    function Restaurant(id, name, picture, direction, label, description) {
        this.id = id;
        this.name = name;
        this.picture = picture;
        this.direction = direction;
        this.label = label;
        this.description = description;
    }
    return Restaurant;
}());

//# sourceMappingURL=restauran.model.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foodIonicApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_backend__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var foodIonicApp = /** @class */ (function () {
    function foodIonicApp(platform, statusBar, splashScreen, serviceBackend) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.serviceBackend = serviceBackend;
        this.tabsPlacement = 'bottom';
        this.tabsLayout = 'icon-top';
        this.rootPage = 'page-walkthrough';
        this.showMenu = true;
        this.initializeApp();
        this.homeItem = { component: 'page-home' };
        this.messagesItem = { component: 'page-message-list' };
        this.restaurantsItem = { component: 'page-restaurant-list', icon: 'home' };
        this.restaurantsNearItem = { component: 'page-nearby', icon: 'compass' };
        this.restaurantsCatItem = { component: 'page-category', icon: 'albums' };
        this.platosItem = { component: 'page-dish-list', icon: 'pizza' };
        this.sugerenciaItem = { component: 'page-sugerencia', icon: 'pizza' };
        this.ultimasOrdItem = { component: 'page-orders', icon: 'list-box' };
        this.carroItem = { component: 'page-cart', icon: 'cart' };
        this.favRestItem = { component: 'page-favorite-list', icon: 'heart' };
        this.favPlatoItem = { component: 'page-favorite-dish', icon: 'heart' };
        this.appMenuItems = [
            { title: 'Restaurantes', component: 'page-restaurant-list', icon: 'home' },
            { title: '- Cercanos', component: 'page-nearby', icon: 'compass' },
            { title: '- Por categorias', component: 'page-category', icon: 'albums' },
            { title: 'Platos', component: 'page-dish-list', icon: 'pizza' },
            { title: 'Sugerencias', component: 'page-sugerencia', icon: 'pizza' },
            { title: 'Ultimas ordenes', component: 'page-orders', icon: 'list-box' },
            { title: 'Carro', component: 'page-cart', icon: 'cart' },
            { title: 'Restaurantes Favoritos', component: 'page-favorite-list', icon: 'heart' },
            { title: 'Platos Favoritos', component: 'page-favorite-dish', icon: 'heart' }
        ];
        this.yourRestaurantMenuItems = [
            { title: 'Register Restaurant', component: 'page-your-restaurant', icon: 'clipboard' }
        ];
        this.accountMenuItems = [
            { title: 'Acceder', component: 'page-auth', icon: 'log-in' },
            { title: 'Mi Perfil', component: 'page-my-account', icon: 'contact' },
            { title: 'Salir', component: 'page-auth', icon: 'log-out' },
        ];
        this.helpMenuItems = [
            { title: 'Acerca', component: 'page-about', icon: 'information-circle' },
            { title: 'Contacto', component: 'page-support', icon: 'call' },
            { title: 'Configuracion', component: 'page-settings', icon: 'cog' },
        ];
    }
    foodIonicApp.prototype.isLogging = function () {
        return this.serviceBackend.getIsLogging();
    };
    foodIonicApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.overlaysWebView(false);
            _this.splashScreen.hide();
        });
        if (!this.platform.is('mobile')) {
            this.tabsPlacement = 'top';
            this.tabsLayout = 'icon-left';
        }
    };
    foodIonicApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.serviceBackend.logOut();
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], foodIonicApp.prototype, "nav", void 0);
    foodIonicApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Node App\Fyned App\Movil\foodionic_5\src\app\app.html"*/'<ion-split-pane when="lg">\n\n	<ion-menu side="left" id="authenticated" [content]="content" class="menu-bg">\n\n	  <ion-header>\n	    <ion-toolbar class="user-profile">\n\n	      <div class="user-profile">\n	        <ion-list no-margin>\n	          <ion-item>\n\n	            <ion-avatar item-left>\n	              <img src="assets/img/avatar.jpeg">\n	            </ion-avatar>\n\n	            <h2 ion-text class="text-white fw700 text-15x">\n	              Hamlet Morales\n	            </h2>\n	            <p ion-text color="light">La Habana, Cuba</p>\n\n					    <button  ion-button icon-left round color="primary" menuClose (click)="openPage(accountMenuItems[1])">\n					      <ion-icon [name]="accountMenuItems[1].icon"></ion-icon>\n					      {{accountMenuItems[1].title}}\n					    </button>\n\n	          </ion-item>\n	        </ion-list>\n	      </div>\n\n	    </ion-toolbar>\n	  </ion-header>\n\n	  <ion-content color="dark" class="profile-bg">\n	    <button *ngIf="isLogging()" ion-button icon-left full color="secondary" no-margin menuClose (click)="openPage(accountMenuItems[2])">\n	      <ion-icon [name]="accountMenuItems[2].icon"></ion-icon>\n	      {{accountMenuItems[2].title}}\n	    </button>\n\n	    <ion-list class="user-list">\n	      <button menuClose ion-item (click)="openPage(homeItem)">\n	        <ion-icon item-left name="browsers"></ion-icon>\n	        Inicio\n	      </button>\n\n	      <button *ngIf="isLogging()" menuClose ion-item (click)="openPage(messagesItem)">\n	        <ion-icon item-left name="mail"></ion-icon>\n	        Mensajes\n	        <ion-badge color="dark">\n	          2\n	        </ion-badge>\n	      </button>\n	    </ion-list>\n\n\n	    <ion-list class="user-list">\n	      <ion-list-header no-margin>\n	        <span ion-text color="light" class="fw500">Menu</span>\n	      </ion-list-header>\n	      <button menuClose ion-item (click)="openPage(restaurantsItem)">\n	        <ion-icon item-left [name]="restaurantsItem.icon"></ion-icon>\n	        Restaurantes\n				</button>\n				<button menuClose ion-item (click)="openPage(restaurantsNearItem)">\n						<ion-icon item-left [name]="restaurantsNearItem.icon"></ion-icon>\n						- Cercanos\n					</button>\n				<button menuClose ion-item (click)="openPage(restaurantsCatItem)">\n						<ion-icon item-left [name]="restaurantsCatItem.icon"></ion-icon>\n						- Por categorias\n					</button>\n				<button menuClose ion-item (click)="openPage(platosItem)">\n						<ion-icon item-left [name]="platosItem.icon"></ion-icon>\n						Platos\n					</button>	\n					<button menuClose ion-item (click)="openPage(sugerenciaItem)">\n						<ion-icon item-left [name]="sugerenciaItem.icon"></ion-icon>\n						Sugerencias\n					</button>\n				<button *ngIf="isLogging()" menuClose ion-item (click)="openPage(ultimasOrdItem)">\n						<ion-icon item-left [name]="ultimasOrdItem.icon"></ion-icon>\n						Ultimas ordenes\n					</button>	\n				<button *ngIf="isLogging()" menuClose ion-item (click)="openPage(carroItem)">\n						<ion-icon item-left [name]="carroItem.icon"></ion-icon>\n						Carro\n					</button>	\n				<button *ngIf="isLogging()" menuClose ion-item (click)="openPage(favRestItem)">\n						<ion-icon item-left [name]="favRestItem.icon"></ion-icon>\n						Restaurantes Favoritos\n					</button>	\n				<button *ngIf="isLogging()" menuClose ion-item (click)="openPage(favPlatoItem)">\n						<ion-icon item-left [name]="favPlatoItem.icon"></ion-icon>\n						Platos Favoritos\n					</button>	\n	    </ion-list>\n\n	    <!-- <ion-list class="user-list">\n	      <ion-list-header no-margin>\n	        <span ion-text color="light" class="fw500">Your Restaurant</span>\n	      </ion-list-header>\n	      <button menuClose ion-item *ngFor="let menuItem of yourRestaurantMenuItems" (click)="openPage(menuItem)">\n	        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n	        {{menuItem.title}}\n	      </button>\n	    </ion-list> -->\n\n	    <ion-list class="user-list">\n	      <ion-list-header no-margin>\n	        <span ion-text color="light" class="fw500">Contacto - Configuracion</span>\n	      </ion-list-header>\n	      <button menuClose ion-item *ngFor="let menuItem of helpMenuItems" (click)="openPage(menuItem)">\n	        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n	        {{menuItem.title}}\n	      </button>\n	    </ion-list>\n\n	  </ion-content>\n\n	</ion-menu>\n\n	<ion-nav [root]="rootPage" main #content swipeBackEnabled="false"></ion-nav>\n\n</ion-split-pane>\n'/*ion-inline-end:"D:\Node App\Fyned App\Movil\foodionic_5\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_backend__["a" /* RestBackendProvider */]])
    ], foodIonicApp);
    return foodIonicApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantServiceRest; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var restaurantsURL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apirestaurants', favoritesURL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].SERVER_URL + 'apicreatelovedrestaurant';
// let httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
var RestaurantServiceRest = /** @class */ (function () {
    function RestaurantServiceRest(http) {
        this.http = http;
    }
    RestaurantServiceRest.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(restaurantsURL).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
        // return this.http.get(restaurantsURL).pipe(
        //   map(this.extractData),
        //   catchError(this.handleError)
        // );
    };
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
    RestaurantServiceRest.prototype.favorite = function (restaurant) {
        var _this = this;
        //   let body = JSON.stringify(restaurant);
        //   return this.http.post(favoritesURL, body, httpOptions).pipe(
        //   	tap((res) => console.log('Favorite added!')),
        //   	catchError(this.handleError)
        // );		
        return new Promise(function (resolve, reject) {
            _this.http.post(favoritesURL, JSON.stringify({ data: 'restaurant' }))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestaurantServiceRest = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RestaurantServiceRest);
    return RestaurantServiceRest;
}());

//# sourceMappingURL=restaurant-service-rest.js.map

/***/ })

},[376]);
//# sourceMappingURL=main.js.map