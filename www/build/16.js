webpackJsonp([16],{

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishListPageModule", function() { return DishListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dish_list__ = __webpack_require__(750);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DishListPageModule = /** @class */ (function () {
    function DishListPageModule() {
    }
    DishListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dish_list__["a" /* DishListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dish_list__["a" /* DishListPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__dish_list__["a" /* DishListPage */]
            ]
        })
    ], DishListPageModule);
    return DishListPageModule;
}());

//# sourceMappingURL=dish-list.module.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dish_service_mock__ = __webpack_require__(369);
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




var DishListPage = /** @class */ (function () {
    function DishListPage(navCtrl, dishService, serviceBackend) {
        this.navCtrl = navCtrl;
        this.dishService = dishService;
        this.serviceBackend = serviceBackend;
        this.dishes = this.dishService.findAll();
        this.getDishesRest();
    }
    DishListPage.prototype.getDishesRest = function () {
        var _this = this;
        this.serviceBackend.findAllDishes()
            .then(function (data) {
            _this.dishesRest = data;
            _this.dishesRest = _this.dishesRest.gigs;
        });
    };
    DishListPage.prototype.openDishDetail = function (dishID) {
        this.navCtrl.push('page-dish-detail', {
            'id': dishID
        });
    };
    DishListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dish-list',template:/*ion-inline-start:"D:\NodeApps\Fyned\Movil\foodionic_3\src\pages\dish-list\dish-list.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>\n			<span ion-text>Lista de platos</span>\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="lightest-bg">\n	<ion-grid no-padding fixed>\n		<ion-row no-padding>\n			<ion-col>\n				<ion-list>\n					<ion-item *ngFor="let dish of dishesRest" tapplable (click)="openDishDetail(dish._id)">\n					<ion-thumbnail item-start>\n						<img src="../../assets/img/uploads/gig/{{dish.picture1}}">\n					</ion-thumbnail>\n					<h2 ion-text color="dark" class="fw500">{{dish.title}}</h2>\n					<p ion-text color="primary" class="text-11x">ingredientes</p>\n					<button ion-button clear class="green-bg text-white" item-end>{{ dish.price | currency }}</button>\n					</ion-item>\n\n				</ion-list>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"D:\NodeApps\Fyned\Movil\foodionic_3\src\pages\dish-list\dish-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_dish_service_mock__["a" /* DishService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_backend__["a" /* RestBackendProvider */]])
    ], DishListPage);
    return DishListPage;
}());

//# sourceMappingURL=dish-list.js.map

/***/ })

});
//# sourceMappingURL=16.js.map