import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {SolutionsService} from '../services/solutions.service';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {

  constructor(public _auth:AuthService,private router:Router,private route:ActivatedRoute,private solutionsService:SolutionsService) { }
id;
solutions:[];
  ngOnInit(): void {
    this.solutionsService.getSolutions().subscribe((data)=>{
      this.solutions= JSON.parse(JSON.stringify(data))
    })
  }

}
