import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes/heroes.component';
import {RouterModule} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import {HeroService} from "./hero.service";
import {AppRoutingModule} from "./app-routing.module";
import { HeroSearchComponent } from './hero-search/hero-search.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,//[(ngmodule)]
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
