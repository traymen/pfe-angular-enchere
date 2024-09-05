import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopuserComponent } from './topuser.component';

describe('TopuserComponent', () => {
  let component: TopuserComponent;
  let fixture: ComponentFixture<TopuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
