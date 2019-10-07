webpackJsonp([3],{

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SugerenciaPageModule", function() { return SugerenciaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sugerencia__ = __webpack_require__(766);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SugerenciaPageModule = /** @class */ (function () {
    function SugerenciaPageModule() {
    }
    SugerenciaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sugerencia__["a" /* SugerenciaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sugerencia__["a" /* SugerenciaPage */]),
            ],
        })
    ], SugerenciaPageModule);
    return SugerenciaPageModule;
}());

//# sourceMappingURL=sugerencia.module.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SugerenciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dish_service_mock__ = __webpack_require__(367);
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




var SugerenciaPage = /** @class */ (function () {
    function SugerenciaPage(navCtrl, dishService, serviceBackend) {
        this.navCtrl = navCtrl;
        this.dishService = dishService;
        this.serviceBackend = serviceBackend;
        this.dishes = this.dishService.findAll();
        this.getDishesRest();
        this.imagesDishUrl = this.serviceBackend.getImgDishUrl();
    }
    SugerenciaPage.prototype.getDishesRest = function () {
        var _this = this;
        this.serviceBackend.findSugerenciaDishes()
            .then(function (data) {
            _this.dishesRest = data;
            _this.dishesRest = _this.dishesRest.gigs;
        });
    };
    SugerenciaPage.prototype.openDishDetail = function (dishID) {
        this.navCtrl.push('page-dish-detail', {
            'id': dishID
        });
    };
    SugerenciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sugerencia',template:/*ion-inline-start:"D:\NodeApps\Fyned\Movil\foodionic_6\src\pages\sugerencia\sugerencia.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>\n			<span ion-text>Sugerencias</span>\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="lightest-bg">\n	<ion-grid no-padding fixed>\n		<ion-row no-padding>\n			<ion-col>\n				<ion-list>\n					<ion-item *ngFor="let dish of dishesRest" tapplable (click)="openDishDetail(dish._id)">\n					<ion-thumbnail item-start>\n						<img src="{{imagesDishUrl}}{{dish.picture1}}">\n					</ion-thumbnail>\n					<h2 ion-text color="dark" class="fw500">{{dish.title}}</h2>\n					<p ion-text color="primary" class="text-11x">ingredientes</p>\n					<button ion-button clear class="green-bg text-white" item-end>{{ dish.price | currency }}</button>\n					</ion-item>\n\n				</ion-list>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"D:\NodeApps\Fyned\Movil\foodionic_6\src\pages\sugerencia\sugerencia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_dish_service_mock__["a" /* DishService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_backend__["a" /* RestBackendProvider */]])
    ], SugerenciaPage);
    return SugerenciaPage;
}());

//# sourceMappingURL=sugerencia.js.map

/***/ })

});
//# sourceMappingURL=3.js.map