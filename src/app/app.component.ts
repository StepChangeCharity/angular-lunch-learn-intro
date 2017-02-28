import { AppState } from './app.module';
import { LIKE, UNLIKE } from './store/reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dogs: Array<any> = [];
  topDog: any;
  runt: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.select(store => store.dogState).subscribe(state => {
      this.dogs = state.dogs;
      this.topDog = state.topDog;
      this.runt = state.runt;
    });

  }

  likeDog(id: number) {
    this.store.dispatch({ type: LIKE, payload: id });
  }
  
  unlikeDog(id: number) {
    this.store.dispatch({ type: UNLIKE, payload: id });
  }

  title = 'Angular Lunch and Learn';

}
