import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureDetailComponent } from './procedure-detail.component';

describe('ProcedureDetailComponent', () => {
  let component: ProcedureDetailComponent;
  let fixture: ComponentFixture<ProcedureDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
