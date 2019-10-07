import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, MenuController, ToastController, PopoverController, ModalController, ActionSheetController, ActionSheet } from 'ionic-angular';

import {RestaurantService} from '../../providers/restaurant-service-mock';
import { RestBackendProvider } from '../../providers/rest-backend';
// import { Plugins, Capacitor } from '@capacitor/core';

@IonicPage({
	name: 'page-home',
	segment: 'home',
	priority: 'high'
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  restaurants: Array<any>;
  searchKey: string = "";
  yourLocation: string = "Sin ubicación";
  restaurantsRest: any[] = [];
  largeRestaurantes: Number = 0;
	imagesRestUrl: string;
  haveCordenadas: Boolean = false;
  sysdistance: any;


  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public locationCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public service: RestaurantService,
		public serviceBackend: RestBackendProvider,
		private actionSheetCtrl: ActionSheetController) {
		this.menuCtrl.swipeEnable(true, 'authenticated');
		this.menuCtrl.enable(true);    
		this.haveCordenadas = this.serviceBackend.getHaveCordenadas();		
		this.imagesRestUrl = this.serviceBackend.getImgRestUrl();
  }

  openRestaurantListPage(proptype) {
  	this.navCtrl.push('page-restaurant-list', proptype);
  }

  openRestaurantFilterPage() {
    let modal = this.modalCtrl.create('page-restaurant-filter');
    modal.present();
  }

  openNearbyPage() {
    this.navCtrl.push('page-nearby');
  }

  openOrders() {
    this.navCtrl.push('page-orders');
  }

  openCart() {
    this.navCtrl.push('page-cart');
  }

	openRestaurantDetail(restaurant: any) {
  	this.navCtrl.push('page-restaurant-detail', {
			'id': restaurant._id
		});
	}

  openSettingsPage() {
  	this.navCtrl.push('page-settings');
  }

  openNotificationsPage() {
  	this.navCtrl.push('page-notifications');
  }

  openCategoryPage() {
    this.navCtrl.push('page-category');
  }

	onInput(event) {
	    this.service.findByName(this.searchKey)
	        .then(data => {
	            this.restaurants = data;
	        })
	        .catch(error => alert(JSON.stringify(error)));
	}

	onCancel(event) {
	    this.findAll();
	}

	findAll() {
	    this.service.findAll()
	        .then(data => this.restaurants = data)
	        .catch(error => alert(error));
  }

  findSysDistance() {
    this.serviceBackend.getsysdistance()
    .then(data =>{
      this.sysdistance = data;
      this.sysdistance = this.sysdistance.distance;
    })
    .catch();
  }

  findAllRest(){
    this.restaurantsRest = [];
		if(this.serviceBackend.getHaveCordenadas()){
			this.serviceBackend.findAllRestaurants()
							.then(
									data => {
                      let temporal: any;
											temporal = data;
                      temporal = temporal.restaurants;	
                      let largo = temporal.length;
                      for(let i = 0; i < largo; i++){
                        if(this.isInDistance(temporal[i].latitude, temporal[i].longitude)){
                          this.restaurantsRest.push(temporal[i]);
                        }                        
                      }                      
                      this.largeRestaurantes = this.restaurantsRest.length;					
									}
							)
							.catch(error => alert(error));
		}
  }
  
  private isInDistance(lat: number, lon: number) {
        let datax = lat - this.serviceBackend.getLatitude();
				let datay = lon - this.serviceBackend.getLongitude();
				datax = Math.pow(datax, 2);
				datay = Math.pow(datay, 2);
				let datamix = datax + datay;
        let dataend = Math.sqrt(datamix);	
        console.log('la distancia es ' + dataend); 
        if(dataend <= this.sysdistance)      
          return true;
        return false;  
  }

	private locateUser() {

    		this.serviceBackend.setLatitude(11);
				this.serviceBackend.setLongitude(11)
				this.serviceBackend.setHaveCordenadas(true);
				this.haveCordenadas = true;
        this.findAllRest();
        this.yourLocation = 'Autolocalizado dir';    


    // if (!Capacitor.isPluginAvailable('Geolocation')) {
    //   console.log('no tenemos a capacitor disponible');
    //   return;
    // }
    // // this.isLoading = true;
    // Plugins.Geolocation.getCurrentPosition()
    //   .then(geoPosition => {
		// 		this.serviceBackend.setLatitude(geoPosition.coords.latitude);
		// 		this.serviceBackend.setLongitude(geoPosition.coords.longitude)
		// 		this.serviceBackend.setHaveCordenadas(true);
		// 		this.haveCordenadas = true;
		// 		this.findAllRest();
		// 		// this.isLoading = false;
		// 		return;
    //   })
    //   .catch(err => {
    //     // this.isLoading = false;
		// 		// this.showErrorAlert();
		// 		console.log('la funcion de la geolocalizacion dio un error');
		// 		return;
    //   });
  }

  mapLocation() {
    let modalmap = this.modalCtrl.create('page-modal-map');
    modalmap.present();
    
    // let changeLocation = this.locationCtrl.create({
    //   title: 'Change Location',
    //   message: "Type your Address to change restaurant list in that area.",
    //   inputs: [
    //     {
    //       name: 'location',
    //       placeholder: 'Enter your new Location',
    //       type: 'text'
    //     },
    //   ],
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       handler: data => {
    //         console.log('Cancel clicked');
    //       }
    //     },
    //     {
    //       text: 'Change',
    //       handler: data => {
    //         console.log('Change clicked', data);
    //         this.yourLocation = data.location;
    //         let toast = this.toastCtrl.create({
    //           message: 'Location was change successfully',
    //           duration: 3000,
    //           position: 'top',
    //           closeButtonText: 'OK',
    //           showCloseButton: true
    //         });
    //         toast.present();
    //       }
    //     }
    //   ]
    // });
    // changeLocation.present();
  }

  alertLocation() {

		let actionSheet: ActionSheet = this.actionSheetCtrl.create({
			title: 'Location',
			buttons: [
					{
							text: 'Auto-localizacion',
							handler: () => this.locateUser()
					},
					{
							text: 'Desde el mapa',
							handler: () => this.mapLocation()
					},
					{
							text: 'Cancel',
							role: 'cancel',
							handler: () => console.log('cancel share')
					}
			]
	});

	actionSheet.present();    
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create('page-notifications');
    popover.present({
      ev: myEvent
    });
  }

  ionViewWillEnter() {    
      this.navCtrl.canSwipeBack();
      this.findSysDistance();
      this.haveCordenadas = this.serviceBackend.getHaveCordenadas();
      this.findAllRest();
  }

}
