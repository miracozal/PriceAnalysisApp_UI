import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrosUrunAraComponent } from './migros-urun-ara.component';

describe('MigrosUrunAraComponent', () => {
  let component: MigrosUrunAraComponent;
  let fixture: ComponentFixture<MigrosUrunAraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigrosUrunAraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MigrosUrunAraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
