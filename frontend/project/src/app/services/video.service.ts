import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http:HttpClient) { }
  getVideos(){
    return this.http.get('http://localhost:3000/video');
  }
  newVideo(item){
    return this.http.post('http://localhost:3000/video/insert',{'vid':item})
    .subscribe(data=>{console.log(data)})
  }
  getSingles(id:any){
    return this.http.get("http://localhost:3000/video/"+id);
  }
  delete(id,vid)
  {

    return this.http.delete("http://localhost:3000/video/delete/"+id,vid)
    .subscribe(data =>{console.log(data)})
  }
}
