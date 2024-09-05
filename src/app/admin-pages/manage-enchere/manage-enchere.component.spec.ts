import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEnchereComponent } from './manage-enchere.component';

describe('ManageEnchereComponent', () => {
  let component: ManageEnchereComponent;
  let fixture: ComponentFixture<ManageEnchereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageEnchereComponent]
    });
    fixture = TestBed.createComponent(ManageEnchereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
