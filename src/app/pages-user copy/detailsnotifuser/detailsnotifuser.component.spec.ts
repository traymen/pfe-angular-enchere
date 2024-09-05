import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsnotifuserComponent } from './detailsnotifuser.component';

describe('DetailsnotifuserComponent', () => {
  let component: DetailsnotifuserComponent;
  let fixture: ComponentFixture<DetailsnotifuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsnotifuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsnotifuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
