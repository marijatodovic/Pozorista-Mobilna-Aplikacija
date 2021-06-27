import { Injectable } from '@angular/core';
import {Pozorista} from "./pozorista.model";
import {HttpClient} from "@angular/common/http";
import {map, switchMap, take, tap} from "rxjs/operators";
import {BehaviorSubject} from 'rxjs';
import {AuthService} from "../auth/auth.service";


interface commentData {
  text: string;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})

export class PozoristaService {

  private _comments = new BehaviorSubject<Pozorista[]>([]);

  Starapozorista: Pozorista[] = [
    {id: 'c1', text: 'Kom 1', userId: 'maraCar'},
    {id: 'c2', text: 'Kom2', userId: 'maraCar'}
  ];

  constructor(private http: HttpClient, private authService: AuthService) { }

  get Comm() {
    return this._comments.asObservable();
  }

  getPoz(id: string) {
    return this.Starapozorista.find((p ) => p.id === id);
  }



  addCom(text: string){
    let generatedId;
    let newComment: Pozorista;
    let fetchedUserId: string;


    return this.authService.userId
      .pipe(
        take(1),
        switchMap(userId =>{
          fetchedUserId = userId;
          return this.authService.token;
        }),
        take(1),
        switchMap(token => {
          newComment = new Pozorista(null, text, fetchedUserId);
          return this.http
            .post<{name: string}>(`https://pozorista-47576-default-rtdb.europe-west1.firebasedatabase.app/pozorista.json?auth=${token}`, newComment);
        }),
        take(1),
        switchMap((resData) => {
          generatedId = resData.name;
          return this.Comm;
          }),
        take(1),
        tap((comments ) => {
          newComment.id = generatedId;

          this._comments.next(comments.concat(newComment));
        })
      );

  }
  getCom() {

    return this.authService.token.pipe(
      take(1),
      switchMap((token) => {
        return this.http.get<{[key: string] : commentData}>(
          `https://pozorista-47576-default-rtdb.europe-west1.firebasedatabase.app/pozorista.json?auth=${token}`);
      }),
      map((commentData) =>{
        const comments: Pozorista[] = [];

        for (const key in commentData) {
          if(commentData.hasOwnProperty(key)) {
            comments.push(new Pozorista(key, commentData[key].text, commentData[key].userId));
          }
        }

        return comments;
      }),
      tap(comments => {
        this._comments.next(comments);
      })
    );



  }
  deleteCom(komentar: Pozorista){
    console.log(komentar);
    return this.http.delete<void>('https://pozorista-47576-default-rtdb.europe-west1.firebasedatabase.app/pozorista/'
      +komentar.id +'.json').subscribe();

  }

  updateCom(komentar: Pozorista){


    return this.http.patch<any>('https://pozorista-47576-default-rtdb.europe-west1.firebasedatabase.app/pozorista/'
      +komentar.id +'.json'
      ,JSON.stringify(komentar)).subscribe();
  }






}

