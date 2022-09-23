import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { 
	IgxBannerModule,
	IgxNavbarModule,
	IgxCardModule,
	IgxIconModule
 } from "igniteui-angular";
 import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
 import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ToastComponent } from './toast/toast.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxBannerModule,
	IgxCardModule,
	IgxIconModule,
	IgxNavbarModule, 
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, BannerComponent]
})
export class AppModule { }
