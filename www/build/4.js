webpackJsonp([4],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(762);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]
            ]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
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


var SettingsPage = /** @class */ (function () {
    function SettingsPage(nav) {
        this.nav = nav;
    }
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\NodeApps\Fyned\Movil\foodionic_3\src\pages\settings\settings.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <span ion-text>Configuracion</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="common-bg">\n\n	<ion-grid no-padding fixed>\n		<ion-row no-padding>\n			<ion-col>\n				<!-- User settings-->\n				<ion-item-group>\n					<ion-item-divider color="dark" class="bold">Configuracion de usuario</ion-item-divider>\n					<ion-item>\n						<ion-label>Idioma</ion-label>\n						<ion-select [(ngModel)]="language" cancelText="Cancel" okText="OK">\n							<ion-option value="en-US" selected="true">English (US)</ion-option>\n							<ion-option value="en-GB">English (UK)</ion-option>\n							<ion-option value="en-CA">English (CA)</ion-option>\n							<ion-option value="en-AU">English (AU)</ion-option>\n							<ion-option value="en-IN">English (IN)</ion-option>\n							<ion-option value="pt-BR">Portuguese (BR)</ion-option>\n							<ion-option value="pt-PT">Portuguese (PT)</ion-option>\n							<ion-option value="es-ES">Spanish (ES)</ion-option>\n							<ion-option value="es-AR">Spanish (AR)</ion-option>\n							<ion-option value="es-CO">Spanish (CO)</ion-option>\n							<ion-option value="es-CL">Spanish (CL)</ion-option>\n							<ion-option value="es-MX">Spanish (MX)</ion-option>\n							<ion-option value="zh-CN">Chinese (CN)</ion-option>\n							<ion-option value="zh-TW">Chinese (TW)</ion-option>\n						</ion-select>\n					</ion-item>\n					<ion-item>\n						<ion-label>Moneda</ion-label>\n						<ion-select [(ngModel)]="currency" cancelText="Cancel" okText="OK">\n							<ion-option value="USD" selected="true">U.S Dollar (US$)</ion-option>\n							<ion-option value="EUR">Euro (€)</ion-option>\n							<ion-option value="GBP">Pound (£)</ion-option>\n							<ion-option value="BRL">Brazilian Real (R$)</ion-option>\n							<ion-option value="CNY">Chinese Yuan</ion-option>\n						</ion-select>\n					</ion-item>\n					<ion-item>\n						<ion-label>Unidades</ion-label>\n						<ion-select [(ngModel)]="munits" cancelText="Cancel" okText="OK">\n							<ion-option value="M" selected="true">Foots (ft²)</ion-option>\n							<ion-option value="K">Meters (m²)</ion-option>\n						</ion-select>\n					</ion-item>\n					<ion-item>\n						<ion-label>Mensajes de perfil?</ion-label>\n						<ion-toggle checked="true"></ion-toggle>\n					</ion-item>\n				</ion-item-group>\n				<!-- App settings-->\n				<ion-item-group>\n					<ion-item-divider color="dark" class="bold">App Settings</ion-item-divider>\n					<ion-item>\n						<span>Limpiar datos privados</span>\n					</ion-item>\n					<ion-item>\n						<ion-label>Subir notificaciones?</ion-label>\n						<ion-toggle checked="false"></ion-toggle>\n					</ion-item>\n					<ion-item>\n						<span>Politicas privadas</span>\n					</ion-item>\n				</ion-item-group>\n\n				<!--sign out button-->\n				<!-- <button ion-button color="primary" full tappable (click)="logout()">LOG OUT</button> -->\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\NodeApps\Fyned\Movil\foodionic_3\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=4.js.map