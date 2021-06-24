import {Component, Input, OnInit} from '@angular/core';
import {Pozorista} from "../pozorista.model";

@Component({
  selector: 'app-komentar',
  templateUrl: './komentar.component.html',
  styleUrls: ['./komentar.component.scss'],
})
export class KomentarComponent implements OnInit {

  @Input() pozoriste: Pozorista = {id: 'c3', text: 'Kom3'};
  constructor() { }

  ngOnInit() {}


}
