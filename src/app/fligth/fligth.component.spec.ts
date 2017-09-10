import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FligthComponent } from './fligth.component';

describe('FligthComponent', () => {
  let component: FligthComponent;
  let fixture: ComponentFixture<FligthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FligthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FligthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
