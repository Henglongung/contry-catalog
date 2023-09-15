import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { rootRouterConfig } from './app.routing';
import { LayoutModule } from './views/shared/layout/layout.module';
import {
  HttpClientModule
} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(rootRouterConfig),
    LayoutModule,
    HttpClientModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
