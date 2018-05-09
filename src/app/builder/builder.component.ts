import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


interface Genre {
  name: string;
}
@Component({
  selector: 'app-builder',
  template: `
  <div class="container-fluid top text-center">
    <h1 class="margin">MixedBag</h1>
    <h3>Spotify playlist generator</h3>
  </div>

  <div class="container-fluid mid text-center">
  <div class="panel-group" container-fluid>
  <div class="panel panel-primary" container-fluid>
  <div class="panel-heading">Genres  </div>
  <div class="panel-body" container-fluid>
    <button type="button" class="btn btn-primary" *ngFor="let butt of genret">
     {{ butt }}
      </button>
  </div>
  </div>
  </div>
  </div>`,
  styles: [`
  .margin {margin-bottom: 40px;}
  .top {
      background-color: #84bd00;
      color: #ffffff;
  }
  .mid {
      background-color: #000000;
      color: #ffffff;
  }
  .container-fluid {
      padding-top: 50px;
      padding-bottom: 50px;
  }`]
})

export class BuilderComponent implements OnInit {

  token: string;
  genret: Genre[];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    const hash = window.location.hash
      .substring(1)
      .split('&');


    const options = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + hash[0].split('=')[1]
      })
    };

    this.http.get('https://api.spotify.com/v1/recommendations/available-genre-seeds', options)
      .subscribe(response => {
        this.genret = (response['genres'] as Genre[]);
      });

  }

}
