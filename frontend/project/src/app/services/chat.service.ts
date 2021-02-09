import { Injectable } from '@angular/core';
import {io} from 'socket.io-client/build/index';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscriber} from 'rxjs';

const SOCKET_ENDPOINT =  'localhost:3000'


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  
 
  
  private socket: any;
  constructor(private http:HttpClient) { 
    this.socket=io(SOCKET_ENDPOINT)
  }
  getChat(){
    return this.http.get('http://localhost:3000/chat');
  }
  newChat(item){
    return this.http.post('http://localhost:3000/chat/insert',{'sol':item})
    .subscribe(data=>{console.log(data)})
  }



  getNoti(){
    return this.http.get('http://localhost:3000/noti');
  }
  newNoti(item){
    return this.http.post('http://localhost:3000/noti/insert',{'sol':item})
    .subscribe(data=>{console.log(data)})
  }
  // socket:any;
  listen(eventname: string): Observable<any>{
    return new Observable((Subscriber) =>{
      this.socket.on(eventname, (data)=> {
        Subscriber.next(data);
      })

    })
  }
  emit(eventname:string, data: any){
    this.socket.emit(eventname, data);
  }
}
