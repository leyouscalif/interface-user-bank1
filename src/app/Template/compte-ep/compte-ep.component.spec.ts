import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteEPComponent } from './compte-ep.component';

describe('CompteEPComponent', () => {
  let component: CompteEPComponent;
  let fixture: ComponentFixture<CompteEPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteEPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteEPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
