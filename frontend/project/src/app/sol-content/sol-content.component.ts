import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';
import {map} from "rxjs/operators";
import {SolutionsService} from '../services/solutions.service';
import {solutions} from '../models/solution.model';

@Component({
  selector: 'app-sol-content',
  templateUrl: './sol-content.component.html',
  styleUrls: ['./sol-content.component.css']
})
export class SolContentComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private solutionsService:SolutionsService) { }
  solutions:[];
  sol;
  id;
  solItem = {
    title:'',
    name1:'',
  name2:'',
  name3:'',
  name4:'',
  name5:'',
  name6:'',
   name7:'',
   name8:'',
   name9:'',
   name10:'',
    image:'',
    image1:'',
    image2:'',
    image3:'',
    image4:'',
    image5:'',
    image6:'',
    image7:'',
    image8:'',
    image9:'',
    image10:'',
    description:'',
    description1:'',
    description2:'',
    description3:'',
    description4:'',
    description5:'',
    description6:'',
    description7:'',
    description8:'',
    description9:'',
    description10:''
    
  
  }
  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((param: ParamMap) => {
        // @ts-ignore
        return param.params.id;
      })
    ).subscribe(bkId =>{
      this.id = bkId;
      this.solutionsService.getSingles(this.id).subscribe(bk  =>{
        this.sol = bk;
        console.log(this.id)
        this.solItem = {
          title:(bk['title']),
          name1:(bk['name1']),
          name2:(bk['name2']),
          name3:(bk['name3']),
          name4:(bk['name4']),
          name5:(bk['name5']),
          name6:(bk['name6']),
          name7:(bk['name7']),
          name8:(bk['name8']),
          name9:(bk['name9']),
          name10:(bk['name10']),
          image:(bk['image']),
          image1:(bk['image1']),
          image2:(bk['image2']),
          image3:(bk['image3']),
          image4:(bk['image4']),
          image5:(bk['image5']),
          image6:(bk['image6']),
          image7:(bk['image7']),
          image8:(bk['image8']),
          image9:(bk['image9']),
          image10:(bk['image10']),
          description:(bk['description']),
          description1:(bk['description1']),
          description2:(bk['description2']),
          description3:(bk['description3']),
          description4:(bk['description4']),
          description5:(bk['description5']),
          description6:(bk['description6']),
          description7:(bk['description7']),
          description8:(bk['description8']),
          description9:(bk['description9']),
          description10:(bk['description10'])
        }
      })

    })
  
  }
  update(){
    this.solutionsService.edit(this.id,this.solItem);
    console.log('updated');
    alert('success');
    this.router.navigate(['/solutions'])
  }

}
