import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncherdetailsComponent } from './encherdetails.component';

describe('EncherdetailsComponent', () => {
  let component: EncherdetailsComponent;
  let fixture: ComponentFixture<EncherdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncherdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncherdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
