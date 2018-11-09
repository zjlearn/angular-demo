import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CleanRtnListComponent } from './clean-rtn-list/clean-rtn-list.component';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './material/material.module';
import {AppRoutingModule} from './app-routing.module';
import {AddressService} from './shared/service/address.service';


@NgModule({
  declarations: [
    AppComponent,
    CleanRtnListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
