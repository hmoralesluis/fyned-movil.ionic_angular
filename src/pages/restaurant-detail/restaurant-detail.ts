import {Component} from '@angular/core';
import {IonicPage, ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';

import {RestaurantService} from '../../providers/restaurant-service-mock';
import {DishService} from '../../providers/dish-service-mock';
import {CartService} from '../../providers/cart-service-mock';
import { RestBackendProvider } from '../../providers/rest-backend';

@IonicPage({
	name: 'page-restaurant-detail',
	segment: 'restaurant/:id'
})

@Component({
    selector: 'page-restaurant-detail',
    templateUrl: 'restaurant-detail.html'
})
export class RestaurantDetailPage {
	param: any;

    restaurant: any;
    restaurantopts: String = 'menu';
	dishes: Array<any>;
	//-- Datos del restaurante --//
    restanddishes: any;
    restRestaurant: any;
    restId: string;
    restDescription: string;
    restLabel: string;
    restDirection: string;
    restName: string;
    restPicture1: string;
    restPicture2: string;
	restPicture3: string;

	//-----Datos de los platos ---//
	restDishes: any;
	imagesRestUrl: string;
	imagesDishUrl: string;

    constructor(
        public actionSheetCtrl: ActionSheetController,
        public navCtrl: NavController,
        public navParams: NavParams,
        public cartService: CartService,
        public restaurantService: RestaurantService,
        public dishService: DishService,
        public toastCtrl: ToastController,
        public serviceBackend: RestBackendProvider,
        ) {
		this.param = this.navParams.get('id');
		this.restaurant = this.restaurantService.getItem(this.param) ? this.restaurantService.getItem(this.param) : this.restaurantService.getRestaurants()[0];
        this.dishes = this.dishService.findAll();
		this.findAll();
		this.imagesRestUrl = this.serviceBackend.getImgRestUrl();
		this.imagesDishUrl = this.serviceBackend.getImgDishUrl();
    }

    findAll() {
        this.serviceBackend.getRestAndPlatosByRestaurantId(this.param)
        .then(data => {
            this.restanddishes = data;
            this.restRestaurant = this.restanddishes.restaurant;
			this.restId = this.restRestaurant._id;
			this.restLabel = this.restRestaurant.label;
			this.restPicture1 = this.restRestaurant.picture1;
			this.restPicture2 = this.restRestaurant.picture2;
			this.restPicture3 = this.restRestaurant.picture3;
			this.restName = this.restRestaurant.name;
            this.restDishes = this.restanddishes.gigs;

        });

    }

    openDishDetail(dish) {
      this.navCtrl.push('page-dish-detail', {
				'id': dish._id
			});
    }

    favorite(restaurantId) {
        if(this.serviceBackend.getIduserlogin() == '0') {
            this.navCtrl.push('page-auth');
        }else{
            this.serviceBackend.addRestaurantToFavorite(restaurantId);
            let toast = this.toastCtrl.create({
                            message: 'Restaurante adicionado',
                            cssClass: 'mytoast',
                            duration: 2000
                        });
                        toast.present(toast);
        }
    }

    share(restaurant) {
        let actionSheet: ActionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Twitter',
                    handler: () => console.log('share via twitter')
                },
                {
                    text: 'Facebook',
                    handler: () => console.log('share via facebook')
                },
                {
                    text: 'Email',
                    handler: () => console.log('share via email')
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => console.log('cancel share')
                }
            ]
        });

        actionSheet.present();
    }

	openCart() {
		this.navCtrl.push('page-cart');
	}

}
