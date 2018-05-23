import { Component, OnInit } from '@angular/core';
import { TokenServiceService } from '../token-service.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { isUndefined } from 'util';
import { DbconnectionService } from '../dbconnection.service';

interface Artist {
  genres: {};
  id: string;
  name: string;
}

@Component({
  selector: 'app-addentries',
  templateUrl: './addentries.component.html',
  styleUrls: ['./addentries.component.css']
})
export class AddentriesComponent implements OnInit {
  artists = '';
  isInDb = [];
  albums = [];

  constructor(private http: HttpClient, private tokenService: TokenServiceService, private dbConnection: DbconnectionService) { }

  ngOnInit() {
    if (this.tokenService.getToken() == null) {
      this.tokenService.createToken();
    }
  }


  search(link: string) {
    this.tokenService.artistAlbums(link).subscribe(
      data => {
        this.albums = data['items'];
      }
    );

  }

  onKey(event: any) {
    this.tokenService.searchArtist(event.target.value).subscribe(
      data => {
        this.artists = data['artists'].items;
      }
    );
  }


  addAlbums() {
    if (this.albums.length > 0) {
      this.dbConnection.insertAlbums(this.albums);
      this.albums = [];
    } else {
      alert('There are no albums to add, arists isnt added yet or the albums are alrady in the database.');
    }
  }
  addToDb(obj) {
    this.dbConnection.getById(obj.id).subscribe(data => {
      this.isInDb = data;
      if (this.isInDb.length <= 0) {
        this.dbConnection.insertArtist(obj);
        this.search(obj.id);
      } else {
        alert(obj.name + ' is already in the database.');
      }
    });
  }

}
