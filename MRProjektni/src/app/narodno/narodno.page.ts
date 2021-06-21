import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-narodno',
  templateUrl: './narodno.page.html',
  styleUrls: ['./narodno.page.scss'],
})
export class NarodnoPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  openMenu() {
    this.menuCtrl.open();
  }
  ngOnInit() {
  }

}
