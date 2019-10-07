webpackJsonp([7],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantDetailPageModule", function() { return RestaurantDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__restaurant_detail__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RestaurantDetailPageModule = /** @class */ (function () {
    function RestaurantDetailPageModule() {
    }
    RestaurantDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__restaurant_detail__["a" /* RestaurantDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__restaurant_detail__["a" /* RestaurantDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_2__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyD9BxeSvt3u--Oj-_GD-qG2nPr1uODrR0Y'
                })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__restaurant_detail__["a" /* RestaurantDetailPage */]
            ]
        })
    ], RestaurantDetailPageModule);
    return RestaurantDetailPageModule;
}());

//# sourceMappingURL=restaurant-detail.module.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restaurant_service_mock__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dish_service_mock__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_cart_service_mock__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_backend__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RestaurantDetailPage = /** @class */ (function () {
    function RestaurantDetailPage(actionSheetCtrl, navCtrl, navParams, cartService, restaurantService, dishService, toastCtrl, serviceBackend) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cartService = cartService;
        this.restaurantService = restaurantService;
        this.dishService = dishService;
        this.toastCtrl = toastCtrl;
        this.serviceBackend = serviceBackend;
        this.restaurantopts = 'menu';
        this.param = this.navParams.get('id');
        this.restaurant = this.restaurantService.getItem(this.param) ? this.restaurantService.getItem(this.param) : this.restaurantService.getRestaurants()[0];
        this.dishes = this.dishService.findAll();
        this.findAll();
        this.imagesRestUrl = this.serviceBackend.getImgRestUrl();
        this.imagesDishUrl = this.serviceBackend.getImgDishUrl();
    }
    RestaurantDetailPage.prototype.findAll = function () {
        var _this = this;
        this.serviceBackend.getRestAndPlatosByRestaurantId(this.param)
            .then(function (data) {
            _this.restanddishes = data;
            _this.restRestaurant = _this.restanddishes.restaurant;
            _this.restId = _this.restRestaurant._id;
            _this.restLabel = _this.restRestaurant.label;
            _this.restPicture1 = _this.restRestaurant.picture1;
            _this.restPicture2 = _this.restRestaurant.picture2;
            _this.restPicture3 = _this.restRestaurant.picture3;
            _this.restName = _this.restRestaurant.name;
            _this.restDishes = _this.restanddishes.gigs;
        });
    };
    RestaurantDetailPage.prototype.openDishDetail = function (dish) {
        this.navCtrl.push('page-dish-detail', {
            'id': dish._id
        });
    };
    RestaurantDetailPage.prototype.favorite = function (restaurantId) {
        if (this.serviceBackend.getIduserlogin() == '0') {
            this.navCtrl.push('page-auth');
        }
        else {
            this.serviceBackend.addRestaurantToFavorite(restaurantId);
            var toast = this.toastCtrl.create({
                message: 'Restaurante adicionado',
                cssClass: 'mytoast',
                duration: 2000
            });
            toast.present(toast);
        }
    };
    RestaurantDetailPage.prototype.share = function (restaurant) {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Twitter',
                    handler: function () { return console.log('share via twitter'); }
                },
                {
                    text: 'Facebook',
                    handler: function () { return console.log('share via facebook'); }
                },
                {
                    text: 'Email',
                    handler: function () { return console.log('share via email'); }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { return console.log('cancel share'); }
                }
            ]
        });
        actionSheet.present();
    };
    RestaurantDetailPage.prototype.openCart = function () {
        this.navCtrl.push('page-cart');
    };
    RestaurantDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-restaurant-detail',template:/*ion-inline-start:"D:\NodeApps\Fyned\Movil\foodionic_6\src\pages\restaurant-detail\restaurant-detail.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      <span ion-text>Restaurante</span>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="favorite(restId)">\n        <ion-icon name="heart"></ion-icon>\n      </button>\n      <button ion-button (click)="share(restaurant)">\n          <ion-icon name="share"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="lightest-bg">\n  <ion-card *ngIf="restaurant.id" class="full-width" no-margin>\n  	<div class="card-img-wrap">\n      <span ion-text class="card-img-status fw700 text-white" [ngClass]="{\'closed\': restaurant.label === \'closed\', \'open\': restaurant.label === \'open\'}">\n        {{ restLabel }}\n      </span>\n		  <ion-slides class="to-top primary-bg" pager>\n		    <ion-slide>\n					<!-- <img src="../../assets/img/uploads/restaurant/{{restPicture1}}" alt=""> -->\n					<img src="{{imagesRestUrl}}{{restPicture1}}" alt="">\n		    </ion-slide>\n		  </ion-slides>\n		</div>\n    <!-- <img src="{{restaurant.picture}}"> -->\n    <ion-card-content>\n      <h1 ion-text color="dark" class="card-title fw700" text-center>\n      	{{restName}}\n     	</h1>\n      <p ion-text color="primary" text-center>1 mile<sup>sq</sup> • 30 - 60min • price</p>\n      <div text-center>\n		<ion-badge color="secondary">tags</ion-badge>\n      	<ion-badge color="dark" class="text-11x">\n					<ion-icon name="star"></ion-icon>\n					<!-- {{ restaurant.rating | number:\'1.1\' }} -->\n					ratings\n        </ion-badge>\n			</div>\n    </ion-card-content>\n\n	<ion-grid no-padding fixed>\n		<ion-row no-padding>\n			<ion-col>\n			  <ion-segment [(ngModel)]="restaurantopts" padding-horizontal>\n			    <ion-segment-button value="menu">\n			      Menu\n			    </ion-segment-button>\n			    <ion-segment-button value="reviews">\n			      Opiniones\n			    </ion-segment-button>\n			    <ion-segment-button value="info">\n			      Informacion\n			    </ion-segment-button>\n			  </ion-segment>\n\n				<div [ngSwitch]="restaurantopts" padding>\n					<div *ngSwitchCase="\'menu\'">\n						<ion-list>\n							<ion-item no-padding *ngFor="let restDish of restDishes" (click)="openDishDetail(restDish)">\n								<ion-thumbnail item-start>\n									<!-- <img src="../../assets/img/uploads/gig/{{restDish.picture1}}"> -->\n									<img src="{{imagesDishUrl}}{{restDish.picture1}}">\n								</ion-thumbnail>\n								<h2 ion-text color="dark" class="fw500">{{restDish.title}}</h2>\n								<p ion-text color="primary" class="text-11x">ingredientes</p>\n								<button ion-button clear class="green-bg text-white" item-end>{{ restDish.price | currency }}</button>\n							</ion-item>\n						</ion-list>\n\n						<br><br><br><br>\n\n					</div>\n					<div *ngSwitchCase="\'reviews\'" class="tab-reviews">\n\n					  <!--list of reviews-->\n					  <ion-list class="list-full-border">\n					    <ion-item *ngFor="let review of restaurant.reviews" margin-bottom text-wrap>\n\n				        <h2 class="fw700">\n					      	<ion-badge color="secondary" class="text-1x">\n										<ion-icon name="star"></ion-icon>\n					        	{{ review.rating | number:\'1.1\' }}\n					        </ion-badge>\n				        {{ review.title }}</h2>\n\n					      <p ion-text>\n					        {{ review.content }}\n					      </p>\n					      <span ion-text class="author text-11x">{{ review.username }} from {{ review.from }}</span>\n\n					    </ion-item>\n					  </ion-list>\n					  <br><br>\n\n					</div>\n					<div *ngSwitchCase="\'info\'">\n					  <!-- Show map here -->\n					  <div id="map-detail" margin-bottom>\n							<agm-map [latitude]="restaurant.lat" [longitude]="restaurant.long" [zoom]="12">\n								<agm-marker [latitude]="restaurant.lat" [longitude]="restaurant.long">\n								</agm-marker>\n							</agm-map>\n						</div>\n						<p ion-text text-center color="dark" class="fw700">{{restaurant.address}}, {{restaurant.city}} {{restaurant.state}}</p>\n						<hr margin-bottom>\n\n						<h2>\n							<span ion-text class="fw700">About</span>\n						</h2>\n						<p ion-text margin-bottom>{{ restaurant.description }}</p>\n\n						<h2>\n							<span ion-text class="fw700">Hours</span>\n						</h2>\n						<p ion-text margin-bottom>Open 11AM • Closes 11PM</p>\n\n						<h2>\n							<span ion-text class="fw700">Phone</span>\n						</h2>\n						<p ion-text margin-bottom>+1 (212) 999 0001</p>\n\n						<br><br>\n					</div>\n				</div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-card>\n\n  <ion-fab bottom right>\n    <button ion-fab round icon-only color="dark" (click)="openCart()">\n      <ion-icon name="cart" class="text-white"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"D:\NodeApps\Fyned\Movil\foodionic_6\src\pages\restaurant-detail\restaurant-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_cart_service_mock__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_restaurant_service_mock__["a" /* RestaurantService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_dish_service_mock__["a" /* DishService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_rest_backend__["a" /* RestBackendProvider */]])
    ], RestaurantDetailPage);
    return RestaurantDetailPage;
}());

//# sourceMappingURL=restaurant-detail.js.map

/***/ })

});
//# sourceMappingURL=7.js.map