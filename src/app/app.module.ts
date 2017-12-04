import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CribListingComponentComponent } from './crib-listing/crib-listing-component.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { CribsService } from './services/cribs.service';
import {FormsModule} from '@angular/forms';
import { AddListingFormComponent } from './add-listing-form/add-listing-form.component';


@NgModule({
  declarations: [
    AppComponent,
   
    CribListingComponentComponent,
    CribCardComponent,
    AddListingFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [CribsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
