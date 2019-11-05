import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAutorComponent } from './crear-autor.component';

describe('CrearAutorComponent', () => {
  let component: CrearAutorComponent;
  let fixture: ComponentFixture<CrearAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
