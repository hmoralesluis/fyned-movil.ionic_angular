import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {RestaurantService} from '../../providers/restaurant-service-mock';
import { RestBackendProvider } from '../../providers/rest-backend';

@IonicPage({
	name: 'page-favorite-list',
	segment: 'favorites'
})

@Component({
    selector: 'page-favorite-list',
    templateUrl: 'favorite-list.html'
})

export class FavoriteListPage {

    // favorites: Array<any> = [];
    favoritesRest: any;
    private itemsQty: number = 0;

    constructor(public navCtrl: NavController, 
        public service: RestaurantService,
        public serviceBackend: RestBackendProvider) {            
        // this.getFavorites();
        this.getfavoritesRest();
        // console.log(this.favorites);
    }

    getfavoritesRest() {
        this.serviceBackend.getFavoriteRestaurantByUserId()
        .then(data =>{
            this.favoritesRest = data;
            this.favoritesRest = this.favoritesRest.lovedrest;
            let aux = this.favoritesRest.items.length;
            this.itemsQty = aux;
            this.favoritesRest = this.favoritesRest.items;                                   
        });
    }

    itemTapped(favorite) {
		this.navCtrl.push('page-restaurant-detail', {
			'id': favorite.item
		});
    }

    deleteItem(favorite) {
        
        this.serviceBackend.delFavoriteRestaurantByUserId(favorite._id)
        .then(data => {
            this.getfavoritesRest();
        });
    }

    // getFavorites() {
    //     this.service.getFavorites()
    //         .then(data => this.favorites = data);
    // }

}
