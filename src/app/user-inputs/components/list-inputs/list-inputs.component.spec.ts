import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInputsComponent } from './list-inputs.component';

describe('ListInputsComponent', () => {
  let component: ListInputsComponent;
  let fixture: ComponentFixture<ListInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
