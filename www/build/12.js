webpackJsonp([12],{

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalMapPageModule", function() { return ModalMapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_map__ = __webpack_require__(770);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalMapPageModule = /** @class */ (function () {
    function ModalMapPageModule() {
    }
    ModalMapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_map__["a" /* ModalMapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_map__["a" /* ModalMapPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__modal_map__["a" /* ModalMapPage */]
            ]
        })
    ], ModalMapPageModule);
    return ModalMapPageModule;
}());

//# sourceMappingURL=modal-map.module.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_backend__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalMapPage = /** @class */ (function () {
    function ModalMapPage(navCtrl, navParams, renderer, serviceBackend) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.renderer = renderer;
        this.serviceBackend = serviceBackend;
    }
    ModalMapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalMapPage');
    };
    ModalMapPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalMapPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.getGoogleMaps()
            .then(function (googleMaps) {
            var mapEl = _this.mapElementRef.nativeElement;
            var map = new googleMaps.Map(mapEl, {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 16
            });
            googleMaps.event.addListenerOnce(map, 'idle', function () {
                _this.renderer.addClass(mapEl, 'visible');
            });
            map.addListener('click', function (event) {
                _this.serviceBackend.setLatitude(event.latLng.lat());
                _this.serviceBackend.setLongitude(event.latLng.lng());
                _this.serviceBackend.setHaveCordenadas(true);
                _this.navCtrl.setRoot('page-home');
            });
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ModalMapPage.prototype.selectPruebaOffline = function () {
        this.serviceBackend.setLatitude(19);
        this.serviceBackend.setLongitude(19);
        this.serviceBackend.setHaveCordenadas(true);
        this.navCtrl.setRoot('page-home');
        // this.navCtrl.pop();
    };
    ModalMapPage.prototype.getGoogleMaps = function () {
        var win = window;
        var googleModule = win.google;
        if (googleModule && googleModule.maps) {
            return Promise.resolve(googleModule.maps);
        }
        return new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.src =
                'https://maps.googleapis.com/maps/api/js?key=AIzaSyC9xndXu6gNfgqDxxEGwuRzUxAT-QqfWXM';
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            script.onload = function () {
                var loadedGoogleModule = win.google;
                if (loadedGoogleModule && loadedGoogleModule.maps) {
                    resolve(loadedGoogleModule.maps);
                }
                else {
                    reject('Google maps SDK not available.');
                }
            };
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ModalMapPage.prototype, "mapElementRef", void 0);
    ModalMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-map',template:/*ion-inline-start:"D:\NodeApps\Fyned\Movil\foodionic_6\src\pages\modal-map\modal-map.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-buttons start>\n          <button ion-button round (click)="closeModal()">\n              <ion-icon name="close"></ion-icon>\n          </button>\n      </ion-buttons>\n      <ion-title>\n        <span ion-text>Seleccion en el mapa</span>\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n    <div>\n        <p>Este es el mapa</p>\n        <ion-buttons>\n          <button ion-button block round color="secondary" margin-top (click)="selectPruebaOffline()">Location</button>\n        </ion-buttons>\n        <div class="map" #map></div>\n      </div>\n</ion-content>\n'/*ion-inline-end:"D:\NodeApps\Fyned\Movil\foodionic_6\src\pages\modal-map\modal-map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_backend__["a" /* RestBackendProvider */]])
    ], ModalMapPage);
    return ModalMapPage;
}());

//# sourceMappingURL=modal-map.js.map

/***/ })

});
//# sourceMappingURL=12.js.map