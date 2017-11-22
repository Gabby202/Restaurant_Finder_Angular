import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import ApplicationComponent from './application/application.component';
import MenubarComponent from './menubar/menubar.component';
import FooterComponent from './footer/footer.component';
import CitySelectorComponent from './city-selector/city-selector.component';
import CountySelectorComponent from './county-selector/county-selector.component';


@NgModule({
    imports: [BrowserModule],
    declarations: [ApplicationComponent, MenubarComponent, FooterComponent, CitySelectorComponent, CountySelectorComponent],
    bootstrap: [ApplicationComponent]
})
export default class AppModule {}
