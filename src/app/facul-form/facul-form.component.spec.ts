import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaculFormComponent } from './facul-form.component';

describe('FaculFormComponent', () => {
  let component: FaculFormComponent;
  let fixture: ComponentFixture<FaculFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaculFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaculFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
