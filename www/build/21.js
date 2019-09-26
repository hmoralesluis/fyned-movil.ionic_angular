webpackJsonp([21],{

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(747);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]
            ]
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cart_service_mock__ = __webpack_require__(369);
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




var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams, cartService, serviceBackend) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cartService = cartService;
        this.serviceBackend = serviceBackend;
        // orders: Array<any> = [];
        this.totalVal = 0;
        // this.getOrders();
        this.getOrderRest();
        this.imagesDishUrl = this.serviceBackend.getImgDishUrl();
    }
    CartPage.prototype.getOrderRest = function () {
        var _this = this;
        this.serviceBackend.getCartByUserId()
            .then(function (data) {
            _this.orderRest = data;
            _this.totalVal = _this.orderRest.cart.total;
            var aux = _this.orderRest.cart.items.length;
            _this.itemsLength = aux;
            _this.orderRest = _this.orderRest.cart.items;
        });
    };
    CartPage.prototype.removeOrder = function (itemId) {
        var _this = this;
        this.serviceBackend.deleteItemFromCart(itemId)
            .then(function () {
            _this.getOrderRest();
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    // getOrders () {
    //   this.cartService.getOrders().then(orders => {
    //   	this.orders = orders
    //   	this.totalVal = 0;
    //   	this.orders.forEach((val, i) => {
    //   		this.totalVal = this.totalVal + (val.order.price * val.qtd)
    //   	});
    //   });
    // }
    // minus adult when click minus button
    CartPage.prototype.minusQtd = function (itemId, qty) {
        var _this = this;
        var aux = qty - 1;
        this.serviceBackend.modifyItemFromCartQty(itemId, aux)
            .then(function () {
            _this.getOrderRest();
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    // plus adult when click plus button
    CartPage.prototype.plusQtd = function (itemId, qty) {
        var _this = this;
        var aux = qty + 1;
        this.serviceBackend.modifyItemFromCartQty(itemId, aux)
            .then(function () {
            _this.getOrderRest();
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    CartPage.prototype.openCheckout = function () {
        this.navCtrl.push('page-checkout');
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"D:\Node App\Fyned App\Movil\foodionic_5\src\pages\cart\cart.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n        	<span ion-text>Carro</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content class="lightest-bg">\n\n	<ion-grid no-padding fixed>\n		<ion-row no-padding>\n			<ion-col>\n				<ion-card *ngIf="itemsLength < 1" class="primary-bg" margin-top>\n					<ion-card-content>\n						<p text-center class="text-white">Sin elementos</p>\n					</ion-card-content>\n				</ion-card>\n\n				<ion-list no-margin>\n					<ion-item-sliding *ngFor="let order of orderRest">\n							<div ion-item>\n								<!-- (click)="itemTapped(favorite)" -->\n									<ion-thumbnail item-left>\n											<img src="{{imagesDishUrl}}{{order.picture}}"/>\n									</ion-thumbnail>\n										<h2 ion-text color="dark" class="fw700">{{order.title}} ${{order.price}}</h2>\n										<ion-grid class="filters" no-padding>\n											<ion-row>\n												<ion-col text-center col-2>\n													<ion-icon name="remove-circle" class="text-22x" tappable (click)="minusQtd(order._id, order.quantity)" [hidden]="order.quantity < 2"\n																		color="secondary"></ion-icon>\n												</ion-col>\n												<ion-col text-center col-3>\n													<h2 ion-text color="primary" class="text-18x">\n														<span>{{ order.quantity }}</span>\n													</h2>\n												</ion-col>\n												<ion-col text-center col-2>\n													<ion-icon name="add-circle" class="text-22x" tappable (click)="plusQtd(order._id, order.quantity)" color="secondary"></ion-icon>\n												</ion-col>\n											</ion-row>\n										</ion-grid>\n									<div item-right>\n										<ion-badge>{{ order.price * order.quantity | currency }}</ion-badge>\n									</div>\n							</div>\n							<ion-item-options>\n									<button ion-button color="danger" (click)="removeOrder(order._id)">Eliminar</button>\n							</ion-item-options>\n					</ion-item-sliding>\n				</ion-list>\n\n				<ion-card class="primary-bg" *ngIf="itemsLength > 0">\n					<ion-card-content>\n						<p ion-text color="light">Impuesto entrega (30 - 60min): <span class="fw700">Gratis</span></p>\n\n						<hr>\n\n						<p ion-text color="light">Valor total Orden</p>\n						<h2 ion-text class="text-white fw700">{{ totalVal | currency }}</h2>\n					</ion-card-content>\n				</ion-card>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n\n<ion-footer *ngIf="itemsLength > 0" class="no-padding">\n	<button ion-button full large color="dark" no-margin icon-right (click)="openCheckout()">\n		Pago en Caja\n		<ion-icon name="card"></ion-icon>\n	</button>\n</ion-footer>\n'/*ion-inline-end:"D:\Node App\Fyned App\Movil\foodionic_5\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_cart_service_mock__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_backend__["a" /* RestBackendProvider */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=21.js.map