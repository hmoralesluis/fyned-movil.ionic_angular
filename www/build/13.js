webpackJsonp([13],{

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(751);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, menuCtrl, popoverCtrl, locationCtrl, modalCtrl, toastCtrl, service, serviceBackend) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.locationCtrl = locationCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.service = service;
        this.serviceBackend = serviceBackend;
        this.searchKey = "";
        this.yourLocation = "463 Beacon Street Guest House";
        this.menuCtrl.swipeEnable(true, 'authenticated');
        this.menuCtrl.enable(true);
        this.findAll();
        this.findAllRest();
    }
    HomePage.prototype.openRestaurantListPage = function (proptype) {
        this.navCtrl.push('page-restaurant-list', proptype);
    };
    HomePage.prototype.openRestaurantFilterPage = function () {
        var modal = this.modalCtrl.create('page-restaurant-filter');
        modal.present();
    };
    HomePage.prototype.openNearbyPage = function () {
        this.navCtrl.push('page-nearby');
    };
    HomePage.prototype.openOrders = function () {
        this.navCtrl.push('page-orders');
    };
    HomePage.prototype.openCart = function () {
        this.navCtrl.push('page-cart');
    };
    HomePage.prototype.openRestaurantDetail = function (restaurant) {
        this.navCtrl.push('page-restaurant-detail', {
            'id': restaurant._id
        });
    };
    HomePage.prototype.openSettingsPage = function () {
        this.navCtrl.push('page-settings');
    };
    HomePage.prototype.openNotificationsPage = function () {
        this.navCtrl.push('page-notifications');
    };
    HomePage.prototype.openCategoryPage = function () {
        this.navCtrl.push('page-category');
    };
    HomePage.prototype.onInput = function (event) {
        var _this = this;
        this.service.findByName(this.searchKey)
            .then(function (data) {
            _this.restaurants = data;
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    HomePage.prototype.onCancel = function (event) {
        this.findAll();
    };
    HomePage.prototype.findAll = function () {
        var _this = this;
        this.service.findAll()
            .then(function (data) { return _this.restaurants = data; })
            .catch(function (error) { return alert(error); });
    };
    HomePage.prototype.findAllRest = function () {
        var _this = this;
        this.serviceBackend.findAllRestaurants()
            .then(function (data) {
            _this.restaurantsRest = data;
            _this.restaurantsRest = _this.restaurantsRest.restaurants;
        })
            .catch(function (error) { return alert(error); });
    };
    HomePage.prototype.alertLocation = function () {
        var _this = this;
        var changeLocation = this.locationCtrl.create({
            title: 'Change Location',
            message: "Type your Address to change restaurant list in that area.",
            inputs: [
                {
                    name: 'location',
                    placeholder: 'Enter your new Location',
                    type: 'text'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Change',
                    handler: function (data) {
                        console.log('Change clicked', data);
                        _this.yourLocation = data.location;
                        var toast = _this.toastCtrl.create({
                            message: 'Location was change successfully',
                            duration: 3000,
                            position: 'top',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        changeLocation.present();
    };
    HomePage.prototype.presentNotifications = function (myEvent) {
        console.log(myEvent);
        var popover = this.popoverCtrl.create('page-notifications');
        popover.present({
            ev: myEvent
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.navCtrl.canSwipeBack();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Node App\Fyned App\Movil\foodionic_3\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n			<span ion-text class="fw700">Fy</span><span ion-text class="fw300">ned</span>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="presentNotifications($event)">\n        <ion-icon name="notifications"></ion-icon>\n      </button>\n      <button ion-button (click)="openCart()">\n        <ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar color="primary">\n    <ion-searchbar placeholder="Buscar Restaurante" [(ngModel)]="searchKey" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button (click)="openRestaurantFilterPage()">\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n	<ion-grid no-padding fixed>\n		<ion-row no-padding>\n			<ion-col>\n\n				<ion-card no-margin margin-bottom>\n			    <ion-item class="lightest-bg">\n			      <h3 ion-text no-margin color="dark" class="fw500 no-margin">Restaurantes cerca:</h3>\n			      <span ion-text class="text-11x no-margin" color="primary">{{yourLocation}}</span>\n			      <button ion-button outline round item-end icon-right color="primary" (click)="alertLocation()">\n			      	Cambiar Ubicacion\n			      	<ion-icon name="locate"></ion-icon>\n			      </button>\n			    </ion-item>\n				</ion-card>\n\n			</ion-col>\n		</ion-row>\n\n		<ion-list ion-row padding-horizontal>\n		  <button ion-item ion-col *ngFor="let restaurant of restaurantsRest" (click)="openRestaurantDetail(restaurant)" col-12 col-md-6>\n		    <ion-thumbnail item-start>\n		        <img src="../../assets/img/uploads/restaurant/{{restaurant.picture1}}">\n		    </ion-thumbnail>\n		    <h3 ion-text color="dark" class="fw500">{{restaurant.name}}</h3>\n		    <p ion-text class="text-12x"><span ion-text color="secondary" class="fw700">{{restaurant.label}}</span> ∙ <span ion-text color="primary"></span></p>\n		    <p ion-text class="text-12x">1 mile<sup>sq</sup> ∙ 30 - 60min</p>\n				<ion-badge class="white-bg text-secondary" item-end>\n					<ion-icon name="star"></ion-icon>\n					4.9\n				</ion-badge>\n		  </button>\n		</ion-list>\n\n	  <ion-row padding>\n	    <button ion-button round block color="secondary" (click)="openRestaurantListPage()">\n	      Ver todos\n	    </button>\n	  </ion-row>\n\n	</ion-grid>\n\n</ion-content>\n\n<ion-footer class="no-padding dark-bg">\n	<ion-grid no-padding fixed>\n		<ion-row no-padding>\n			<button ion-button icon-left block color="primary" (click)="openNearbyPage()" class="col col-4">\n        	<ion-icon name="compass" class="text-18x"></ion-icon>\n        	<span ion-text class="text-12x">Cercanos</span>\n			</button>\n			<button ion-button icon-left block color="primary" (click)="openCategoryPage()" class="col col-4">\n          <ion-icon name="albums" class="text-18x"></ion-icon>\n          <span ion-text class="text-12x">Categorias</span>\n			</button>\n			<button ion-button icon-left block color="primary" (click)="openOrders()" class="col col-4">\n        	<ion-icon name="list-box" class="text-18x"></ion-icon>\n        	<span ion-text class="text-12x">Ordenes</span>\n			</button>\n		</ion-row>\n	</ion-grid>\n\n</ion-footer>\n'/*ion-inline-end:"D:\Node App\Fyned App\Movil\foodionic_3\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_restaurant_service_mock__["a" /* RestaurantService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_backend__["a" /* RestBackendProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=13.js.map