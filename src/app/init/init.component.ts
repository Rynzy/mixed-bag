import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-init',
  template: `
  <div class="container-fluid top text-center">
    <h1 class="margin">MixedBag</h1>
    <h3>Spotify playlist generator</h3>
  </div>

  <div class="container-fluid mid text-center">
    <h3 class="margin">Click the button to proceed</h3>
    <button mat-button (click)="redirect()" >Log in with Spotify</button>
  </div>`,
  styles: [`
  .margin {margin-bottom: 40px;}
  .top{
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
export class InitComponent  implements OnInit {

  ngOnInit(): void {
  }
  constructor(private http: HttpClient) {
  }

  redirect() {
    const auth = 'https://accounts.spotify.com/authorize';
    const clientId = '1e3442832b6b43458d2599e328fac5d9';
    const redirectUri = 'http://localhost:4200/builder';
    const scopes = [
      'user-top-read'
    ];

      window.location.href = `${auth}?client_id=${clientId}&redirect_uri=${redirectUri}&
      scope=${scopes.join('%20')}
      &response_type=token&show_dialog=true`;

  }

}
