import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.page.html',
  styleUrls: ['./registracija.page.scss'],
})
export class RegistracijaPage implements OnInit {

  registerForm: FormGroup;

  constructor(private authService: AuthService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(7)])
    });
  }

  onRegister(){
    this.loadingController.create({message: "Ucitavanje..."}).then((loadingEl) => {
      loadingEl.present();
      this.authService.register(this.registerForm.value).subscribe(resData =>{
        console.log("Registracija uspesna");
        console.log(resData);
        loadingEl.dismiss();
      });
    });

  }

}
