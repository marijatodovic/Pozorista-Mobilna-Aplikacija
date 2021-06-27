import { Component, OnInit } from '@angular/core';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-atelje',
  templateUrl: './atelje.page.html',
  styleUrls: ['./atelje.page.scss'],
})
export class AteljePage implements OnInit {

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
