import { Injectable } from '@angular/core';
import {Pozorista} from "./pozorista.model";
import {HttpClient} from "@angular/common/http";


interface commentData {
  text: string;
}

@Injectable({
  providedIn: 'root'
})

export class PozoristaService {

  pozorista: Pozorista[] = [
    {id: 'c1', text: 'Kom 1'},
    {id: 'c2', text: 'Kom2'}
  ];

  constructor(private http: HttpClient) { }

  getPoz(id: string) {
    return this.pozorista.find((p ) => p.id === id);
  }

  addCom(text: string){
    return this.http.post<{name: string}>('https://pozorista-47576-default-rtdb.europe-west1.firebasedatabase.app/pozorista.json', {text});
  }
  getCom() {
    return this.http.get<{[key: string] : commentData}>('https://pozorista-47576-default-rtdb.europe-west1.firebasedatabase.app/pozorista.json');
  }

}

