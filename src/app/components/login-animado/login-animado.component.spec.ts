import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAnimadoComponent } from './login-animado.component';

describe('LoginAnimadoComponent', () => {
  let component: LoginAnimadoComponent;
  let fixture: ComponentFixture<LoginAnimadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAnimadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAnimadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
