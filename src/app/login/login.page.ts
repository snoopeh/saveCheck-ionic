import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
//import { AuthService } from 'src/app/services/auth.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { API_CONFIG } from 'src/config/api.config';
import { AuthService } from 'src/services/domain/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  public wavesPosition: number = 0;
  private wavesDifference: number = 100;

  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;

  constructor(
    //private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public keyboard: Keyboard,
    private authService : AuthService,
    private router: Router,
    
  ) { }
  imageUrl: string = API_CONFIG.baseUrl;
  ngOnInit() { }

  segmentChanged(event: any) {
    if (event.detail.value === 'login') {
      this.slides.slidePrev();
    } else {
      this.slides.slideNext();
    }
  }

  async login() {
    await this.presentLoading();

    try {
      await this.authService.login(this.userLogin)
    } catch (error) {
      this.presentToast(error.error.error);
    } finally {
      this.loading.dismiss();
      this.router.navigate(['tabs/search'])
    }
  }

  // async login() {
  //   await this.presentLoading();
  //     await this.authService.login(this.userLogin)
  //     .then((result: any) => {
  //       this.presentToast('Usuário logado com sucesso. Token: ' + result.email);
  //       this.router.navigate(['tabs/search'])
  //     })
  //     .catch((error: any) => {
  //       this.presentToast('Erro ao efetuar login. Erro: ' + error.error.error);
  //     });

  //     this.loading.dismiss();
  // }

  async register() {
    await this.presentLoading();

    try {
      await this.authService.register(this.userRegister);
    } catch (error) {
      this.presentToast(error.error.error);
    } finally {
      this.loading.dismiss();
      this.router.navigate(['tabs/search'])
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
}