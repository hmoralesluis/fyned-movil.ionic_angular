webpackJsonp([5],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantFilterPageModule", function() { return RestaurantFilterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restaurant_filter__ = __webpack_require__(761);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RestaurantFilterPageModule = /** @class */ (function () {
    function RestaurantFilterPageModule() {
    }
    RestaurantFilterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__restaurant_filter__["a" /* RestaurantFilterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__restaurant_filter__["a" /* RestaurantFilterPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__restaurant_filter__["a" /* RestaurantFilterPage */]
            ]
        })
    ], RestaurantFilterPageModule);
    return RestaurantFilterPageModule;
}());

//# sourceMappingURL=restaurant-filter.module.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestaurantFilterPage = /** @class */ (function () {
    function RestaurantFilterPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.radiusmiles = 1;
        this.minmaxprice = {
            upper: 500,
            lower: 10
        };
    }
    RestaurantFilterPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    RestaurantFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-restaurant-filter',template:/*ion-inline-start:"D:\NodeApps\Fyned\Movil\foodionic_3\src\pages\restaurant-filter\restaurant-filter.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons start>\n        <button ion-button round (click)="closeModal()">\n            <ion-icon name="close"></ion-icon>\n        </button>\n    </ion-buttons>\n    <ion-title>\n    	<span ion-text>Filtros de busqueda</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item margin-bottom>\n    <ion-label color="primary" stacked>\n    	<span ion-text color="dark" class="fw500">Codigo Zip</span>\n    </ion-label>\n    <ion-input type="number" placeholder="Entra el codigo zip del area de preferencia"></ion-input>\n  </ion-item>\n\n	<ion-item>\n	  <ion-label class="no-margin-bottom">\n	  	<span ion-text color="dark" class="fw500">Radius:</span> <span ion-text color="primary"> {{radiusmiles}} Milla(s)</span></ion-label>\n	  <ion-range min="1" max="50" step="1" value="1" class="no-padding-top" [(ngModel)]="radiusmiles">\n	  </ion-range>\n	</ion-item>\n\n	<ion-item>\n	  <ion-label class="fw500" color="dark">Organizar por</ion-label>\n	  <ion-select [(ngModel)]="organizeby">\n	    <ion-option>Mayor relevancia</ion-option>\n	    <ion-option>Cercano</ion-option>\n	    <ion-option>Precios bajos</ion-option>\n	    <ion-option>Precios altos</ion-option>\n	    <ion-option>Bajos tiempos de entrega</ion-option>\n	    <ion-option>Ranquiado</ion-option>\n	  </ion-select>\n	</ion-item>\n\n	<ion-item>\n	  <ion-label class="fw500" color="dark">Tipo de plato</ion-label>\n	  <ion-select [(ngModel)]="dishtype" multiple="true">\n	    <ion-option>Health Food</ion-option>\n	    <ion-option>Veggie</ion-option>\n	    <ion-option>Pasta</ion-option>\n	    <ion-option>Barbecue</ion-option>\n	    <ion-option>Casual Dining</ion-option>\n	    <ion-option>Fine Dining</ion-option>\n	    <ion-option>Street Food</ion-option>\n	    <ion-option>Fast Food</ion-option>\n	    <ion-option>Pizza</ion-option>\n	  </ion-select>\n	</ion-item>\n\n	<ion-item>\n	  <ion-label class="fw500" color="dark">Nacionalidades</ion-label>\n	  <ion-select [(ngModel)]="dishnationality" multiple="true">\n	    <ion-option>Alemana</ion-option>\n	    <ion-option>Japonesa</ion-option>\n	    <ion-option>Koreana</ion-option>\n	    <ion-option>India</ion-option>\n	    <ion-option>Arabe</ion-option>\n	    <ion-option>Italiana</ion-option>\n	    <ion-option>China</ion-option>\n	    <ion-option>Brazilera</ion-option>\n	    <ion-option>Thai</ion-option>\n	  </ion-select>\n	</ion-item>\n\n	<ion-item margin-bottom>\n	  <ion-label class="no-margin-bottom">\n	  	<span ion-text color="dark" class="fw500">Precio Min/Max:</span> <span ion-text color="primary"> $ {{minmaxprice.lower}} to $ {{minmaxprice.upper}}</span></ion-label>\n	  	<ion-range dualKnobs="true" [(ngModel)]="minmaxprice" min="10" max="1000" step="10" class="no-padding-top"></ion-range>\n	</ion-item>\n\n	<button ion-button block color="primary" (click)="closeModal()">Resultado del filtrado</button>\n</ion-content>\n'/*ion-inline-end:"D:\NodeApps\Fyned\Movil\foodionic_3\src\pages\restaurant-filter\restaurant-filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], RestaurantFilterPage);
    return RestaurantFilterPage;
}());

//# sourceMappingURL=restaurant-filter.js.map

/***/ })

});
//# sourceMappingURL=5.js.map