import { Component, ViewChild, AfterViewInit, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { IonicPage, Slides, NavController, MenuController } from 'ionic-angular';
import { TestProvider } from '../../providers/test/test';
import { Restaurant } from '../../models/restauran.model';
import { Subscription } from 'rxjs';


@IonicPage({
	name: 'page-walkthrough',
	segment: 'walkthrough',
	priority: 'high'
})

@Component({
  selector: 'page-walkthrough',
  templateUrl: 'walkthrough.html',
})
export class WalkthroughPage implements OnInit, AfterViewInit {
	@ViewChild('map') mapElementRef: ElementRef;
	@ViewChild(Slides) slides: Slides;
  showSkip = true;
  dir: string = 'ltr';
  restaurant: Restaurant;
	walksubs: Subscription;

	testvar: any;
	public map :any;

  slideList: Array<any> = [
    {
      title: "Que ofrecemos en <strong>Fyned</strong>?",
      description: "La ubicacion de nuestros restaurantes, la seleccion de sus magnificos platos y la entrega o recogida de estos platos a eleccion del usuario",
      image: "assets/img/logo.svg",
		}
		// ,
    // {
    //   title: "Why FoodIonic?",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.",
    //   image: "assets/img/foodIonic-ico.png",
    // },
    // {
    //   title: "Your delicious dish is coming!",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.",
    //   image: "assets/img/foodIonic-ico.png",
    // }
  ];

	constructor(
		public navCtrl: NavController,
		public menu: MenuController,
		public service: TestProvider,
		private renderer: Renderer2  )
		{
    this.menu.swipeEnable(false);
		this.menu.enable(false);
		// this.testingFuncion();

    // this.walksubs = this.service.findRestaurantById().subscribe(data => {
    //   this.restaurant = data;
    // });

    // let something = this.service.findRestaurantById().subscribe();
    // console.log('the value is ' + something);
	}

	ngOnInit() {
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

      })
      .catch(err => {
        console.log(err);
      });
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
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyB3P1U1KZYcRvql3VMXl2-g5GQlaK6AVlQ';
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

	testingFuncion() {
		this.service.testapi()
		.then(data => {
			this.testvar = data;
			this.testvar = this.testvar.restaurants;
		})
	}
  onSlideNext() {
    this.slides.slideNext(300)
  }

	onSlidePrev() {
    this.slides.slidePrev(300)
  }

  onLastSlide() {
  	this.slides.slideTo(3, 300)
  }

  openHomePage() {
  	this.navCtrl.setRoot('page-home');
  }

  openAuthPage() {
		this.navCtrl.setRoot('page-auth');
		// this.navCtrl.push('page-auth');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalkthroughPage');
  }

}
