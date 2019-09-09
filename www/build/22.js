webpackJsonp([22],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__(746);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AuthPageModule = /** @class */ (function () {
    function AuthPageModule() {
    }
    AuthPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthPage */]
            ]
        })
    ], AuthPageModule);
    return AuthPageModule;
}());

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(163);
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




var AuthPage = /** @class */ (function () {
    function AuthPage(_fb, nav, forgotCtrl, menu, toastCtrl, serviceBackend, loadingCtrl) {
        this._fb = _fb;
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.serviceBackend = serviceBackend;
        this.loadingCtrl = loadingCtrl;
        this.auth = "login";
        this.isLoading = false;
        this.menu.swipeEnable(false);
        this.menu.enable(false);
    }
    AuthPage.prototype.ngOnInit = function () {
        this.onLoginForm = this._fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])]
        });
        this.onRegisterForm = this._fb.group({
            fullName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])]
        });
    };
    // go to register page
    // register() {
    //   this.nav.setRoot(RegisterPage);
    // }
    // login and go to home page
    AuthPage.prototype.login = function () {
        var _this = this;
        var spiner = this.loadingCtrl.create({
            // showBackdrop: true,
            enableBackdropDismiss: true,
            content: 'Accediendo',
            dismissOnPageChange: false,
        });
        spiner.present();
        this.serviceBackend.canLoginTheUser(this.onLoginForm.value.email, this.onLoginForm.value.password)
            .then(function (data) {
            var access = data;
            access = access.res;
            if (access != false) {
                _this.serviceBackend.logIn();
                _this.serviceBackend.setIduserlogin(access);
                spiner.dismiss();
                _this.nav.setRoot('page-home');
            }
            else {
                spiner.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Usuario o contraseña incorrecta',
                    duration: 5000,
                    position: 'top',
                    cssClass: 'dark-trans',
                    closeButtonText: 'OK',
                    showCloseButton: true
                });
                toast.present();
            }
        });
    };
    AuthPage.prototype.registrarse = function () {
        var _this = this;
        this.serviceBackend.checkUserByEmail(this.onRegisterForm.value.email)
            .then(function (data) {
            var checkdata = data;
            checkdata = checkdata.res;
            if (checkdata == true) {
                var toast = _this.toastCtrl.create({
                    message: 'El correo usado ya esta en existencia',
                    duration: 5000,
                    position: 'top',
                    cssClass: 'dark-trans',
                    closeButtonText: 'OK',
                    showCloseButton: true
                });
                toast.present();
            }
            else {
                _this.serviceBackend.addUser(_this.onRegisterForm.value.fullName, _this.onRegisterForm.value.email, _this.onRegisterForm.value.password)
                    .then(function (userdata) {
                    var userId = userdata;
                    userId = userId.res;
                    _this.serviceBackend.setIduserlogin(userId);
                    _this.serviceBackend.crearCarro(userId);
                    _this.serviceBackend.crearRestFavoritos(userId);
                    _this.serviceBackend.crearPlatosFavoritos(userId);
                    _this.serviceBackend.logIn();
                    _this.nav.setRoot('page-home');
                });
            }
        });
        // console.log(this.onRegisterForm.value.fullName);
    };
    AuthPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
            title: 'Forgot Password?',
            message: "Enter you email address to send a reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
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
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"D:\NodeApps\Fyned\Movil\foodionic_3\src\pages\auth\auth.html"*/'<!-- -->\n<ion-content padding class="primary-bg">\n	<div class="auth-content">\n\n		<!-- Logo -->\n		<div text-center>\n				<div style="margin: 0px 30px 40px;  padding-top: 20px; border-bottom: 2px solid #fff">\n						<img src="assets/img/logo.svg" class="slide-image">\n					</div>\n			<!-- <h2 ion-text class="text-secondary" no-margin>\n				<strong>Fyned</strong>Delivery\n			</h2> -->\n		</div>\n\n		<div padding-vertical>\n		  <ion-segment [(ngModel)]="auth" color="light">\n		    <ion-segment-button value="login">\n		      Entrar\n		    </ion-segment-button>\n		    <ion-segment-button value="register">\n		      Registrarse\n		    </ion-segment-button>\n		  </ion-segment>\n		</div>\n\n		<div [ngSwitch]="auth">\n			<!-- Login form -->\n			<div id="loginForm" *ngSwitchCase="\'login\'">\n				<form [formGroup]="onLoginForm" class="list-form">\n					<ion-item>\n						<ion-label floating>\n							<ion-icon name="mail" item-start class="text-white"></ion-icon>\n							Correo\n						</ion-label>\n						<ion-input type="email" formControlName="email"></ion-input>\n					</ion-item>\n					<p ion-text color="danger" class="text-12x has-error" *ngIf="onLoginForm.get(\'email\').touched && onLoginForm.get(\'email\').hasError(\'required\')">This field is required</p>\n\n					<ion-item>\n						<ion-label floating>\n							<ion-icon name="lock" item-start class="text-white"></ion-icon>\n							Contraseña\n						</ion-label>\n						<ion-input type="password" formControlName="password"></ion-input>\n					</ion-item>\n					<p ion-text color="danger" class="text-12x has-error" *ngIf="onLoginForm.get(\'password\').touched && onLoginForm.get(\'password\').hasError(\'required\')">This field is required</p>\n				</form>\n\n				<p text-right ion-text color="light" tappable (click)="forgotPass()"><strong>Olvido contraseña?</strong></p>\n\n				<div>\n					<button ion-button icon-start block color="secondary" (click)="login()" [disabled]="!onLoginForm.valid">\n						<ion-icon name="log-in"></ion-icon>\n						Entrar\n					</button>\n\n					<p text-center ion-text color="light">O acceder con:</p>\n\n					<ion-grid class="btn-group" fixed>\n						<ion-row>\n							<button ion-button icon-only block class="btn-facebook col col-4 col-md-3 col-lg-2">\n								<ion-icon name="logo-facebook"></ion-icon>\n							</button>\n							<button ion-button icon-only block class="btn-twitter col col-4 col-md-3 col-lg-2">\n								<ion-icon name="logo-twitter"></ion-icon>\n							</button>\n							<button ion-button icon-only block class="btn-gplus col col-4 col-md-3 col-lg-2">\n								<ion-icon name="logo-googleplus"></ion-icon>\n							</button>\n						</ion-row>\n					</ion-grid>\n\n				</div>\n			</div>\n\n			<div id="registerForm" *ngSwitchCase="\'register\'">\n		    <!-- Register form -->\n		    <form [formGroup]="onRegisterForm" class="list-form">\n		      <ion-item>\n		        <ion-label floating>\n		          <ion-icon name="person" item-start class="text-white"></ion-icon>\n		          Nombre\n		        </ion-label>\n		        <ion-input type="text" formControlName="fullName"></ion-input>\n		      </ion-item>\n		      <p ion-text color="danger" class="text-12x has-error" *ngIf="onRegisterForm.get(\'fullName\').touched && onRegisterForm.get(\'fullName\').hasError(\'required\')">Entre un valor</p>\n\n		      <ion-item>\n		        <ion-label floating>\n		          <ion-icon name="mail" item-start class="text-white"></ion-icon>\n		          Correo\n		        </ion-label>\n		        <ion-input type="email" formControlName="email"></ion-input>\n		      </ion-item>\n		      <p ion-text color="danger" class="text-12x has-error" *ngIf="onRegisterForm.get(\'email\').touched && onRegisterForm.get(\'email\').hasError(\'required\')">Entre un valor</p>\n\n		      <ion-item>\n		        <ion-label floating>\n		          <ion-icon name="lock" item-start class="text-white"></ion-icon>\n		          Contraseña\n		        </ion-label>\n		        <ion-input type="password" formControlName="password"></ion-input>\n		      </ion-item>\n		      <p ion-text color="danger" class="text-12x has-error" *ngIf="onRegisterForm.get(\'password\').touched && onRegisterForm.get(\'password\').hasError(\'required\')">This field is required</p>\n		    </form>\n\n		    <div margin-top>\n		      <button ion-button block color="secondary" (click)="registrarse()" [disabled]="!onRegisterForm.valid">\n		        Registrarse\n		      </button>\n\n		      <p text-center ion-text color="light">O acceda con:</p>\n\n		      <ion-grid class="btn-group" fixed>\n		        <ion-row>\n		          <button ion-button icon-only block class="btn-facebook col col-4 col-md-3 col-lg-2">\n		            <ion-icon name="logo-facebook"></ion-icon>\n		          </button>\n		          <button ion-button icon-only block class="btn-twitter col col-4 col-md-3 col-lg-2">\n		            <ion-icon name="logo-twitter"></ion-icon>\n		          </button>\n		          <button ion-button icon-only block class="btn-gplus col col-4 col-md-3 col-lg-2">\n		            <ion-icon name="logo-googleplus"></ion-icon>\n		          </button>\n		        </ion-row>\n		      </ion-grid>\n		    </div>\n		  </div>\n\n		</div>\n\n\n	</div>\n</ion-content>\n'/*ion-inline-end:"D:\NodeApps\Fyned\Movil\foodionic_3\src\pages\auth\auth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_backend__["a" /* RestBackendProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ })

});
//# sourceMappingURL=22.js.map