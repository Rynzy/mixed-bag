import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DbconnectionService {

  constructor(private http: HttpClient) { }

  getAllTodo(): Observable<any> {
    return this.http.get('/api/artists');

  }

  insertShit(basa) {
    this.http.post('/api/artists', {
      title: 'foo',
      body: 'bar',
      name: basa.name,
      spotifyid: basa.id
    })
      .subscribe(
        ress => {
          if (ress) {
            alert(basa.name + ' added to database');
          }
        },
        err => {
          console.log('Error occured');
        }
      );
  }

  getById(id): Observable<any> {
    let params: HttpParams = new HttpParams();
    params = params.set('id', id);
    return this.http.get(`/api/artists/single`, { params: params });
  }

}

