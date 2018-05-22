import { Component, OnInit } from '@angular/core';
import {DbconnectionService} from '../dbconnection.service';
import {Artist} from '../Artist';

@Component({
  selector: 'app-viewdb',
  templateUrl: './viewdb.component.html',
  styleUrls: ['./viewdb.component.css']
})
export class ViewdbComponent implements OnInit {
  artists: Artist[];
  constructor(private dbConnection: DbconnectionService) { }

  ngOnInit() {
   this.dbConnection.getAllTodo().subscribe((artists) => {
      this.artists = artists as Artist[];
    });
  }

  search() {
    this.dbConnection.getAllTodo().subscribe((artists) => {
      this.artists = artists as Artist[];
    });
  }

}
