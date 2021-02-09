import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

public score:Number;
  constructor(private http:HttpClient) { }
  getQuiz(){
    return this.http.get('http://localhost:3000/cquiz');
  }
}
