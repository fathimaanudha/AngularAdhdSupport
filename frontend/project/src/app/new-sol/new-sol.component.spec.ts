import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSolComponent } from './new-sol.component';

describe('NewSolComponent', () => {
  let component: NewSolComponent;
  let fixture: ComponentFixture<NewSolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
