import {Component} from '@angular/core';
import {IonicPage, Config, NavController, NavParams, ToastController, ModalController} from 'ionic-angular';
import {RestaurantService} from '../../providers/restaurant-service-mock';
import { RestBackendProvider } from '../../providers/rest-backend';
// import { SegmentChangeEventDetail } from '@ionic/co

@IonicPage({
	name: 'page-restaurant-list',
	segment: 'restaurant-list'
})

@Component({
    selector: 'page-restaurant-list',
    templateUrl: 'restaurant-list.html'
})
export class RestaurantListPage {

    restaurants: Array<any>;
    searchKey: string = "";
    viewMode: string = "list";
	proptype: string;
    label: string = "";
    estado: string = "";
    from: string;
	lat: number = 42.35663;
    lng: number = -71.11095;
    restaurantsRest: any;
	catergoriesRest: any;
	imagesRestUrl: string;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public service: RestaurantService,
        public toastCtrl: ToastController,
        public modalCtrl: ModalController,
        public config: Config,
        public serviceBackend: RestBackendProvider,
        )
        {
            console.log('el id es 0' +  this.serviceBackend.getIduserlogin());
        this.findAll();
        this.proptype = this.navParams.get('proptype') || "";
		this.from = this.navParams.get('from') || "";
		this.imagesRestUrl = this.serviceBackend.getImgRestUrl();
        // console.log(this.proptype);
    }

    openFilterModal() {
      let modal = this.modalCtrl.create('page-restaurant-filter');
      modal.present();
    }

    openRestaurantDetail(restaurant: any) {
  		this.navCtrl.push('page-restaurant-detail', {
			'id': restaurant._id
		});
    }

    favorite(restaurant) {

        if(this.serviceBackend.getIduserlogin() == '0') {
            this.navCtrl.push('page-auth');
        }else{
            this.serviceBackend.addRestaurantToFavorite(restaurant._id);
            let toast = this.toastCtrl.create({
                            message: 'Restaurante adicionado',
                            cssClass: 'mytoast',
                            duration: 2000
                        });
                        toast.present(toast);
        }
    }

    onInput(event) {
        this.service.findByName(this.searchKey)
            .then(data => {
                this.restaurants = data;
            })
            .catch(error => alert(JSON.stringify(error)));
    }

    // onFilterUpdate(event) {
    //     console.log(event.detail.value);
    //     // if(event.detail.value == 'principal')
    //     //   this.details = false;
    //     // else
    //     //   this.details = true;
    //   }

    onCancel(event) {
        this.findAll();
    }

    findAll() {
            this.serviceBackend.findAllRestaurants()
            .then(
                data => {
                    this.restaurantsRest = data;
                    this.restaurantsRest = this.restaurantsRest.restaurants;
                }
            )
            .catch(error => alert(error));

            this.serviceBackend.getcategories()
		.then(data => {
			this.catergoriesRest = data;
			this.catergoriesRest = this.catergoriesRest.categories;
		});


    }

}
