import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-izmeni',
  templateUrl: './izmeni.component.html',
  styleUrls: ['./izmeni.component.scss'],
})
export class IzmeniComponent implements OnInit {
  @ViewChild('f', {static: true}) form: NgForm;
  @Input() title: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss();
  }
  onEditComment() {
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
