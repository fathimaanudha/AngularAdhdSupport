import { Component, OnInit } from '@angular/core';
import {ChatService} from '../services/chat.service';
import {UserService} from '../services/user.service';
import {chat} from '../models/chat.model';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  userName:String
  message:String;
  noti:String;
  output:any[]=[];
  chat:[];
  feedback:String;
  
  
  constructor(public _auth:AuthService,private chatService:ChatService, public userService:UserService) { }
  chatItem=new chat(null,null,null)
  ngOnInit(): void {
// getting previous message
    this.chatService.getChat().subscribe((data)=>{
      this.chat=JSON.parse(JSON.stringify(data))
    })

    // getting username
    this.userName= this.userService.username;
    this.chatItem.user=this.userName;

    // 
    this.chatService.listen('typing').subscribe((data)=> this.updateFeedback(data));
    this.chatService.listen('chat').subscribe((data)=> this.updateMessage(data));

   }
   updateMessage(data: any): void {
    this.feedback ='';
    if(!!!data) return;
    console.log(`${data.handle} : ${data.message}`);
    this.output.push(data);
    
  }
  updateFeedback(data: any): void {
    this.feedback = `${data} is typing a message`;
  }
  messageTyping():void{
    console.log(`${this.userName} is typing`)
    this.chatService.emit(`typing`, this.userName);
  }
  sendMessage():void{
    console.log(
      {message:this.message,
        handle:this.userName
      });
      this.chatService.emit('chat',{
        message:this.message,
        handle:this.userName
      })
      this.message="";

    
  }
  alert():void{
    if(this.userName != 'admin')
    {alert(this.noti)
    this.noti="";}
    this.noti="";
  }
  addnew(){
    this.chatService.newChat(this.chatItem);
  }
  addNoti(){
    this.chatService.newNoti(this.chatItem)
  }
}