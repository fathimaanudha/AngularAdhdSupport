import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {solutions} from '../models/solution.model';
import {SolutionsService} from '../services/solutions.service';
@Component({
  selector: 'app-new-sol',
  templateUrl: './new-sol.component.html',
  styleUrls: ['./new-sol.component.css']
})
export class NewSolComponent implements OnInit {

  constructor(private router: Router,private solutionsService:SolutionsService) { }
  solItem = new solutions(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);

  ngOnInit(): void {
  }
  addnew(){
    this.solutionsService.newSolution(this.solItem);
    console.log('successfully added new solution');
    this.router.navigate(['/solutions'])
  }

}
