import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SokMarketComponent } from './sok-market.component';

describe('SokMarketComponent', () => {
  let component: SokMarketComponent;
  let fixture: ComponentFixture<SokMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SokMarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SokMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
