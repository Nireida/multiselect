import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultyElementComponent } from './multy-element.component';

describe('MultyElementComponent', () => {
  let component: MultyElementComponent;
  let fixture: ComponentFixture<MultyElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultyElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultyElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
