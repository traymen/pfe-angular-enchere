import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueReclamationComponent } from './historique-reclamation.component';

describe('HistoriqueReclamationComponent', () => {
  let component: HistoriqueReclamationComponent;
  let fixture: ComponentFixture<HistoriqueReclamationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriqueReclamationComponent]
    });
    fixture = TestBed.createComponent(HistoriqueReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
