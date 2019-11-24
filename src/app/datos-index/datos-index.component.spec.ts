import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosIndexComponent } from './datos-index.component';

describe('DatosIndexComponent', () => {
  let component: DatosIndexComponent;
  let fixture: ComponentFixture<DatosIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
