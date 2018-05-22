import { Component, OnInit} from '@angular/core';
import { TokenServiceService } from './token-service.service';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styles: [`.active {background-color:#84bd00;}

  nav {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color:#000000;
  }

  nav a {
      float: left;
  }

  nav a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
  }

  nav a:hover {
      background-color:#5f4c4c;
  }`]
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private tokenService: TokenServiceService) { }

  ngOnInit() {

  }

}
