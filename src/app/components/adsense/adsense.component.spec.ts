import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsenseComponent } from './adsense.component';

describe('AdsenseComponent', () => {
  let component: AdsenseComponent;
  let fixture: ComponentFixture<AdsenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
