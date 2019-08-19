import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
    templateUrl: 'app.html'
})
export class foodIonicApp {
    @ViewChild(Nav) nav: Nav;

  	tabsPlacement: string = 'bottom';
  	tabsLayout: string = 'icon-top';

    rootPage: any = 'page-walkthrough';
    showMenu: boolean = true;

    homeItem: any;

    initialItem: any;

    messagesItem: any;

    settingsItem: any;

    appMenuItems: Array<MenuItem>;

    yourRestaurantMenuItems: Array<MenuItem>;

    accountMenuItems: Array<MenuItem>;

    helpMenuItems: Array<MenuItem>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();

        this.homeItem = { component: 'page-home' };
        this.messagesItem = { component: 'page-message-list'};


        this.appMenuItems = [
            {title: 'Restaurantes', component: 'page-restaurant-list', icon: 'home'},            
            {title: '- Cercanos', component: 'page-nearby', icon: 'compass'},
            {title: '- Por categorias', component: 'page-category', icon: 'albums'},
            {title: 'Platos', component: 'page-dish-list', icon: 'pizza'},
            {title: 'Ultimas ordenes', component: 'page-orders', icon: 'list-box'},
            {title: 'Carro', component: 'page-cart', icon: 'cart'},
			{title: 'Favorite Restaurantes Favoritos', component: 'page-favorite-list', icon: 'heart'},
			{title: 'Platos Favoritos', component: 'page-favorite-dish', icon: 'heart'}
        ];

        this.yourRestaurantMenuItems = [
            {title: 'Register Restaurant', component: 'page-your-restaurant', icon: 'clipboard'}
        ];


        this.accountMenuItems = [
            {title: 'Acceder', component: 'page-auth', icon: 'log-in'},
            {title: 'Mi Perfil', component: 'page-my-account', icon: 'contact'},
            {title: 'Salir', component: 'page-auth', icon: 'log-out'},
        ];

        this.helpMenuItems = [
            {title: 'Acerca', component: 'page-about', icon: 'information-circle'},
            {title: 'Contacto', component: 'page-support', icon: 'call'},
            {title: 'Configuracion', component: 'page-settings', icon: 'cog'},
            // {title: 'Walkthrough', component: 'page-walkthrough', icon: 'photos'}
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.overlaysWebView(false);
            this.splashScreen.hide();
        });

	    if (!this.platform.is('mobile')) {
	      this.tabsPlacement = 'top';
	      this.tabsLayout = 'icon-left';
	    }
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
