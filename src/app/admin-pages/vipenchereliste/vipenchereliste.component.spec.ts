import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipencherelisteComponent } from './vipenchereliste.component';

describe('VipencherelisteComponent', () => {
  let component: VipencherelisteComponent;
  let fixture: ComponentFixture<VipencherelisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VipencherelisteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VipencherelisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
