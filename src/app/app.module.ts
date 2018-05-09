import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { InitComponent } from './init/init.component';
import { AppRoutingModule } from './routing.module';
import { BuilderComponent } from './builder/builder.component';


@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    BuilderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
     NgbModule.forRoot(),
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
