import { Component, OnInit } from '@angular/core';

import {ArticlesService} from '../services/articles.service';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';
import {map} from "rxjs/operators";
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private articlesService:ArticlesService) { }
  adhd:[];
  article;
  id;
 
  adhItem = {
    title:'',    
    image:'',
    main:'',
    image1:'',
    image2:'',
    subtitle1:'',
    subpara1:'',
    subtitle2:'',
    subpara2:'',
    subtitle3:'',
    subpara3:'',
    subtitle4:'',
    subpara4:'',
    subtitle5:'',
    subpara5:'',
    subtitle6:'',
    subpara6:'',
    subtitle7:'',
    subpara7:'',
    subtitle8:'',
    subpara8:'',
    subtitle9:'',
    subpara9:'',
    subtitle10:'',
    subpara10:''
  }
  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((param:ParamMap)=>{
        // @ts-ignore
        return param.params.id;
      })
    ).subscribe(bkId =>{
      this.id = bkId;
      this.articlesService.getSingle(this.id).subscribe(bk =>{
        this.article = bk;
        console.log('this.id')
        this.adhItem={
          title:(bk['title']),    
          image:(bk['image']),
          main:(bk['main']),
          image1:(bk['image1']),
          image2:(bk['image2']),
          subtitle1:(bk['subtitle1']),
          subpara1:(bk['subpara1']),
          subtitle2:(bk['subtitle2']),
          subpara2:(bk['subpara2']),
          subtitle3:(bk['subtitle3']),
          subpara3:(bk['subpara3']),
          subtitle4:(bk['subtitle4']),
          subpara4:(bk['subpara4']),
          subtitle5:(bk['subtitle5']),
          subpara5:(bk['subpara5']),
          subtitle6:(bk['subtitle6']),
          subpara6:(bk['subpara6']),
          subtitle7:(bk['subtitle7']),
          subpara7:(bk['subpara7']),
          subtitle8:(bk['subtitle8']),
          subpara8:(bk['subpara8']),
          subtitle9:(bk['subtitle9']),
          subpara9:(bk['subpara9']),
          subtitle10:(bk['subtitle10']),
          subpara10:(bk['subpara10'])
        }
      })
    })

  }
  update(){
    this.articlesService.edit(this.id,this.adhItem);
    console.log('success')
    alert('success')
    this.router.navigate(['/articles'])
  
  }

}
