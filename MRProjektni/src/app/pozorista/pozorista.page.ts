import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {NjuzleterComponent} from "./njuzleter/njuzleter.component";
import {Pozorista} from "./pozorista.model";
import {PozoristaService} from "./pozorista.service";


@Component({
  selector: 'app-pozorista',
  templateUrl: './pozorista.page.html',
  styleUrls: ['./pozorista.page.scss'],
})
export class PozoristaPage implements OnInit {

  pozorista: Pozorista[];

  constructor(private modalCtrl: ModalController, private pozService: PozoristaService) {
    this.pozorista = this.pozService.pozorista;
  }

  ngOnInit() {
    this.pozService.getCom().subscribe((commentData) => {
      console.log(commentData);
      const comments: Pozorista[] = [];

      for (const key in commentData) {
        if(commentData.hasOwnProperty(key)) {
          comments.push({
            id: key,
            text: commentData[key].text
          });
        }
      }
      this.pozorista = comments;
    });
  }


  openModal() {
    this.modalCtrl.create({
      component: NjuzleterComponent,
      componentProps: {title: 'Dodaj komentar'}
    }).then((modal) => {
      modal.present();
      return modal.onDidDismiss();
    }).then((resultData) => {
      if (resultData.role === 'confirm') {
        console.log(resultData);
        this.pozService.addCom(resultData.data.commentData.text).subscribe((pozorista) => {

        });
      }
    });
  }
}
