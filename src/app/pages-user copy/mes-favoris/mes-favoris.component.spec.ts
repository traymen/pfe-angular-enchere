import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesFavorisComponent } from './mes-favoris.component';

describe('MesFavorisComponent', () => {
  let component: MesFavorisComponent;
  let fixture: ComponentFixture<MesFavorisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesFavorisComponent]
    });
    fixture = TestBed.createComponent(MesFavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
