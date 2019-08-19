import { Component, ViewChild } from '@angular/core';
import { IonicPage, Slides, NavController, MenuController } from 'ionic-angular';

@IonicPage({
	name: 'page-walkthrough',
	segment: 'walkthrough',
	priority: 'high'
})

@Component({
  selector: 'page-walkthrough',
  templateUrl: 'walkthrough.html',
})
export class WalkthroughPage {
	@ViewChild(Slides) slides: Slides;
  showSkip = true;
  dir: string = 'ltr';

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

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.menu.swipeEnable(false);
    this.menu.enable(false);
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
