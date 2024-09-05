import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchereTerminerComponent } from './enchere-terminer.component';

describe('EnchereTerminerComponent', () => {
  let component: EnchereTerminerComponent;
  let fixture: ComponentFixture<EnchereTerminerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnchereTerminerComponent]
    });
    fixture = TestBed.createComponent(EnchereTerminerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
