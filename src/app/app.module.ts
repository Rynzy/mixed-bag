import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { InitComponent } from './init/init.component';
import { AppRoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';
import { TokenServiceService } from './token-service.service';
import { ViewdbComponent } from './viewdb/viewdb.component';
import { AddentriesComponent } from './addentries/addentries.component';
import { DbconnectionService } from './dbconnection.service';


@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    ViewdbComponent,
    AddentriesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
     NgbModule.forRoot(),
     HttpClientModule,
     FormsModule
  ],
  providers: [TokenServiceService, DbconnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
