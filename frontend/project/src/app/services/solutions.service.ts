import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolutionsService {

  constructor(private http:HttpClient) { }
  // get the solutions 
  getSolutions(){
    return this.http.get('http://localhost:3000/solutions');
  }
  
  newSolution(item){
    return this.http.post('http://localhost:3000/solutions/insert',{'sol':item})
    .subscribe(data=>{console.log(data)})
  }
  getSingles(id:any){
    return this.http.get("http://localhost:3000/solutions/"+id);
  }
  edit(id,sol){
    console.log('client update')
    return this.http.put("http://localhost:3000/solutions/update/"+id,sol)
    .subscribe(data =>{console.log(data)})
  }
  delete(id,sol)
  {

    return this.http.delete("http://localhost:3000/solutions/delete/"+id,sol)
    .subscribe(data =>{console.log(data)})
  }
}
