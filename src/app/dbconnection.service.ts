import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DbconnectionService {

  constructor(private http: HttpClient) { }

  getAllArtists(): Observable<any> {
    return this.http.get('/api/artists');
  }

  getAllAlbums(): Observable<any> {
    return this.http.get('/api/artists/albums');
  }

  insertArtist(basa) {
    this.http.post('/api/artists', {
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
          console.log('Error');
        }
      );
  }

  insertAlbums(albums) {
    this.http.post('/api/artists/albums', {
      title: 'foo',
      body: 'bar',
      package: albums
    })
      .subscribe(
        ress => {
          if (ress) {
            alert(' Albums added to database');
          }
        },
        err => {
          console.log('Error');
        }
      );
  }

  getById(id): Observable<any> {
    let params: HttpParams = new HttpParams();
    params = params.set('id', id);
    return this.http.get(`/api/artists/single`, { params: params });
  }

  deleteAlbum(id) {
    let params: HttpParams = new HttpParams();
    params = params.set('id', id);
    this.http.delete('/api/artists/albums', { params: params }).subscribe(
      ress => {
        if (ress) {
          alert('Album deleted.');
        }
      },
      err => {
        console.log('Error');
      }
    );
  }

  deleteArtist(id) {
    let params: HttpParams = new HttpParams();
    params = params.set('id', id);
    this.http.delete('/api/artists', { params: params }).subscribe(
      ress => {
        if (ress) {
          alert('Artist deleted.');
        }
      },
      err => {
        console.log('Error');
      }
    );
  }
}



