import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

import {DishService} from '../../providers/dish-service-mock';
import {CartService} from '../../providers/cart-service-mock';
import { RestBackendProvider } from '../../providers/rest-backend';

@IonicPage({
	name: 'page-dish-detail',
	segment: 'dish/:id'
})

@Component({
    selector: 'page-dish-detail',
    templateUrl: 'dish-detail.html'
})
export class DishDetailPage {
	param: number;
  dish: any;
	qtd: number = 1;
	restDish: any;
	dishId: string;
	restDishId: string;
	restPicture1: string;
	restPicture2: string;
	restPicture3: string;
	restPrecio: number;
	restDetails: string;
	restTitle: string;
	imagesDishUrl: string;

  constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public toastCtrl: ToastController,
		public dishService: DishService,
		public cartService: CartService,
		public serviceBackend: RestBackendProvider,
		) {
		this.param = this.navParams.get('id');
		this.dishId = this.navParams.get('id');
		this.dish = this.dishService.getItem(this.param) ? this.dishService.getItem(this.param) : this.dishService.findAll()[0];
		this.findDish();
		this.imagesDishUrl = this.serviceBackend.getImgDishUrl();
	}

	findDish() {
		this.serviceBackend.getDishById(this.dishId)
		.then(data => {
			this.restDish = data;
			this.restDish = this.restDish.gig;
			this.restDishId = this.restDish._id;
			this.restPicture1 = this.restDish.picture1;
			this.restPicture2 = this.restDish.picture2;
			this.restPicture3 = this.restDish.picture3;
			this.restPrecio = this.restDish.price;
			this.restDetails = this.restDish.details;
			this.restTitle = this.restDish.title;
		});
	}

  // minus adult when click minus button
  minusQtd() {
    this.qtd--;
  }
  // plus adult when click plus button
  plusQtd() {
    this.qtd++;
  }

  addcart(dishId, qtd) {
		// console.log('el id es ' + dishId + 'la cantida es ' + qtd);

		if(this.serviceBackend.getIduserlogin() == '0') {
			this.navCtrl.push('page-auth');
			}else{
				this.serviceBackend.addDishToCart(dishId, qtd)
				.then(dish => {
					let toast = this.toastCtrl.create({
							message: 'Plato agregado al carro',
							cssClass: 'mytoast',
							duration: 2000
					});
					toast.present(toast);
				});
			}
  }

	favorite(dishId) {
		if(this.serviceBackend.getIduserlogin() == '0') {
			this.navCtrl.push('page-auth');
			}else{
					this.serviceBackend.addDishToFavorite(dishId);
					let toast = this.toastCtrl.create({
													message: 'Plato adicionado',
													cssClass: 'mytoast',
													duration: 2000
											});
											toast.present(toast);
			}
	}

  openCart() {
		if(this.serviceBackend.getIduserlogin() == '0') {
			this.navCtrl.push('page-auth');
			}else{
				this.navCtrl.push('page-cart');
			}
  }

}
