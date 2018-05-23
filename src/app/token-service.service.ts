import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenServiceService {
  token: string;
  headers: {};

  constructor(private http: HttpClient) { }

  init() {
    const auth = 'https://accounts.spotify.com/authorize';
    const clientId = '1e3442832b6b43458d2599e328fac5d9';
    const redirectUri = 'http://localhost:3000/';
    const scopes = [
      'user-top-read'
    ];

    window.location.href = `${auth}?client_id=${clientId}&redirect_uri=${redirectUri}&
          scope=${scopes.join('%20')}
          &response_type=token&show_dialog=true`;
  }

  setToken(val: string) {
    this.token = val;
  }

  getToken() {
    return this.token;
  }

  createToken() {
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

    this.headers = options;
    this.token = hash[0].split('=')[1];
  }

  artistAlbums(id: string): Observable<any> {
    return this.http.get('https://api.spotify.com/v1/artists/' + id + '/albums?include_groups=album&market=FI&limit=50&offset=0',
      this.headers);
  }


  searchArtist(artist: string): Observable<any> {
    return this.http.get('https://api.spotify.com/v1/search?q=' + artist + '&type=artist&market=FI&limit=25&offset=0',
      this.headers);
  }

}
