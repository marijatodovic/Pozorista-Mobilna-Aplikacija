import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-madlenianum',
  templateUrl: './madlenianum.page.html',
  styleUrls: ['./madlenianum.page.scss'],
})
export class MadlenianumPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  openMenu() {
    this.menuCtrl.open();
  }
  ngOnInit() {
  }

}
