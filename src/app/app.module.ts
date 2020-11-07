import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TopNavComponent } from './shared/top-nav/top-nav.component';
import { DashboardComponent } from './public/dashboard/dashboard.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { faCaretDown, faMinus, faPlus, faShoppingBag, faSortAmountDownAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { IvyCarouselModule } from 'angular-responsive-carousel/lib/carousel.module';
import { CoverBoxComponent } from './public/cover-box/cover-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    DashboardComponent,
    CoverBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faPlus, faCaretDown, faUser);
  }
}
