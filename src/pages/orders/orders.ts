import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrdersService } from '../../providers/orders-service-mock';
import { RestBackendProvider } from '../../providers/rest-backend';

@IonicPage({
	name: 'page-orders',
	segment: 'orders'
})

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})

export class OrdersPage {

  lastOrders: Array<any> = [];
  orderrest: any;
	responseRest: any;
	imagesDishUrl: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public ordersService: OrdersService,
    public serviceBackend: RestBackendProvider) {
		this.getOrdersRest();
		this.imagesDishUrl = this.serviceBackend.getImgDishUrl();
  }

  getOrdersRest() {
    this.serviceBackend.getorderbyuser()
    .then(data => {
      this.responseRest = data;
      this.responseRest = this.responseRest.res;

      if(this.responseRest == true){
        this.orderrest = data;
        this.orderrest = this.orderrest.orders;
      }
    });
  }

  ionViewWillEnter() {
    this.getOrdersRest();
  }

}
