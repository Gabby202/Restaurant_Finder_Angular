import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import ProductItemComponent from './product-item/product-item.component';
import ApplicationComponent from './application/application.component';
import MenubarComponent from './menubar/menubar.component';
import FooterComponent from './footer/footer.component';
import CitySelectorComponent from './city-selector/city-selector.component';
import CountySelectorComponent from './county-selector/county-selector.component';
import DublinComponent from './county-selector/dublin/dublin.component';
import MeathComponent from './county-selector/meath/meath.component';
import KildareComponent from './county-selector/kildare/kildare.component';


@NgModule({
    imports: [BrowserModule,
      RouterModule.forRoot([
            { path: 'dublin', component: DublinComponent },
            { path: 'meath', component: MeathComponent },
            { path: 'kildare', component: KildareComponent }
        ])],
    declarations: [ApplicationComponent,
       MenubarComponent, FooterComponent, CitySelectorComponent, CountySelectorComponent, DublinComponent, MeathComponent, KildareComponent, ProductItemComponent],
    bootstrap: [ApplicationComponent]
})
export default class AppModule {}
