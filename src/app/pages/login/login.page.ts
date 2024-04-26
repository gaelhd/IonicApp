import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  user: string = '';
  password: string = '';
  loading!: any;

  constructor(
    private loginService: LoginService,
    private router: Router,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) { }

  async login() {
    // Muestra el spinner
    this.loading = await this.loadingController.create({
      message: ''
    });
    await this.loading.present();

    this.loginService.login(this.user, this.password).subscribe(
      (response) => {
        // Oculta el spinner
        this.loading.dismiss();
        this.router.navigate(['/home']);
        // Guarda usuario
        localStorage.setItem('currentUser', JSON.stringify({ user: this.user }));

      },
      async (error) => {
        // Oculta el spinner
        this.loading.dismiss();
        // console.error(error);

        // Muestra un popup con el mensaje de error
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Usuario o Contraseña incorrecta.',
          buttons: ['OK']
        });
        await alert.present();
      }
    );
  }

}
