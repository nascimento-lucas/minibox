import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Venda } from './venda';

describe('Venda', () => {
  let component: Venda;
  let fixture: ComponentFixture<Venda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Venda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Venda);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
