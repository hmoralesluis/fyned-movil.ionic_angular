webpackJsonp([1],{

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPageModule", function() { return WalkthroughPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__walkthrough__ = __webpack_require__(767);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WalkthroughPageModule = /** @class */ (function () {
    function WalkthroughPageModule() {
    }
    WalkthroughPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__walkthrough__["a" /* WalkthroughPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__walkthrough__["a" /* WalkthroughPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__walkthrough__["a" /* WalkthroughPage */]
            ]
        })
    ], WalkthroughPageModule);
    return WalkthroughPageModule;
}());

//# sourceMappingURL=walkthrough.module.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkthroughPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_test_test__ = __webpack_require__(375);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WalkthroughPage = /** @class */ (function () {
    function WalkthroughPage(navCtrl, menu, service, renderer) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.service = service;
        this.renderer = renderer;
        this.showSkip = true;
        this.dir = 'ltr';
        this.slideList = [
            {
                title: "Que ofrecemos en <strong>Fyned</strong>?",
                description: "La ubicacion de nuestros restaurantes, la seleccion de sus magnificos platos y la entrega o recogida de estos platos a eleccion del usuario",
                image: "assets/img/logo.svg",
            }
            // ,
            // {
            //   title: "Why FoodIonic?",
            //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.",
            //   image: "assets/img/foodIonic-ico.png",
            // },
            // {
            //   title: "Your delicious dish is coming!",
            //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.",
            //   image: "assets/img/foodIonic-ico.png",
            // }
        ];
        this.menu.swipeEnable(false);
        this.menu.enable(false);
        // this.testingFuncion();
        // this.walksubs = this.service.findRestaurantById().subscribe(data => {
        //   this.restaurant = data;
        // });
        // let something = this.service.findRestaurantById().subscribe();
        // console.log('the value is ' + something);
    }
    WalkthroughPage.prototype.ngOnInit = function () {
    };
    WalkthroughPage.prototype.ngAfterViewInit = function () {
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
            // map.addListener('click', event => {
            //   const selectedCoords = {
            //     lat: event.latLng.lat(),
            //     lng: event.latLng.lng()
            //   };
            //   this.modalCtrl.dismiss(selectedCoords);
            // });
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    WalkthroughPage.prototype.getGoogleMaps = function () {
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
    WalkthroughPage.prototype.testingFuncion = function () {
        var _this = this;
        this.service.testapi()
            .then(function (data) {
            _this.testvar = data;
            _this.testvar = _this.testvar.restaurants;
        });
    };
    WalkthroughPage.prototype.onSlideNext = function () {
        this.slides.slideNext(300);
    };
    WalkthroughPage.prototype.onSlidePrev = function () {
        this.slides.slidePrev(300);
    };
    WalkthroughPage.prototype.onLastSlide = function () {
        this.slides.slideTo(3, 300);
    };
    WalkthroughPage.prototype.openHomePage = function () {
        this.navCtrl.setRoot('page-home');
    };
    WalkthroughPage.prototype.openAuthPage = function () {
        this.navCtrl.setRoot('page-auth');
        // this.navCtrl.push('page-auth');
    };
    WalkthroughPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalkthroughPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], WalkthroughPage.prototype, "mapElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], WalkthroughPage.prototype, "slides", void 0);
    WalkthroughPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-walkthrough',template:/*ion-inline-start:"D:\Node App\Fyned App\Movil\foodionic_5\src\pages\walkthrough\walkthrough.html"*/'\n\n<ion-content class="primary-bg">\n	<ion-grid no-padding fixed>\n		<ion-row no-padding>\n			<ion-col>\n			  <ion-slides pager="true" dir="{{dir}}">\n			    <ion-slide *ngFor="let slide of slideList">\n			      <ion-toolbar fixed>\n			        <!-- <ion-buttons end>\n			          <button ion-button color="light" (click)="onLastSlide()">Skip</button>\n			        </ion-buttons> -->\n						</ion-toolbar>\n						<div style="margin: 0px 40px 40px;  padding-top: 20px; border-bottom: 2px solid #fff">\n							<img [src]="slide.image" class="slide-image">\n						</div>\n			      <h3 class="slide-title text-white" [innerHTML]="slide.title"></h3>\n						<p [innerHTML]="slide.description" class="text-white"></p>\n						<div padding>\n				      <button ion-button round block color="secondaryfyned" margin-top icon-end (click)="onSlideNext()">\n				      	Siguiente\n				      	<ion-icon name="arrow-round-forward" color="light"></ion-icon>\n							</button>\n							<div>\n								<p>Este es el mapa</p>\n								<div class="map" #map></div>\n							</div>\n			    	</div>\n			    </ion-slide>\n			    <ion-slide>\n			      <ion-toolbar>\n						</ion-toolbar>\n						<div style="margin: 0px 40px 40px;  padding-top: 20px; border-bottom: 2px solid #fff">\n							<img src="assets/img/logo.svg" class="slide-image">\n						</div>\n			      <h2 class="slide-title text-white">Inicie la busqueda de nuestros platos!</h2>\n\n			      <div padding style="margin-top: 96px">\n			        <button ion-button block round color="secondary" margin-top (click)="openAuthPage()">\n			          Entre / Registrese\n			        </button>\n			        <button ion-button block round color="dark" margin-top (click)="openHomePage()">\n			          Iniciar Busqueda\n			        </button>\n			      </div>\n			    </ion-slide>\n			  </ion-slides>\n\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\Node App\Fyned App\Movil\foodionic_5\src\pages\walkthrough\walkthrough.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_test_test__["a" /* TestProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], WalkthroughPage);
    return WalkthroughPage;
}());

//# sourceMappingURL=walkthrough.js.map

/***/ })

});
//# sourceMappingURL=1.js.map