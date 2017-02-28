import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.css']
})
export class DogCardComponent implements OnInit {

  @Input() dog: any;
  @Output() likeDogEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() unlikeDogEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  likeDog(id: number): void {
    this.likeDogEvent.next(id);
  }

  unlikeDog(id: number): void {
    this.unlikeDogEvent.next(id);
  }

}
