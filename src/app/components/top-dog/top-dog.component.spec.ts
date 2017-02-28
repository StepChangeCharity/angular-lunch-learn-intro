import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDogComponent } from './top-dog.component';

describe('TopDogComponent', () => {
  let component: TopDogComponent;
  let fixture: ComponentFixture<TopDogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopDogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
