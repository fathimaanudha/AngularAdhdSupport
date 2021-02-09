import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwelcomeComponent } from './cwelcome.component';

describe('CwelcomeComponent', () => {
  let component: CwelcomeComponent;
  let fixture: ComponentFixture<CwelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CwelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
