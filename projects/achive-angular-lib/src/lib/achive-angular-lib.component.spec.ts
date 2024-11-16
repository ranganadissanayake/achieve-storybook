import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchiveAngularLibComponent } from './achive-angular-lib.component';

describe('AchiveAngularLibComponent', () => {
  let component: AchiveAngularLibComponent;
  let fixture: ComponentFixture<AchiveAngularLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchiveAngularLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AchiveAngularLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
