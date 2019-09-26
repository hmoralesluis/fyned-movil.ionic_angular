import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {DishService} from '../../providers/dish-service-mock';
import { RestBackendProvider } from '../../providers/rest-backend';

@IonicPage({
	name: 'page-sugerencia',
	segment: 'sugerencia'
})
@Component({
  selector: 'page-sugerencia',
  templateUrl: 'sugerencia.html',
})
export class SugerenciaPage {

  dishes: Array<any>;
		dishesRest: any;
		imagesDishUrl: string;

    constructor(public navCtrl: NavController,
        public dishService: DishService,
        public serviceBackend: RestBackendProvider)
        {
        this.dishes = this.dishService.findAll();
				this.getDishesRest();
				this.imagesDishUrl = this.serviceBackend.getImgDishUrl();
    }

    getDishesRest() {
        this.serviceBackend.findSugerenciaDishes()
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
