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
import ReviewComponent from './review/review.component'
import ReviewItemComponent from './review-item/review-item.component';
import TopRatedComponent from './top-rated/top-rated.component';
import QuisineComponent from './quisine/quisine.component';
import SearchComponent from './search/search.component';
@NgModule({
    imports: [BrowserModule,
      RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'dublin', component: DublinComponent },
            { path: 'meath', component: MeathComponent },
            { path: 'kildare', component: KildareComponent },
            { path: 'restaurant-details/:id', component: RestaurantDetailsComponent},
            { path: 'top-rated', component: TopRatedComponent},
            { path: 'quisine', component: QuisineComponent},
            { path: 'search/:name', component: SearchComponent},

            { path: '**', component: HomeComponent }



        ])],
    declarations: [ApplicationComponent, MenubarComponent, FooterComponent, CitySelectorComponent, CountySelectorComponent, DublinComponent, MeathComponent, KildareComponent, RestaurantItemComponent, ScoreComponent, HomeComponent, RestaurantDetailsComponent, ReviewComponent, ReviewItemComponent, TopRatedComponent, QuisineComponent, SearchComponent],
    bootstrap: [ApplicationComponent]
})
export default class AppModule {}
