import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestLibComponent } from './my-test-lib.component';

describe('MyTestLibComponent', () => {
  let component: MyTestLibComponent;
  let fixture: ComponentFixture<MyTestLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTestLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyTestLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
