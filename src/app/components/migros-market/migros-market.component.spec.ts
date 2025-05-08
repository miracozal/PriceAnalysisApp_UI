import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrosMarketComponent } from './migros-market.component';

describe('MigrosMarketComponent', () => {
  let component: MigrosMarketComponent;
  let fixture: ComponentFixture<MigrosMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigrosMarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MigrosMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
