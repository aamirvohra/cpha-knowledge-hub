import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltHomeComponentComponent } from './alt-home.component';

describe('AltHomeComponentComponent', () => {
  let component: AltHomeComponentComponent;
  let fixture: ComponentFixture<AltHomeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltHomeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
