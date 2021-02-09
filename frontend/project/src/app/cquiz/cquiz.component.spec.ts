import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CquizComponent } from './cquiz.component';

describe('CquizComponent', () => {
  let component: CquizComponent;
  let fixture: ComponentFixture<CquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
