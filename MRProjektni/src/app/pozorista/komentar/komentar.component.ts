import {Component, Input, OnInit} from '@angular/core';
import {Pozorista} from "../pozorista.model";
import {AlertController, ModalController} from "@ionic/angular";
import {PozoristaService} from "../pozorista.service";
import {element} from "protractor";
import {NjuzleterComponent} from "../njuzleter/njuzleter.component";


@Component({
  selector: 'app-komentar',
  templateUrl: './komentar.component.html',
  styleUrls: ['./komentar.component.scss'],
})
export class KomentarComponent implements OnInit {

  @Input() pozoriste: Pozorista = {id: 'c3', text: 'Kom3', userId: 'xxx'};
  constructor(private alertController: AlertController, private pozoristaService: PozoristaService, private modalCtrl: ModalController) { }
  komentari: Pozorista[];
  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Da li zelite da obrisete komentar?',
      buttons: [
        {
          text: 'Da',
          role: 'confirm',
          handler: () => {
            console.log('brisem');
            let id = this.pozoriste;
            this.pozoristaService.deleteCom(id);
            }
        },
        {
          text: 'Ne',
          role: 'cancel',
          handler: () => {
            // console.log('Rezervacija nije potvrdjena.');
          },
        },
      ],
    }).then((alert) => alert.present());
    /*await alert.present();
    this.komentari.forEach(element => {
      if(element.dose==='Both'){
        this.service.deleteVaccinated(element);
      }
    });*/
  }
  openEdit() {
    let comm: Pozorista;
    this.modalCtrl.create({

      component: NjuzleterComponent,
      componentProps: {title: 'Izmeni komentar'}
    }).then((modal) => {
      modal.present();
      return modal.onDidDismiss();
    }).then((resultData) => {
      if (resultData.role === 'confirm') {
        console.log(resultData);
        //this.komentari.forEach(element => {
          let poz = this.pozoriste;
          comm = new Pozorista(poz.id, resultData.data.commentData.text, poz.userId);
          this.pozoristaService.updateCom(comm);
          console.log(resultData.data.commentData.text);
      }
    });
  }

}
