import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import RestaurantItemComponent from './restaurant-item/restaurant-item.component';
import ApplicationComponent from './application/application.component';
import MenubarComponent from './menubar/menubar.component';
import FooterComponent from './footer/footer.component';
import CitySelectorComponent from './city-selector/city-selector.component';
import CountySelectorComponent from './restaurant-selector/restaurant-selector.component';
import DublinComponent from './restaurant-selector/dublin/dublin.component';
import MeathComponent from './restaurant-selector/meath/meath.component';
import KildareComponent from './restaurant-selector/kildare/kildare.component';
import ScoreComponent from './score/score.component';
import HomeComponent from './home/home.component';
import RestaurantDetailsComponent from './restaurant-details/restaurant-details.component';
import MapComponent from './map/map.component';

import { AgmCoreModule } from 'angular2-google-maps/core';


const googleMapsCore = AgmCoreModule.forRoot({
   //'angular2-google-maps':   'https://npmcdn.com/angular2-google-maps@0.12.0',
  apiKey : 'AIzaSyBA_CtL7dZ4MCTPg1WdnAksqPWZaz5eQ80'
});


@NgModule({
    imports: [BrowserModule,AgmCoreModule.forRoot({
      apiKey : 'AIzaSyBA_CtL7dZ4MCTPg1WdnAksqPWZaz5eQ80'
    }),
      RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'dublin', component: DublinComponent },
            { path: 'meath', component: MeathComponent },
            { path: 'kildare', component: KildareComponent },
            { path: 'restaurant-details/:id', component: RestaurantDetailsComponent},
            { path: 'map', component: MapComponent },
            { path: '**', component: HomeComponent },




        ])],
    declarations: [ApplicationComponent, MenubarComponent, FooterComponent, CitySelectorComponent, CountySelectorComponent, DublinComponent, MeathComponent, KildareComponent, RestaurantItemComponent, ScoreComponent, HomeComponent, RestaurantDetailsComponent, MapComponent],
    bootstrap: [ApplicationComponent]
})
export default class AppModule {}
