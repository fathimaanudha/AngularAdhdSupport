import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizdilogComponent } from './quizdilog.component';

describe('QuizdilogComponent', () => {
  let component: QuizdilogComponent;
  let fixture: ComponentFixture<QuizdilogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizdilogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizdilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
