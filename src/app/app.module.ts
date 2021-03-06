import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnimalsComponent } from './animals/animals.component';
import {RouterModule, Routes} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LocationComponent } from './location/location.component';
import { NewsComponent } from './news/news.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ZooMapComponent } from './zoo-map/zoo-map.component';
import { RulesComponent } from './rules/rules.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoute: Routes = [
  {path: 'animals', component: AnimalsComponent},
  {path: 'location', component: LocationComponent},
  {path: 'zooMap', component: ZooMapComponent},
  {path: 'tickets', component: TicketsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnimalsComponent,
    FooterComponent,
    LocationComponent,
    NewsComponent,
    TicketsComponent,
    ZooMapComponent,
    RulesComponent,
    HomeComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
