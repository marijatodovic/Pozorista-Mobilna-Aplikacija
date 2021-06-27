import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {NjuzleterComponent} from "./njuzleter/njuzleter.component";
import {Pozorista} from "./pozorista.model";
import {PozoristaService} from "./pozorista.service";
import {KomentarComponent} from "./komentar/komentar.component";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-pozorista',
  templateUrl: './pozorista.page.html',
  styleUrls: ['./pozorista.page.scss'],
})
export class PozoristaPage implements OnInit, OnDestroy {

  pozorista: Pozorista[];
  private comSub; Subscription;
  isEdit: boolean;
  constructor(private modalCtrl: ModalController, private pozService: PozoristaService, private route: ActivatedRoute) {
    //this.pozorista = this.pozService.pozorista;
    this.route.params.subscribe((data: any) => {
      if(data.type == 'add') {
        this.isEdit = false;
      } else {
        this.isEdit = true;
      }
    })
  }

  ionViewWillEnter(){
    this.pozService.getCom().subscribe((comments) => {
     // this.pozorista = comments;
    })
  }

  ngOnInit() {
    this.comSub = this.pozService.Comm.subscribe((comments) => {
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
        this.pozService.addCom(resultData.data.commentData.text).subscribe((comments) => {
          //this.pozorista = comments;
        });
      }
    });
  }

  /*DelKom() {
    this.modalCtrl.create({
      component: KomentarComponent,
      componentProps: {title: 'Obrisi komentar'}
    }).then((modal) => {
      modal.present();
      return modal.onDidDismiss();
    }).then((resultData) => {
      if (resultData.role === 'confirm') {
        console.log(resultData);
        this.pozService.deleteCom(resultData.data.commentData);
          //this.pozorista = comments;);
      }
    });
  }*/
  ngOnDestroy() {
    if(this.comSub)
      this.comSub.unsubscribe();
  }
}
