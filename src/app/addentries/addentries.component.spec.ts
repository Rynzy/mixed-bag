import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddentriesComponent } from './addentries.component';

describe('AddentriesComponent', () => {
  let component: AddentriesComponent;
  let fixture: ComponentFixture<AddentriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddentriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddentriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
