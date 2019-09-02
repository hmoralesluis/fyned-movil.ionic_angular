webpackJsonp([4],{

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantListPageModule", function() { return RestaurantListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restaurant_list__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(373);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RestaurantListPageModule = /** @class */ (function () {
    function RestaurantListPageModule() {
    }
    RestaurantListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__restaurant_list__["a" /* RestaurantListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__restaurant_list__["a" /* RestaurantListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyD9BxeSvt3u--Oj-_GD-qG2nPr1uODrR0Y'
                }),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__restaurant_list__["a" /* RestaurantListPage */]
            ]
        })
    ], RestaurantListPageModule);
    return RestaurantListPageModule;
}());

//# sourceMappingURL=restaurant-list.module.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restaurant_service_mock__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_backend__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { SegmentChangeEventDetail } from '@ionic/co
var RestaurantListPage = /** @class */ (function () {
    function RestaurantListPage(navCtrl, navParams, service, toastCtrl, modalCtrl, config, serviceBackend) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.serviceBackend = serviceBackend;
        this.searchKey = "";
        this.viewMode = "list";
        this.label = "";
        this.estado = "";
        this.lat = 42.35663;
        this.lng = -71.11095;
        console.log('el id es 0' + this.serviceBackend.getIduserlogin());
        this.findAll();
        this.proptype = this.navParams.get('proptype') || "";
        this.from = this.navParams.get('from') || "";
        // console.log(this.proptype);
    }
    RestaurantListPage.prototype.openFilterModal = function () {
        var modal = this.modalCtrl.create('page-restaurant-filter');
        modal.present();
    };
    RestaurantListPage.prototype.openRestaurantDetail = function (restaurant) {
        this.navCtrl.push('page-restaurant-detail', {
            'id': restaurant._id
        });
    };
    RestaurantListPage.prototype.favorite = function (restaurant) {
        if (this.serviceBackend.getIduserlogin() == '0') {
            this.navCtrl.push('page-auth');
        }
        else {
            this.serviceBackend.addRestaurantToFavorite(restaurant._id);
            var toast = this.toastCtrl.create({
                message: 'Restaurante adicionado',
                cssClass: 'mytoast',
                duration: 2000
            });
            toast.present(toast);
        }
    };
    RestaurantListPage.prototype.onInput = function (event) {
        var _this = this;
        this.service.findByName(this.searchKey)
            .then(function (data) {
            _this.restaurants = data;
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    // onFilterUpdate(event) {
    //     console.log(event.detail.value);
    //     // if(event.detail.value == 'principal')
    //     //   this.details = false;
    //     // else
    //     //   this.details = true;
    //   }
    RestaurantListPage.prototype.onCancel = function (event) {
        this.findAll();
    };
    RestaurantListPage.prototype.findAll = function () {
        var _this = this;
        this.serviceBackend.findAllRestaurants()
            .then(function (data) {
            _this.restaurantsRest = data;
            _this.restaurantsRest = _this.restaurantsRest.restaurants;
        })
            .catch(function (error) { return alert(error); });
        this.serviceBackend.getcategories()
            .then(function (data) {
            _this.catergoriesRest = data;
            _this.catergoriesRest = _this.catergoriesRest.categories;
        });
    };
    RestaurantListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-restaurant-list',template:/*ion-inline-start:"D:\Node App\Fyned App\Movil\foodionic_3\src\pages\restaurant-list\restaurant-list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <span ion-text>Restaurantes</span>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="openFilterModal()">\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar>\n    <ion-searchbar placeholder="Buscar" [(ngModel)]="searchKey" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="lightest-bg">	\n\n	<ion-list *ngIf="from !== \'home\'" no-margin>\n	  <ion-item>\n	    <ion-label class="fw700">Tipo de Restaurante</ion-label>\n	    <ion-select [(ngModel)]="proptype">\n				<ion-option value="" >All categories</ion-option>	      \n	      <ion-option *ngFor="let cat of catergoriesRest" value="{{cat.code}}">{{cat.name}}</ion-option>\n	      <!-- <ion-option value="Bistro">Bistro</ion-option>\n	      <ion-option value="Casual Dining">Casual Dining</ion-option>\n	      <ion-option value="Pizza">Pizza</ion-option>\n	      <ion-option value="Oriental">Oriental</ion-option>\n	      <ion-option value="Variable">Variable</ion-option>\n	      <ion-option value="Local Food">Local Food</ion-option>\n	      <ion-option value="Street Food">Street Food</ion-option>\n	      <ion-option value="Indian Food">Indian Food</ion-option>\n	      <ion-option value="Pasta">Pasta</ion-option>\n	      <ion-option value="Seafood">Seafood</ion-option> -->\n	    </ion-select>\n	  </ion-item>\n	</ion-list>\n\n	<div *ngIf="from !== \'home\'">\n	  <ion-segment [(ngModel)]="label">\n			<ion-segment-button value="">\n				Todos\n			</ion-segment-button>\n	    <ion-segment-button value="abierto">\n	      Abiertos\n	    </ion-segment-button>\n	    <ion-segment-button value="cerrado">\n	      Cerrados\n	    </ion-segment-button>\n	  </ion-segment>\n	</div>\n\n  <div *ngIf="viewMode === \'list\'">		\n\n		<ion-grid no-padding>\n			<ion-row no-padding>\n				<!-- <ion-col col-12 col-md-6 *ngFor="let restaurant of restaurantsRest | termSearch:proptype:\'tags\' | termSearch:label:\'label\'"> -->\n					<ion-col col-12 col-md-6 *ngFor="let restaurant of restaurantsRest">						\n\n		      <ion-card margin-bottom>							\n		        <div class="card-img-wrap">\n		          <ion-fab bottom right edge>\n		            <button ion-fab mini (click)="favorite(restaurant)">\n		              <ion-icon name="heart"></ion-icon>\n		            </button>\n		          </ion-fab>\n		          <img src="../../assets/img/uploads/restaurant/{{restaurant.picture1}}" tappable (click)="openRestaurantDetail(restaurant)">\n		          <span ion-text class="card-img-price fw700 text-black">\n								<!-- {{ restaurant.tags }} -->\n								{{ restaurant.label }}\n		          </span>\n		          <span ion-text class="card-img-status fw500 text-white" [ngClass]="{\'cerrado\': restaurant.estado === \'cerrado\', \'abierto\': restaurant.estado === \'abierto\'}">\n								{{ restaurant.estado }}\n								<!-- label -->\n		          </span>\n		        </div>\n		        <ion-card-content>\n		          <ion-card-title ion-text color="dark" class="fw700" tappable (click)="openRestaurantDetail(restaurant)" no-margin no-padding>\n		            {{restaurant.name}}\n		          </ion-card-title>\n		          <p ion-text color="primary" no-margin>\n		            {{restaurant.direction}} • <span ion-text class="fw700">price</span>\n		          </p>\n		          <hr>\n		          	<ion-badge color="secondary">\n									<ion-icon name="star"></ion-icon>\n									<!-- {{ restaurant.rating | number:\'1.1\' }} -->\n									4.9\n			          </ion-badge>\n		        </ion-card-content>\n		      </ion-card>\n\n    		</ion-col>\n    	</ion-row>\n    </ion-grid>\n	\n\n			<!-- Grid original conservar como referencia -->\n		<!-- <ion-grid no-padding>\n			<ion-row no-padding>\n				<ion-col col-12 col-md-6 *ngFor="let restaurant of restaurants | termSearch:proptype:\'tags\' | termSearch:label:\'label\'">\n\n		      <ion-card margin-bottom>\n		        <div class="card-img-wrap">\n		          <ion-fab bottom right edge>\n		            <button ion-fab mini (click)="favorite(restaurant)">\n		              <ion-icon name="heart"></ion-icon>\n		            </button>\n		          </ion-fab>\n		          <img src="{{restaurant.thumbnail}}" tappable (click)="openRestaurantDetail(restaurant)">\n		          <span ion-text class="card-img-price fw700 text-black">\n		            {{ restaurant.tags }}\n		          </span>\n		          <span ion-text class="card-img-status fw500 text-white" [ngClass]="{\'closed\': restaurant.label === \'closed\', \'open\': restaurant.label === \'open\'}">\n		            {{ restaurant.label }}\n		          </span>\n		        </div>\n		        <ion-card-content>\n		          <ion-card-title ion-text color="dark" class="fw700" tappable (click)="openRestaurantDetail(restaurant)" no-margin no-padding>\n		            {{restaurant.title}}\n		          </ion-card-title>\n		          <p ion-text color="primary" no-margin>\n		            {{restaurant.city}}, {{restaurant.state}} • <span ion-text class="fw700">{{ restaurant.price }}</span>\n		          </p>\n		          <hr>\n		          	<ion-badge color="secondary">\n									<ion-icon name="star"></ion-icon>\n			          	{{ restaurant.rating | number:\'1.1\' }}\n			          </ion-badge>\n		        </ion-card-content>\n		      </ion-card>\n\n    		</ion-col>\n    	</ion-row>\n    </ion-grid> -->\n  </div>\n\n  <div *ngIf="viewMode === \'map\'">\n		<agm-map [latitude]="lat" [longitude]="lng" [zoom]="12">\n			<agm-marker *ngFor="let restaurant of restaurants | termSearch:proptype:\'tags\' | termSearch:label:\'label\'; let i = index" [latitude]="restaurant.lat" [longitude]="restaurant.long">\n				<agm-info-window>\n					<img src="{{restaurant.thumbnail}}" class="mw240" tappable (click)="openRestaurantDetail(restaurant)">\n					<h3 tappable (click)="openRestaurantDetail(restaurant)">\n						<strong>{{restaurant.title}}</strong>\n					</h3>\n					<p tappable (click)="openRestaurantDetail(restaurant)" ion-text color="primary" no-margin>\n						{{restaurant.city}}, {{restaurant.state}} •\n						<span ion-text class="fw700">{{ restaurant.price }}</span>\n					</p>\n				</agm-info-window>\n			</agm-marker>\n		</agm-map>\n	</div>\n\n</ion-content>\n\n<ion-footer padding>\n    <ion-segment [(ngModel)]="viewMode">\n        <ion-segment-button value="list">\n            <ion-icon name="list"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="map">\n            <ion-icon name="map"></ion-icon>\n        </ion-segment-button>\n    </ion-segment>\n</ion-footer>\n'/*ion-inline-end:"D:\Node App\Fyned App\Movil\foodionic_3\src\pages\restaurant-list\restaurant-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_restaurant_service_mock__["a" /* RestaurantService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_backend__["a" /* RestBackendProvider */]])
    ], RestaurantListPage);
    return RestaurantListPage;
}());

//# sourceMappingURL=restaurant-list.js.map

/***/ })

});
//# sourceMappingURL=4.js.map