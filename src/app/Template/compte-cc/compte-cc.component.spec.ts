import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteCCComponent } from './compte-cc.component';

describe('CompteCCComponent', () => {
  let component: CompteCCComponent;
  let fixture: ComponentFixture<CompteCCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteCCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
