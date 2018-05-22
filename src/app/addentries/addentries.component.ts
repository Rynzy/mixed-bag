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

  artists: {};
  values = '';
  isInDb = [];
  basat = '';

  constructor(private http: HttpClient, private tokenService: TokenServiceService, private dbConnection: DbconnectionService) { }

  ngOnInit() {
    if (this.tokenService.getToken() == null) {
      this.tokenService.createToken();
    }
  }


  search(link: string) {
    this.tokenService.artistAlbums(link).subscribe(
      data => {
        this.basat = data;
        console.log(data);
      }
    );

    console.log(this.basat);
  }

  print() {
    console.log(this.artists['artists'].items);
  }



  onKey(event: any) {
    this.tokenService.searchArtist(event.target.value).subscribe(
      data => {
        console.log(data);
        this.values = data['artists'].items;
      }
    );
    console.log(this.values);

  }


  addToDb(obj) {
    this.dbConnection.getById(obj.id).subscribe(data => {
      this.isInDb = data;
      if (this.isInDb.length <= 0) {
        this.dbConnection.insertShit(obj);
      } else {
        alert(obj.name + ' is already in the database.');
      }
    });



  }

}
