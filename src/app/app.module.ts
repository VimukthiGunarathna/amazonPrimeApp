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
import { CoverBoxComponent } from './public/cover-box/cover-box.component';
import { MovieSlotComponent } from './public/movie-slot/movie-slot.component';
import { TvShowSlotComponent } from './public/tv-show-slot/tv-show-slot.component';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    DashboardComponent,
    CoverBoxComponent,
    MovieSlotComponent,
    TvShowSlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faPlus, faCaretDown, faUser);
  }
}
