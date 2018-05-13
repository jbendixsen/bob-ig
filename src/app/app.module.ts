import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatTooltipModule } from '@angular/material';

import { LightboxModule } from 'angular2-lightbox';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';

import { InstagramService } from '../services';
import {
  GalleryItemComponent,
  HeaderComponent,
  GalleryComponent,
  BiographyComponent
} from './components';

import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    LoadingComponent,
    GalleryItemComponent,
    HeaderComponent,
    BiographyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTooltipModule,
    // HttpModule,
    HttpClientModule,
    LightboxModule
  ],
  providers: [InstagramService],
  bootstrap: [AppComponent],
  entryComponents: [BiographyComponent]
})
export class AppModule {}
