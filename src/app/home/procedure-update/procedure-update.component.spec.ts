import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureUpdateComponent } from './procedure-update.component';

describe('ProcedureUpdateComponent', () => {
  let component: ProcedureUpdateComponent;
  let fixture: ComponentFixture<ProcedureUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
