import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Grid1Component } from './components/grid-1/grid-1.component';
import { Grid2Component } from './components/grid-2/grid-2.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './components/home/home.component';
import { AvatarModule } from 'primeng/avatar';
import { ToolbarModule } from 'primeng/toolbar';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FormsNGComponent } from './components/forms-ng/forms-ng.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    Grid1Component,
    Grid2Component,
    CardsComponent,
    HomeComponent,
    GalleryComponent,
    FormsNGComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule, 
    ButtonModule,
    ToolbarModule, 
    AvatarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
