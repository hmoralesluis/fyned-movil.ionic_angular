import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IonicPage, NavController, AlertController, ToastController, MenuController, LoadingController } from 'ionic-angular';
import { RestBackendProvider } from '../../providers/rest-backend';

@IonicPage({
	name: 'page-auth',
	segment: 'auth',
	priority: 'high'
})

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html'
})
export class AuthPage implements OnInit {
  public onLoginForm: FormGroup;
  public onRegisterForm: FormGroup;
  auth: string = "login";
  private isLoading = false;

  constructor(
    private _fb: FormBuilder, 
    public nav: NavController, 
    public forgotCtrl: AlertController, 
    public menu: MenuController, 
    public toastCtrl: ToastController,
    private serviceBackend: RestBackendProvider,
    private loadingCtrl: LoadingController,
    ) {
		this.menu.swipeEnable(false);
		this.menu.enable(false);
  }

  ngOnInit() {
    this.onLoginForm = this._fb.group({
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });

    this.onRegisterForm = this._fb.group({
      fullName: ['', Validators.compose([
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  // go to register page
  // register() {
  //   this.nav.setRoot(RegisterPage);
  // }

  // login and go to home page
  login() {

    let spiner = this.loadingCtrl.create({
      // showBackdrop: true,
      enableBackdropDismiss: true,
      content: 'Accediendo',
      dismissOnPageChange: false,
    });
    spiner.present();
    
    this.serviceBackend.canLoginTheUser(this.onLoginForm.value.email, this.onLoginForm.value.password)
    .then(data => {
      let access: any = data;
      access = access.res;      
      if(access != false){
        this.serviceBackend.logIn();        
        this.serviceBackend.setIduserlogin(access);        
        spiner.dismiss();
        this.nav.setRoot('page-home');              
      }else{
        spiner.dismiss();
        let toast = this.toastCtrl.create({
          message: 'Usuario o contraseña incorrecta',
          duration: 5000,
          position: 'top',
          cssClass: 'dark-trans',
          closeButtonText: 'OK',
          showCloseButton: true
        });
        toast.present();
      }
    });
  }

  registrarse(){
    this.serviceBackend.checkUserByEmail(this.onRegisterForm.value.email)
    .then(data => {
      let checkdata: any = data;
      checkdata = checkdata.res;      
        if(checkdata == true){
          let toast = this.toastCtrl.create({
            message: 'El correo usado ya esta en existencia',
            duration: 5000,
            position: 'top',
            cssClass: 'dark-trans',
            closeButtonText: 'OK',
            showCloseButton: true
          });
          toast.present();
        }else{
          this.serviceBackend.addUser(this.onRegisterForm.value.fullName, this.onRegisterForm.value.email, this.onRegisterForm.value.password)
          .then(userdata => {
            let userId: any = userdata;
            userId = userId.res;
            this.serviceBackend.setIduserlogin(userId);
            this.serviceBackend.crearCarro(userId);
            this.serviceBackend.crearRestFavoritos(userId);
            this.serviceBackend.crearPlatosFavoritos(userId); 
            this.serviceBackend.logIn();
            this.nav.setRoot('page-home');           
          });
        }
    });
      // console.log(this.onRegisterForm.value.fullName);
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
