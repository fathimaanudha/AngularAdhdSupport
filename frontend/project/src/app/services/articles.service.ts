import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http:HttpClient) { }
 
  // adhd
  getadhd(){
    return this.http.get('http://localhost:3000/articles');
  }

  newadhd(item){
    return this.http.post('http://localhost:3000/articles/insert',{'adh':item})
    .subscribe(data=>{console.log(data)})
  }
  getSingle(id:any){
    return this.http.get("http://localhost:3000/articles/"+id);
  }
  edit(id,article){
    console.log('client update')
    return this.http.put("http://localhost:3000/articles/update/"+id,article)
    .subscribe(data =>{console.log(data)})
  }
  delete(id,article)
  {

    return this.http.delete("http://localhost:3000/articles/delete/"+id,article)
    .subscribe(data =>{console.log(data)})
  }
}
