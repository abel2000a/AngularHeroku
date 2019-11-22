import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuelaIndexComponent } from './escuela-index.component';

describe('EscuelaIndexComponent', () => {
  let component: EscuelaIndexComponent;
  let fixture: ComponentFixture<EscuelaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscuelaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscuelaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
