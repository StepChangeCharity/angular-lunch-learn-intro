import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-dog',
  templateUrl: './top-dog.component.html',
  styleUrls: ['./top-dog.component.css']
})
export class TopDogComponent implements OnInit {

  @Input() topDog: string;
  @Input() runt: string;

  constructor() { }

  ngOnInit() {
  }

}
