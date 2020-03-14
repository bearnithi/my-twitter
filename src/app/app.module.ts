import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ButtonComponent } from './button/button.component';
import { ModalComponent } from './shared/modal/modal.component';
import { BackdropComponent } from './shared/backdrop/backdrop.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ButtonComponent,
    ModalComponent,
    BackdropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
