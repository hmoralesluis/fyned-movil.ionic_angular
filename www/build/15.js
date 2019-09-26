webpackJsonp([15],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteListPageModule", function() { return FavoriteListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorite_list__ = __webpack_require__(754);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { PipesModule } from '../../pipes/pipes.module';

var FavoriteListPageModule = /** @class */ (function () {
    function FavoriteListPageModule() {
    }
    FavoriteListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__favorite_list__["a" /* FavoriteListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favorite_list__["a" /* FavoriteListPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__favorite_list__["a" /* FavoriteListPage */]
            ]
        })
    ], FavoriteListPageModule);
    return FavoriteListPageModule;
}());

//# sourceMappingURL=favorite-list.module.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restaurant_service_mock__ = __webpack_require__(368);
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




var FavoriteListPage = /** @class */ (function () {
    function FavoriteListPage(navCtrl, service, serviceBackend) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.serviceBackend = serviceBackend;
        this.itemsQty = 0;
        // this.getFavorites();
        this.getfavoritesRest();
        // console.log(this.favorites);
        this.imagesRestUrl = this.serviceBackend.getImgRestUrl();
    }
    FavoriteListPage.prototype.getfavoritesRest = function () {
        var _this = this;
        this.serviceBackend.getFavoriteRestaurantByUserId()
            .then(function (data) {
            _this.favoritesRest = data;
            _this.favoritesRest = _this.favoritesRest.lovedrest;
            var aux = _this.favoritesRest.items.length;
            _this.itemsQty = aux;
            _this.favoritesRest = _this.favoritesRest.items;
        });
    };
    FavoriteListPage.prototype.itemTapped = function (favorite) {
        this.navCtrl.push('page-restaurant-detail', {
            'id': favorite.item
        });
    };
    FavoriteListPage.prototype.deleteItem = function (favorite) {
        var _this = this;
        this.serviceBackend.delFavoriteRestaurantByUserId(favorite._id)
            .then(function (data) {
            _this.getfavoritesRest();
        });
    };
    FavoriteListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorite-list',template:/*ion-inline-start:"D:\Node App\Fyned App\Movil\foodionic_5\src\pages\favorite-list\favorite-list.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n        	<span ion-text>Restaurantes Favoritos</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="lightest-bg">\n\n	<ion-grid no-padding fixed>\n		<ion-row no-padding>\n			<ion-col>\n\n				<ion-card *ngIf="itemsQty < 1" class="primary-bg" margin-top>\n					<ion-card-content>\n						<p text-center class="text-white">No cuenta con restaurantes favoritos.</p>\n					</ion-card-content>\n				</ion-card>\n\n				<ion-list>\n						<ion-item-sliding *ngFor="let favorite of favoritesRest">\n								<button ion-item (click)="itemTapped(favorite)">\n										<ion-thumbnail item-left>\n												<img src="{{imagesRestUrl}}{{favorite.picture}}"/>\n										</ion-thumbnail>\n										<h2>{{favorite.name}}</h2>\n										<p>direccion y precio</p>\n								</button>\n								<ion-item-options>\n										<button ion-button color="danger" (click)="deleteItem(favorite)">Eliminar</button>\n								</ion-item-options>\n						</ion-item-sliding>\n				</ion-list>\n\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"D:\Node App\Fyned App\Movil\foodionic_5\src\pages\favorite-list\favorite-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_restaurant_service_mock__["a" /* RestaurantService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_backend__["a" /* RestBackendProvider */]])
    ], FavoriteListPage);
    return FavoriteListPage;
}());

//# sourceMappingURL=favorite-list.js.map

/***/ })

});
//# sourceMappingURL=15.js.map