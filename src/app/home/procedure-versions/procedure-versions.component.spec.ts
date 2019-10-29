import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureVersionsComponent } from './procedure-versions.component';

describe('ProcedureVersionsComponent', () => {
  let component: ProcedureVersionsComponent;
  let fixture: ComponentFixture<ProcedureVersionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureVersionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
