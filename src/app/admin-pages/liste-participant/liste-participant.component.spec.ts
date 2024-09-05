import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeParticipantComponent } from './liste-participant.component';

describe('ListeParticipantComponent', () => {
  let component: ListeParticipantComponent;
  let fixture: ComponentFixture<ListeParticipantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeParticipantComponent]
    });
    fixture = TestBed.createComponent(ListeParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
