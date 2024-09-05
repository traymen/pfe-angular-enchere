import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEnchereUserComponent } from './liste-enchere-user.component';

describe('ListeEnchereUserComponent', () => {
  let component: ListeEnchereUserComponent;
  let fixture: ComponentFixture<ListeEnchereUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeEnchereUserComponent]
    });
    fixture = TestBed.createComponent(ListeEnchereUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
