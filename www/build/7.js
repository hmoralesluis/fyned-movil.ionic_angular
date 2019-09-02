webpackJsonp([7],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders__ = __webpack_require__(757);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrdersPageModule = /** @class */ (function () {
    function OrdersPageModule() {
    }
    OrdersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */]
            ]
        })
    ], OrdersPageModule);
    return OrdersPageModule;
}());

//# sourceMappingURL=orders.module.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_orders_service_mock__ = __webpack_require__(371);
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




var OrdersPage = /** @class */ (function () {
    function OrdersPage(navCtrl, navParams, ordersService, serviceBackend) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ordersService = ordersService;
        this.serviceBackend = serviceBackend;
        this.lastOrders = [];
        this.getOrdersRest();
    }
    OrdersPage.prototype.getOrdersRest = function () {
        var _this = this;
        this.serviceBackend.getorderbyuser()
            .then(function (data) {
            _this.responseRest = data;
            _this.responseRest = _this.responseRest.res;
            if (_this.responseRest == true) {
                _this.orderrest = data;
                _this.orderrest = _this.orderrest.orders;
            }
        });
    };
    OrdersPage.prototype.ionViewWillEnter = function () {
        this.getOrdersRest();
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orders',template:/*ion-inline-start:"D:\Node App\Fyned App\Movil\foodionic_3\src\pages\orders\orders.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n        	<span ion-text>Ordenes</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="lightest-bg">\n	\n	<ion-grid no-padding fixed>\n		<ion-row no-padding>\n			<ion-col>\n\n				<ion-card *ngIf="!responseRest" class="primary-bg" margin-top>\n					<ion-card-content>\n						<p text-center class="text-white">No cuenta con ordenes pasadas.</p>\n					</ion-card-content>\n				</ion-card>\n\n				<ion-card *ngFor="let order of orderrest">\n					<ion-card-header text-center class="primary-bg">\n						<p ion-text class="text-18x text-light fw300"># Orden: <span ion-text class="fw700 text-white">123456789</span></p>\n					</ion-card-header>\n					<ion-card-content no-padding>\n\n						<ion-list *ngFor="let item of order.items" no-margin>\n							<div ion-item>\n								<ion-thumbnail item-left>\n										<img src="../../assets/img/uploads/gig/{{item.picture}}"/>\n								</ion-thumbnail>\n									<h2 ion-text color="dark" class="fw700">{{item.title}}</h2>\n									<p ion-text color="primary">Quantity: <span class="fw700">{{item.quantity}}</span></p>\n									<ion-badge color="primary">{{ item.price * item.quantity | currency }}</ion-badge>\n							</div>\n						</ion-list>\n\n						<ion-grid padding>\n							<ion-row>\n								<ion-col>\n									<ion-card class="green-bg full-width" no-margin text-center>\n										<ion-card-content>\n											<span ion-text class="text-white">Total</span>\n											<h2 ion-text no-margin class="fw700 text-white">{{ order.total | currency }}</h2>\n										</ion-card-content>\n									</ion-card>\n								</ion-col>\n							</ion-row>\n						</ion-grid>\n					</ion-card-content>\n				</ion-card>\n\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"D:\Node App\Fyned App\Movil\foodionic_3\src\pages\orders\orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_orders_service_mock__["a" /* OrdersService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_backend__["a" /* RestBackendProvider */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ })

});
//# sourceMappingURL=7.js.map