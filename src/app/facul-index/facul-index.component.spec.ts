import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaculIndexComponent } from './facul-index.component';

describe('FaculIndexComponent', () => {
  let component: FaculIndexComponent;
  let fixture: ComponentFixture<FaculIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaculIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaculIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
