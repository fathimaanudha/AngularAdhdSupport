import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../services/articles.service';
import {AuthService} from '../services/auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(public _auth:AuthService,private router:Router,private route:ActivatedRoute,private articlesService:ArticlesService) { }
  adhd:[];
  id;
  ngOnInit(): void {
    this.articlesService.getadhd().subscribe((data)=>{
      this.adhd=JSON.parse(JSON.stringify(data))
      
    })
  }
  
}
