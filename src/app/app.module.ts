import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { StoreModule, combineReducers } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { compose } from "@ngrx/core/compose";

import { AppComponent } from './app.component';
import * as fromDog from './store/reducer';
import { DogCardComponent } from './components/dog-card/dog-card.component';
import { TopDogComponent } from './components/top-dog/top-dog.component';

export interface AppState {
  dogState: fromDog.State
};

export const composeStore = compose(
  storeLogger(),
  combineReducers
)({
  dogState: fromDog.dogReducer
});

export function reducer(state: any, action: any) {
  return composeStore(state, action);
}

@NgModule({
  declarations: [
    AppComponent,
    DogCardComponent,
    TopDogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    // Note that you must instrument after importing StoreModule
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
