import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasshistorylogComponent } from './passhistorylog.component';

describe('PasshistorylogComponent', () => {
  let component: PasshistorylogComponent;
  let fixture: ComponentFixture<PasshistorylogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasshistorylogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasshistorylogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
