import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulationComponent } from './regulation.component';

describe('RegulationComponent', () => {
  let component: RegulationComponent;
  let fixture: ComponentFixture<RegulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
