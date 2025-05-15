import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendyolProductsComponent } from './trendyol-products.component';

describe('TrendyolProductsComponent', () => {
  let component: TrendyolProductsComponent;
  let fixture: ComponentFixture<TrendyolProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendyolProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendyolProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
