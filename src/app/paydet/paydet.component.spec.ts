import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaydetComponent } from './paydet.component';

describe('PaydetComponent', () => {
  let component: PaydetComponent;
  let fixture: ComponentFixture<PaydetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaydetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaydetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
