import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, LoadingController, ToastController} from "ionic-angular";
import {OrdersService} from '../../providers/orders-service-mock';
import {CartService} from '../../providers/cart-service-mock';
import { RestBackendProvider } from "../../providers/rest-backend";

@IonicPage({
	name: 'page-checkout',
	segment: 'checkout'
})

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html'
})
export class CheckoutPage {

  checkoutData: any;
  paymethods: string = 'creditcard';
  totalVal: number = 0;
  orderNumber: number = Math.floor(Math.random() * 10000);  
  orderRest: any;
  itemsLength: number;

  constructor(public nav: NavController, 
    public navParams: NavParams, 
    public ordersService: OrdersService, 
    public cartService: CartService, 
    public loadingCtrl: LoadingController, 
    public toastCtrl: ToastController,
    public serviceBackend: RestBackendProvider,
    ) 
    {
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

  // process send button
  send() {
    let loader = this.loadingCtrl.create({
      content: "Espere por favor..."
    });
    // show message
    let toast = this.toastCtrl.create({
      showCloseButton: true,
      cssClass: 'profile-bg',
      message: 'Su orden ha sido creada!',
      duration: 1000,
      position: 'bottom'
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
      toast.present();
      this.serviceBackend.createorderandcleancart();      
      // this.ordersService.saveOrder(this.checkoutData, this.totalVal, this.orderNumber).then(data => {
      // 	toast.present();
      // 	this.cartService.cleanCart();
      // })
      // back to home page
      // this.nav.setRoot('page-home');
    }, 3000);
    this.nav.setRoot('page-home');
  }
}
