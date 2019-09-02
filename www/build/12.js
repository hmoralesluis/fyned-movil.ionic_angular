webpackJsonp([12],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDetailPageModule", function() { return MessageDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_detail__ = __webpack_require__(752);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessageDetailPageModule = /** @class */ (function () {
    function MessageDetailPageModule() {
    }
    MessageDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__message_detail__["a" /* MessageDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__message_detail__["a" /* MessageDetailPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__message_detail__["a" /* MessageDetailPage */]
            ]
        })
    ], MessageDetailPageModule);
    return MessageDetailPageModule;
}());

//# sourceMappingURL=message-detail.module.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_message_service_mock__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageDetailPage = /** @class */ (function () {
    function MessageDetailPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.param = this.navParams.get('id');
        this.message = this.service.getItem(this.param) ? this.service.getItem(this.param) : this.service.getMessages()[0];
    }
    MessageDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message-detail',template:/*ion-inline-start:"D:\Node App\Fyned App\Movil\foodionic_3\src\pages\message-detail\message-detail.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <span ion-text>Mensaje</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n	<ion-grid no-padding fixed>\n		<ion-row no-padding>\n			<ion-col>\n				<div class="message-header profiles-bg" padding>\n					<h5 ion-text color="light" class="fw700">{{message.title}}</h5>\n					<p ion-text no-margin color="light">{{message.date | date: \'MM/dd/yyyy\'}} ∙ by {{message.senderName}}</p>\n				</div>\n\n				<div padding-horizontal>\n					<p>\n						{{message.message}}\n					</p>\n				</div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"D:\Node App\Fyned App\Movil\foodionic_3\src\pages\message-detail\message-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_message_service_mock__["a" /* MessageService */]])
    ], MessageDetailPage);
    return MessageDetailPage;
}());

//# sourceMappingURL=message-detail.js.map

/***/ })

});
//# sourceMappingURL=12.js.map