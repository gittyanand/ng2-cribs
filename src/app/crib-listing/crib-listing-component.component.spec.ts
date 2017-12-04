import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CribListingComponentComponent } from './crib-listing-component.component';

describe('CribListingComponentComponent', () => {
  let component: CribListingComponentComponent;
  let fixture: ComponentFixture<CribListingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CribListingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CribListingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
