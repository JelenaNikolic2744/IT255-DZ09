import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { KoreografijaComponent } from './koreografija/koreografija.component';
import { DesavanjaComponent} from './desavanja/desavanja.component';
import { KontaktComponent } from './kontakt/kontakt.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpModule ],
  declarations: [ AppComponent, HeaderComponent, PocetnaComponent, KoreografijaComponent, DesavanjaComponent, KontaktComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
