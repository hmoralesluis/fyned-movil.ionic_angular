webpackJsonp([17],{

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishDetailPageModule", function() { return DishDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dish_detail__ = __webpack_require__(749);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DishDetailPageModule = /** @class */ (function () {
    function DishDetailPageModule() {
    }
    DishDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dish_detail__["a" /* DishDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dish_detail__["a" /* DishDetailPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__dish_detail__["a" /* DishDetailPage */]
            ]
        })
    ], DishDetailPageModule);
    return DishDetailPageModule;
}());

//# sourceMappingURL=dish-detail.module.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dish_service_mock__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cart_service_mock__ = __webpack_require__(368);
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





var DishDetailPage = /** @class */ (function () {
    function DishDetailPage(navCtrl, navParams, toastCtrl, dishService, cartService, serviceBackend) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.dishService = dishService;
        this.cartService = cartService;
        this.serviceBackend = serviceBackend;
        this.qtd = 1;
        this.param = this.navParams.get('id');
        this.dishId = this.navParams.get('id');
        this.dish = this.dishService.getItem(this.param) ? this.dishService.getItem(this.param) : this.dishService.findAll()[0];
        this.findDish();
    }
    DishDetailPage.prototype.findDish = function () {
        var _this = this;
        this.serviceBackend.getDishById(this.dishId)
            .then(function (data) {
            _this.restDish = data;
            _this.restDish = _this.restDish.gig;
            _this.restDishId = _this.restDish._id;
            _this.restPicture1 = _this.restDish.picture1;
            _this.restPicture2 = _this.restDish.picture2;
            _this.restPicture3 = _this.restDish.picture3;
            _this.restPrecio = _this.restDish.price;
            _this.restDetails = _this.restDish.details;
            _this.restTitle = _this.restDish.title;
        });
    };
    // minus adult when click minus button
    DishDetailPage.prototype.minusQtd = function () {
        this.qtd--;
    };
    // plus adult when click plus button
    DishDetailPage.prototype.plusQtd = function () {
        this.qtd++;
    };
    DishDetailPage.prototype.addcart = function (dishId, qtd) {
        // console.log('el id es ' + dishId + 'la cantida es ' + qtd);
        var _this = this;
        if (this.serviceBackend.getIduserlogin() == '0') {
            this.navCtrl.push('page-auth');
        }
        else {
            this.serviceBackend.addDishToCart(dishId, qtd)
                .then(function (dish) {
                var toast = _this.toastCtrl.create({
                    message: 'Plato agregado al carro',
                    cssClass: 'mytoast',
                    duration: 2000
                });
                toast.present(toast);
            });
        }
    };
    DishDetailPage.prototype.favorite = function (dishId) {
        if (this.serviceBackend.getIduserlogin() == '0') {
            this.navCtrl.push('page-auth');
        }
        else {
            this.serviceBackend.addDishToFavorite(dishId);
            var toast = this.toastCtrl.create({
                message: 'Plato adicionado',
                cssClass: 'mytoast',
                duration: 2000
            });
            toast.present(toast);
        }
    };
    DishDetailPage.prototype.openCart = function () {
        if (this.serviceBackend.getIduserlogin() == '0') {
            this.navCtrl.push('page-auth');
        }
        else {
            this.navCtrl.push('page-cart');
        }
    };
    DishDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dish-detail',template:/*ion-inline-start:"D:\Node App\Fyned App\Movil\foodionic_3\src\pages\dish-detail\dish-detail.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>\n            <span ion-text>{{restTitle}}</span>\n				</ion-title>\n		</ion-navbar>\n\n		<ion-fab middle right>\n			<button ion-fab mini color="secondary" (click)="favorite(restDishId)">\n				<ion-icon name="heart" class="text-white"></ion-icon>\n			</button>\n		</ion-fab>\n</ion-header>\n\n<ion-content class="dish lightest-bg">\n\n  <ion-card class="dish-card">\n\n    <ion-card-content class="profiles-bg">\n			<!--slides-->\n			<ion-slides pager>\n				<ion-slide>\n					<img src="../../assets/img/uploads/gig/{{restPicture1}}">\n				</ion-slide>\n				<ion-slide>\n						<img src="../../assets/img/uploads/gig/{{restPicture2}}">\n					</ion-slide>\n					<ion-slide>\n							<img src="../../assets/img/uploads/gig/{{restPicture3}}">\n						</ion-slide>\n			</ion-slides>\n			<div padding>\n	      <ion-grid class="filters" no-padding fixed>\n	        <ion-row margin-bottom>\n	          <ion-col text-center>\n	          	<h4 ion-text color="light">Precio</h4>\n	            <h1 ion-text class="text-white fw700">{{ restPrecio | currency }}</h1>\n	            <hr margin-vertical>\n	          </ion-col>\n	        </ion-row>\n	        <ion-row margin-bottom>\n	          <ion-col text-center>\n	            <ion-icon name="remove-circle" class="text-4x" tappable (click)="minusQtd()" [hidden]="qtd < 2"\n	                      color="secondary"></ion-icon>\n	          </ion-col>\n	          <ion-col width-10 text-center>\n	          	<h4 ion-text color="light">Cantidad:</h4>\n	          	<h2 ion-text>{{ qtd }}</h2>\n	          </ion-col>\n	          <ion-col width-10 text-center>\n	            <ion-icon name="add-circle" class="text-4x" tappable (click)="plusQtd()" color="secondary"></ion-icon>\n	          </ion-col>\n	        </ion-row>\n	        <ion-row>\n				<ion-col text-center>\n		      <button ion-button color="secondary" icon-left tappable (click)="addcart(restDishId, qtd)">\n		      	<ion-icon name="cart"></ion-icon>\n		      	+ Carro ({{ restPrecio * qtd | currency }})\n		      </button>\n				</ion-col>\n	        </ion-row>\n	      </ion-grid>\n			</div>\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <h2 ion-text color="primary" class="fw500">Ingredientes</h2>\n      <p ion-text>ingredientes</p>\n			<hr>\n      <h2 ion-text color="primary" class="fw500">Descripcion</h2>\n      <p ion-text>{{dish.restDetails}}</p>\n    </ion-card-content>\n  </ion-card>\n\n  <br><br><br><br><br>\n\n  <ion-fab bottom right>\n    <button ion-fab round icon-only color="dark" (click)="openCart()">\n      <ion-icon name="cart" class="text-white"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"D:\Node App\Fyned App\Movil\foodionic_3\src\pages\dish-detail\dish-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_dish_service_mock__["a" /* DishService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_cart_service_mock__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_backend__["a" /* RestBackendProvider */]])
    ], DishDetailPage);
    return DishDetailPage;
}());

//# sourceMappingURL=dish-detail.js.map

/***/ })

});
//# sourceMappingURL=17.js.map