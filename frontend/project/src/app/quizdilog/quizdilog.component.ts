import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import {QuizService} from '../services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizdilog',
  templateUrl: './quizdilog.component.html',
  styleUrls: ['./quizdilog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class QuizdilogComponent implements OnInit {
result:any=false;
  constructor(public quizService:QuizService,public dialogRef: MatDialogRef<QuizdilogComponent>,private _router:Router) { }

  ngOnInit(): void {
    if(this.quizService.score>=30){
      this.result=true;
    }
    else{ this.result=false}
  }
  cancel() {
    
    this.dialogRef.close();
    console.log(this.quizService.score)
  }
 
  
}
