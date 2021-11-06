import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenshootsComponent } from './screenshoots.component';

describe('ScreenshootsComponent', () => {
  let component: ScreenshootsComponent;
  let fixture: ComponentFixture<ScreenshootsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenshootsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenshootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
