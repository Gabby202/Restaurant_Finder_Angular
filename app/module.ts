import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import ApplicationComponent from './application/application.component'
import MenubarComponent from './menubar/menubar.component'
import FooterComponent from './footer/footer.component'


@NgModule({
    imports: [BrowserModule],
    declarations: [ApplicationComponent, MenubarComponent, FooterComponent],
    bootstrap: [ApplicationComponent]
})
export default class AppModule {}