import { Component, OnInit } from '@angular/core';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-zvezdara',
  templateUrl: './zvezdara.page.html',
  styleUrls: ['./zvezdara.page.scss'],
})
export class ZvezdaraPage implements OnInit {

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
