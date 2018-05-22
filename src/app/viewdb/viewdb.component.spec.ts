import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdbComponent } from './viewdb.component';

describe('ViewdbComponent', () => {
  let component: ViewdbComponent;
  let fixture: ComponentFixture<ViewdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
