import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHoverEffeects1Component } from './card-hover-effeects1.component';

describe('CardHoverEffeects1Component', () => {
  let component: CardHoverEffeects1Component;
  let fixture: ComponentFixture<CardHoverEffeects1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHoverEffeects1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHoverEffeects1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
