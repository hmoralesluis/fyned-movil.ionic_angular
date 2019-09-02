import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CartService } from '../../providers/cart-service-mock';
import { RestBackendProvider } from '../../providers/rest-backend';

@IonicPage({
	name: 'page-cart',
	segment: 'cart'
})

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})

export class CartPage {

	// orders: Array<any> = [];
  totalVal: number = 0;
  orderRest: any;
  itemsLength: number;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public cartService: CartService,
    public serviceBackend: RestBackendProvider,
    ) {
    // this.getOrders();
    this.getOrderRest();
  }

  getOrderRest() {
    this.serviceBackend.getCartByUserId()
    .then(data => {
        this.orderRest = data;
        this.totalVal = this.orderRest.cart.total;
        let aux = this.orderRest.cart.items.length;
        this.itemsLength = aux;
        this.orderRest = this.orderRest.cart.items;
    });
  }

  removeOrder (itemId:string) {
    this.serviceBackend.deleteItemFromCart(itemId)
    .then(() => {
      this.getOrderRest();
    })
    .catch(error => alert(JSON.stringify(error)))
  }

  // getOrders () {
  //   this.cartService.getOrders().then(orders => {
  //   	this.orders = orders
  //   	this.totalVal = 0;
  //   	this.orders.forEach((val, i) => {
  //   		this.totalVal = this.totalVal + (val.order.price * val.qtd)
  //   	});
  //   });
  // }

  // minus adult when click minus button
  minusQtd(itemId:string, qty: number) {    
    let aux = qty - 1;
    this.serviceBackend.modifyItemFromCartQty(itemId, aux)
    .then(() => {      
      this.getOrderRest();
    })    
    .catch(error => alert(JSON.stringify(error)));
  }

  // plus adult when click plus button
  plusQtd(itemId:string, qty: number) {
		let aux = qty + 1;
    this.serviceBackend.modifyItemFromCartQty(itemId, aux)
    .then(() => {      
      this.getOrderRest();
    })    
    .catch(error => alert(JSON.stringify(error)));
  }

  openCheckout() {
      this.navCtrl.push('page-checkout');
  }

}
