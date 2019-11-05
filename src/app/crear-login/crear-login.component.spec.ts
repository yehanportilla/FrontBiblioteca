import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearLoginComponent } from './crear-login.component';

describe('CrearLoginComponent', () => {
  let component: CrearLoginComponent;
  let fixture: ComponentFixture<CrearLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
