import { Component, OnInit } from '@angular/core';
import { DbconnectionService } from '../dbconnection.service';
import { Artist } from '../Artist';
import { Album } from '../Album';
import { ArtistAlbum } from '../ArtistAlbum';

@Component({
  selector: 'app-viewdb',
  templateUrl: './viewdb.component.html',
  styleUrls: ['./viewdb.component.css']
})
export class ViewdbComponent implements OnInit {
  artists: Artist[];
  albums: Album[];
  constructor(private dbConnection: DbconnectionService) { }

  ngOnInit() {
    this.updateArtists();
    this.updateAlbums();
  }

  updateArtists() {
    this.dbConnection.getAllArtists().subscribe((artists) => {
      this.artists = artists as Artist[];
    });
  }

  updateAlbums() {
    this.dbConnection.getAllAlbums().subscribe((albums) => {
      this.albums = albums as Album[];
    });
  }

  deleteAlbum(id: number) {
    this.dbConnection.deleteAlbum(id);
    this.updateAlbums();
  }

  deleteArtist(id: number) {
    this.dbConnection.deleteArtist(id);
    this.updateArtists();
  }
}
