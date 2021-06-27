import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {RezervacijaService} from "./rezervacija.service";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-rezervacija',
  templateUrl: './rezervacija.page.html',
  styleUrls: ['./rezervacija.page.scss'],
})
export class RezervacijaPage implements OnInit {



  IzborPozorista: string;
  disableBtn: boolean;
  datum = new Date().toISOString();
  constructor(private alertCtrl: AlertController) {
    if (this.IzborPozorista == null){
      this.disableBtn =true;
    }
    else this.disableBtn = null;
  }

 /* func(Izborpozorista){
    if (Izborpozorista != null || Izborpozorista != "")
    {
      this.disableBtn=false;
    }
  }*/

  promena(date) {
    console.log(date.detail.value);
    console.log(this.datum);
  }

  openAlert(){
    this.alertCtrl.create({
      header: 'Potvrda rezervacije',
      message: 'Da li zelite da potvrdite rezervaciju?',
      buttons: [
        {
          text: 'Da',
          handler: () => {
            console.log('Rezervacija je potvrdjena.');
            this.alertCtrl.create({
              message: 'Rezervacija je potvrdjena.',
              buttons: [
                {
                  text: 'Ok.'
                },
              ],
            }).then((alert) => alert.present());
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Rezervacija nije potvrdjena.');
          },
        },
      ],
    }).then((alert) => alert.present());
  }

  ngOnInit() {
  }

}
