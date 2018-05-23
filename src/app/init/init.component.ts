import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent  implements OnInit {

  ngOnInit(): void {
  }
  constructor(private http: HttpClient) {
  }

  redirect() {
    const auth = 'https://accounts.spotify.com/authorize';
    const clientId = '1e3442832b6b43458d2599e328fac5d9';
    const redirectUri = 'https://powerful-retreat-20945.herokuapp.com/addentries';
    const scopes = [
      'user-top-read'
    ];

      window.location.href = `${auth}?client_id=${clientId}&redirect_uri=${redirectUri}&
      scope=${scopes.join('%20')}
      &response_type=token&show_dialog=true`;

  }

}
