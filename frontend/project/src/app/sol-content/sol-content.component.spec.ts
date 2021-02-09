import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolContentComponent } from './sol-content.component';

describe('SolContentComponent', () => {
  let component: SolContentComponent;
  let fixture: ComponentFixture<SolContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
