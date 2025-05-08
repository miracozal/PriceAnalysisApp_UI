import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BimMarketComponent } from './bim-market.component';

describe('BimMarketComponent', () => {
  let component: BimMarketComponent;
  let fixture: ComponentFixture<BimMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BimMarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BimMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
