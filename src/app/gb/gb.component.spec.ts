import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GBComponent } from './gb.component';

describe('GBComponent', () => {
  let component: GBComponent;
  let fixture: ComponentFixture<GBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
