import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {CategoryService} from '../../providers/category-service-mock';
import { RestBackendProvider } from '../../providers/rest-backend';

@IonicPage({
	name: 'page-category',
	segment: 'category'
})

@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

	categories: Array<any>;
	catergoriesRest: any;
	imagesCatUrl: string;

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public service: CategoryService,
		public serviceBackend: RestBackendProvider) {
		this.findAll();
		this.findAllRest();
		this.imagesCatUrl = this.serviceBackend.getImgCatUrl();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
	}

	findAllRest() {
		this.serviceBackend.getcategories()
		.then(data => {
			this.catergoriesRest = data;
			this.catergoriesRest = this.catergoriesRest.categories;
		});
	}

	findAll() {
	    this.service.findAll()
	        .then(data => this.categories = data)
	        .catch(error => alert(error));
	}

  openRestaurantListPage(proptype) {
  	this.navCtrl.push('page-restaurant-list', {'proptype': proptype});
  }

}
