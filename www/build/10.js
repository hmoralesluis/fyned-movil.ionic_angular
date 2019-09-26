webpackJsonp([10],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearbyPageModule", function() { return NearbyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nearby__ = __webpack_require__(758);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NearbyPageModule = /** @class */ (function () {
    function NearbyPageModule() {
    }
    NearbyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__nearby__["a" /* NearbyPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__nearby__["a" /* NearbyPage */]),
                __WEBPACK_IMPORTED_MODULE_2__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyD9BxeSvt3u--Oj-_GD-qG2nPr1uODrR0Y'
                })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__nearby__["a" /* NearbyPage */]
            ]
        })
    ], NearbyPageModule);
    return NearbyPageModule;
}());

//# sourceMappingURL=nearby.module.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NearbyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restaurant_service_mock__ = __webpack_require__(368);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NearbyPage = /** @class */ (function () {
    function NearbyPage(navCtrl, service, modalCtrl) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.modalCtrl = modalCtrl;
        this.lat = 42.35663;
        this.lng = -71.11095;
        this.findAll();
    }
    NearbyPage.prototype.openRestaurantFilterPage = function () {
        var modal = this.modalCtrl.create('page-restaurant-filter');
        modal.present();
    };
    NearbyPage.prototype.openRestaurantDetail = function (restaurant) {
        this.navCtrl.push('page-restaurant-detail', {
            'id': restaurant.id
        });
    };
    NearbyPage.prototype.findAll = function () {
        var _this = this;
        this.service.findAll()
            .then(function (data) { return _this.restaurants = data; })
            .catch(function (error) { return alert(error); });
    };
    NearbyPage.prototype.ionViewDidLoad = function () {
    };
    NearbyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nearby',template:/*ion-inline-start:"D:\Node App\Fyned App\Movil\foodionic_5\src\pages\nearby\nearby.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <span ion-text>Cerca</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="lightest-bg">\n\n  <div id="nearby-map" class="nearby-map">\n		<agm-map [latitude]="lat" [longitude]="lng" [zoom]="12">\n			<agm-marker *ngFor="let restaurant of restaurants; let i = index"\n			 [latitude]="restaurant.lat" [longitude]="restaurant.long">\n				<agm-info-window>\n					<img src="{{restaurant.thumbnail}}" class="mw240" tappable (click)="openRestaurantDetail(restaurant)">\n					<h3 tappable (click)="openRestaurantDetail(restaurant)">\n						<strong>{{restaurant.title}}</strong>\n					</h3>\n					<p ion-text tappable (click)="openRestaurantDetail(restaurant)" color="primary" no-margin>\n						{{restaurant.city}}, {{restaurant.state}} •\n						<span ion-text class="fw700">{{ restaurant.price }}</span>\n					</p>\n				</agm-info-window>\n			</agm-marker>\n		</agm-map>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Node App\Fyned App\Movil\foodionic_5\src\pages\nearby\nearby.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_restaurant_service_mock__["a" /* RestaurantService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], NearbyPage);
    return NearbyPage;
}());

//# sourceMappingURL=nearby.js.map

/***/ })

});
//# sourceMappingURL=10.js.map