import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupdisplayComponent } from './startupdisplay.component';

describe('StartupdisplayComponent', () => {
  let component: StartupdisplayComponent;
  let fixture: ComponentFixture<StartupdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StartupdisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartupdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
