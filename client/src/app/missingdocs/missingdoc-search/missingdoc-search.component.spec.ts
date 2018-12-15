import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingdocSearchComponent } from './missingdoc-search.component';

describe('MissingdocSearchComponent', () => {
  let component: MissingdocSearchComponent;
  let fixture: ComponentFixture<MissingdocSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingdocSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingdocSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
