import { Component, OnInit } from '@angular/core';
import {AlertController, MenuController} from "@ionic/angular";

@Component({
  selector: 'app-madlenianum',
  templateUrl: './madlenianum.page.html',
  styleUrls: ['./madlenianum.page.scss'],
})
export class MadlenianumPage implements OnInit {

  constructor(private alertController: AlertController) { }



  ngOnInit() {
  }

  openAlert(){
    this.alertController.create({
      header: 'Sacuvaj predstavu',
      message: 'Da li zelite da sacuvate ovu predstavu?',
      buttons: [
        {
          text: 'Da',
          handler: () => {
            console.log('Predstava je sacuvana.');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Predstava nije sacuvana.');
          },
        },
      ],
    }).then((alert) => alert.present());
  }
}
