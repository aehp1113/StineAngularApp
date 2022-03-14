import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestInventoryModule } from './request-inventory/request-inventory.module';
import { RequestInventoryComponent } from './request-inventory/request-inventory/request-inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    // RequestInventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RequestInventoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
