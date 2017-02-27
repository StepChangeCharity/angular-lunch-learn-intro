import { Component } from '@angular/core';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Lunch and Learn';

  dogs: Array<any> = [
    {
      breed: 'Labrador',
      description: 'The Labrador Retriever, also Labrador, is a type of retriever-gun dog. The Labrador is one of the most popular breeds of dog in the United Kingdom and the United States.',
      src: 'assets/images/dogs/labrador.jpg'
    },
    {
      breed: 'Cocker Spaniel',
      description: 'Cocker Spaniels are dogs belonging to two breeds of the spaniel dog type: the American Cocker Spaniel and the English Cocker Spaniel, both of which are commonly called simply Cocker Spaniel in their countries of origin. In the early 20th century, Cocker Spaniels also included small hunting Spaniels.',
      src: 'assets/images/dogs/cocker-spaniel.jpg'
    },
    {
      breed: 'Dachshund',
      description: 'The dachshund (UK /ˈdæksənd/ or US /ˈdɑːkshʊnt/ dahks-huunt or /ˈdɑːksənt/) is a short-legged, long-bodied, hound-type dog breed.',
      src: 'assets/images/dogs/dachshund.jpg'
    },
    {
      breed: 'Cockapoo',
      description: 'A Cockapoo (also known as a spoodle) is a mixed-breed dog that is the cross between either Cocker Spaniel breeds (American Cocker Spaniel or English Cocker Spaniel) and a poodle (in most cases a miniature poodle or toy poodle).',
      src: 'assets/images/dogs/cockapoo.jpg'
    }  ,
    {
      breed: 'Shih-poo',
      description: 'The Shih-poo is a small domestic dog. It is a crossbreed between a Poodle and a Shih Tzu. The name Shih-poo is a portmanteau of the two breed names',
      src: 'assets/images/dogs/shih-poo.jpg'
    }    
  ]
}
