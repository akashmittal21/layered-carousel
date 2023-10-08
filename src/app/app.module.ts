import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayeredCarouselComponent } from './app.component';

@NgModule({
  declarations: [
    LayeredCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LayeredCarouselComponent]
})
export class AppModule { }
