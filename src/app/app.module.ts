import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule, combineReducers } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { compose } from "@ngrx/core/compose";

import { AppComponent } from './app.component';
import { counterReducer } from './counter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(
      compose(storeLogger(), combineReducers)
      ({ counter: counterReducer })
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
