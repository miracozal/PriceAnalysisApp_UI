import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A101MarketComponent } from './a101-market.component';

describe('A101MarketComponent', () => {
  let component: A101MarketComponent;
  let fixture: ComponentFixture<A101MarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A101MarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A101MarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
