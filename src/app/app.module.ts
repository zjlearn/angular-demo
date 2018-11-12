import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CleanRtnListComponent } from './clean-rtn-list/clean-rtn-list.component';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './material/material.module';
import {AppRoutingModule} from './app-routing.module';
import {AddressService} from './shared/service/address.service';
import {FormsModule} from '@angular/forms';
import { AddressCleanComponent } from './address-clean/address-clean.component';
import { StandardAddressComponent } from './standard-address/standard-address.component';
import { AddressSuggestComponent } from './address-suggest/address-suggest.component';


@NgModule({
  declarations: [
    AppComponent,
    CleanRtnListComponent,
    AddressCleanComponent,
    StandardAddressComponent,
    AddressSuggestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
