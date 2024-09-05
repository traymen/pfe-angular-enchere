import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationuserComponent } from './participationuser.component';

describe('ParticipationuserComponent', () => {
  let component: ParticipationuserComponent;
  let fixture: ComponentFixture<ParticipationuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipationuserComponent]
    });
    fixture = TestBed.createComponent(ParticipationuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
