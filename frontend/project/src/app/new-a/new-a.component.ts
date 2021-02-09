import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ArticlesService} from '../services/articles.service';
import {adhd} from '../models/adhd.model';
@Component({
  selector: 'app-new-a',
  templateUrl: './new-a.component.html',
  styleUrls: ['./new-a.component.css']
})
export class NewAComponent implements OnInit {

  constructor(private router: Router, private articlesService:ArticlesService) { }
  adhItem = new adhd(null, null,null,null, null, null,null, null, null, null, null, null, null, null, null, null,null,null,null,null,null,null,null,null,null,null);
  ngOnInit(): void {
  }
  addnew(){
    this.articlesService.newadhd(this.adhItem);
    console.log('success');
    this.router.navigate(['/articles'])
  }

}
