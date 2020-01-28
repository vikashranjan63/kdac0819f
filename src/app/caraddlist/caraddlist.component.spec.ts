import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaraddlistComponent } from './caraddlist.component';

describe('CaraddlistComponent', () => {
  let component: CaraddlistComponent;
  let fixture: ComponentFixture<CaraddlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaraddlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaraddlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
