import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarlistupdateComponent } from './carlistupdate.component';

describe('CarlistupdateComponent', () => {
  let component: CarlistupdateComponent;
  let fixture: ComponentFixture<CarlistupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarlistupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarlistupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
