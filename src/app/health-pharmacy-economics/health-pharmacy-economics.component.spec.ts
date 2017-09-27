import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthPharmacyEconomicsComponent } from './health-pharmacy-economics.component';

describe('HealthPharmacyEconomicsComponent', () => {
  let component: HealthPharmacyEconomicsComponent;
  let fixture: ComponentFixture<HealthPharmacyEconomicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthPharmacyEconomicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthPharmacyEconomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
