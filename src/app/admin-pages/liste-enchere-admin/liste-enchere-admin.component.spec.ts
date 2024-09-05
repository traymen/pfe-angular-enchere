import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEnchereAdminComponent } from './liste-enchere-admin.component';

describe('ListeEnchereAdminComponent', () => {
  let component: ListeEnchereAdminComponent;
  let fixture: ComponentFixture<ListeEnchereAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeEnchereAdminComponent]
    });
    fixture = TestBed.createComponent(ListeEnchereAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
