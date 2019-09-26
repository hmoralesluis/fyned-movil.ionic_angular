import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {DishService} from '../../providers/dish-service-mock';
import { RestBackendProvider } from '../../providers/rest-backend';

@IonicPage({
	name: 'page-favorite-dish',
	segment: 'favoritedish'
})

@Component({
    selector: 'page-favorite-dish',
    templateUrl: 'favorite-dish.html'
})

export class FavoriteDishPage {

    // favorites: Array<any> = [];
    favoritesRest: any;
	private itemsQty: number = 0;
	imagesDishUrl: string;

    constructor(public navCtrl: NavController,
        public service: DishService,
        public serviceBackend: RestBackendProvider,
        ) {
        // this.getFavorites();
		this.getfavoritesRest();
		this.imagesDishUrl = this.serviceBackend.getImgDishUrl();

    }

    getfavoritesRest() {
        this.serviceBackend.getFavoriteDishtByUserId()
        .then(data =>{
            this.favoritesRest = data;
            this.favoritesRest = this.favoritesRest.lovedgig;
            let aux = this.favoritesRest.items.length;
            this.itemsQty = aux;
            this.favoritesRest = this.favoritesRest.items;
        })
        .catch(error => alert(JSON.stringify(error)));
    }

    itemTapped(favorite) {
		this.navCtrl.push('page-dish-detail', {
			'id': favorite.item
		});
    }

    deleteItem(favorite) {
        this.serviceBackend.delFavoritedishByUserId(favorite._id)
        .then(data => {
            this.getfavoritesRest();
        })
        .catch(error => alert(JSON.stringify(error)));
    }

    // getFavorites() {
    //     this.service.getFavorites()
    //         .then(data => this.favorites = data);
    // }

}
