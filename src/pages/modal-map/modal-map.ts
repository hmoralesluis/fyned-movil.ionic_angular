import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestBackendProvider } from '../../providers/rest-backend';

/**
 * Generated class for the ModalMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'page-modal-map',
	segment: 'modal-map'
})
@Component({
  selector: 'page-modal-map',
  templateUrl: 'modal-map.html',
})
export class ModalMapPage {
  @ViewChild('map') mapElementRef: ElementRef;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private renderer: Renderer2,
    public serviceBackend: RestBackendProvider,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalMapPage');
  }

  closeModal() {
    this.navCtrl.pop();
  }


  ngAfterViewInit() {
		this.getGoogleMaps()
      .then(googleMaps => {
        const mapEl = this.mapElementRef.nativeElement;
        const map = new googleMaps.Map(mapEl, {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 16
        });

        googleMaps.event.addListenerOnce(map, 'idle', () => {
          this.renderer.addClass(mapEl, 'visible');
        });

        map.addListener('click', event => {
          this.serviceBackend.setLatitude(event.latLng.lat());
          this.serviceBackend.setLongitude(event.latLng.lng());
          this.serviceBackend.setHaveCordenadas(true);
          this.navCtrl.setRoot('page-home');
        });
      })
      .catch(err => {
        console.log(err);
      });
  }	
  
  selectPruebaOffline() {
    this.serviceBackend.setLatitude(19);
    this.serviceBackend.setLongitude(19);
    this.serviceBackend.setHaveCordenadas(true);
    this.navCtrl.setRoot('page-home');
    // this.navCtrl.pop();
  }

  private getGoogleMaps(): Promise<any> {
    const win = window as any;
    const googleModule = win.google
    if (googleModule && googleModule.maps) {
      return Promise.resolve(googleModule.maps);
    }
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src =
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyC9xndXu6gNfgqDxxEGwuRzUxAT-QqfWXM';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = () => {
        const loadedGoogleModule = win.google;
        if (loadedGoogleModule && loadedGoogleModule.maps) {
          resolve(loadedGoogleModule.maps);
        } else {
          reject('Google maps SDK not available.');
        }
      };
    });
  }
}
