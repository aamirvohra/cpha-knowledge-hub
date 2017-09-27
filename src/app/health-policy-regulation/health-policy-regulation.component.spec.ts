import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthPolicyRegulationComponent } from './health-policy-regulation.component';

describe('HealthPolicyRegulationComponent', () => {
  let component: HealthPolicyRegulationComponent;
  let fixture: ComponentFixture<HealthPolicyRegulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthPolicyRegulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthPolicyRegulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
