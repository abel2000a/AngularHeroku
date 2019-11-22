import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorIndexComponent } from './buscador-index.component';

describe('BuscadorIndexComponent', () => {
  let component: BuscadorIndexComponent;
  let fixture: ComponentFixture<BuscadorIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
