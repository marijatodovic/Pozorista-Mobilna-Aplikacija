import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-njuzleter',
  templateUrl: './njuzleter.component.html',
  styleUrls: ['./njuzleter.component.scss'],
})
export class NjuzleterComponent implements OnInit {
  @ViewChild('f', {static: true}) form: NgForm;
  @Input() title: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss();
  }
  onAddComment() {
    if(!this.form.valid){
      return;
    }
    this.modalCtrl.dismiss({
        commentData:
          {
            text: this.form.value['comment']
          }
    }, 'confirm');
  }
}
