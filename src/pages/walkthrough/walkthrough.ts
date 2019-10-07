import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, Slides, NavController, MenuController, ActionSheetController, ActionSheet } from 'ionic-angular';
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
export class WalkthroughPage implements OnInit {
	
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
		private actionSheetCtrl: ActionSheetController,
		)
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
