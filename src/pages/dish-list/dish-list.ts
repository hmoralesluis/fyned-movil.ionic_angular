import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {DishService} from '../../providers/dish-service-mock';
import { RestBackendProvider } from '../../providers/rest-backend';

@IonicPage({
	name: 'page-dish-list',
	segment: 'dish-list'
})

@Component({
    selector: 'page-dish-list',
    templateUrl: 'dish-list.html'
})
export class DishListPage {

    dishes: Array<any>;
    dishesRest: any;

    constructor(public navCtrl: NavController, 
        public dishService: DishService,
        public serviceBackend: RestBackendProvider) 
        {
        this.dishes = this.dishService.findAll();
        this.getDishesRest();
    }

    getDishesRest() {
        this.serviceBackend.findAllDishes()
        .then(data => {
            this.dishesRest = data;
            this.dishesRest = this.dishesRest.gigs;            
        });
    }

    openDishDetail(dishID) {
        this.navCtrl.push('page-dish-detail', {
	      'id': dishID
	    });
    }

}
