import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingdocRegisterComponent } from './missingdoc-register.component';

describe('MissingdocRegisterComponent', () => {
  let component: MissingdocRegisterComponent;
  let fixture: ComponentFixture<MissingdocRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingdocRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingdocRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
