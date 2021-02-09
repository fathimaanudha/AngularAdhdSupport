import { Component, Input, OnInit, Directive, ElementRef, HostListener} from '@angular/core';
import {QuizService} from '../services/quiz.service';
import { ActivatedRoute,Router } from '@angular/router';
import {cquizData} from '../models/cquiz.model';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { QuizdilogComponent } from '../quizdilog/quizdilog.component';

@Component({
  selector: 'app-cquiz',
  templateUrl: './cquiz.component.html',
  styleUrls: ['./cquiz.component.css']
})
export class CquizComponent implements OnInit {

  
  constructor(private router:Router,private route:ActivatedRoute,private quizService:QuizService,public dialog: MatDialog) { }
  // templateForm(value: any) {
  //   alert(JSON.stringify(value));
  // }

questions:cquizData[];
a=false;
b=false;
c=false;
d=false;
e=false;

disabled;
score=0;
scorebox= 0;
@HostListener('click', ['$event'])

op1(){
  this.score=this.score+0;
  // this.renderer.setStyle(event.target, 'background', 'skyblue');
  // this.renderer.parentNode(Event);
  
 
  return this.score;
}
op2(){
  this.score=this.score+1;
  return this.score;
}
op3(){
  this.score=this.score+2;
  return this.score;
}
op4(){
  this.score=this.score+3;
  return this.score;
}
op5(){
  this.score=this.score+4;
  return this.score;
}

 radioChangeHandler(event:any){
   
   this.scorebox= parseInt(event.target.value)+this.scorebox;   
   event.target.disabled=true;
   event.target.closest.disabled=true;
  
   
   console.log("a"+this.scorebox)
  //  console.log("b"+this.score)
  
   
  return this.score;

 }


 submit(){
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true
  dialogConfig.width= '350px';
  dialogConfig.height= '350px';
  this.dialog.open(QuizdilogComponent, dialogConfig);
  this.scorebox=this.scorebox+this.score
   console.log("y "+this.scorebox)
   this.quizService.score= this.scorebox;
   if(this.scorebox>=30){
    //  alert(this.scorebox)
     this.scorebox=0;
     this.score=0;
    
   }
   else if(this.scorebox<30){
   
     this.scorebox=0;
     this.score=0;
    
   }
   
   
   
   return this.scorebox
}
  ngOnInit(): void {
    this.quizService.getQuiz().subscribe((data)=>{
      this.questions=JSON.parse(JSON.stringify(data))
    })

    

  }
  
}
