import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import {ChatService} from '../services/chat.service';

import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NotificationComponent implements OnInit {
  seen = false;
  noti:String;
  output:any[]=[];
  constructor(public _auth:AuthService,public dialogRef: MatDialogRef<NotificationComponent>,private chatService:ChatService,private _router:Router) { }




  
  ngOnInit(): void {
      // getting previous noti
      this.chatService.getNoti().subscribe((data)=>{
        this.output=JSON.parse(JSON.stringify(data))
      })
  }
  close() {
    this.dialogRef.close();
    this._router.navigate(['/cwelcome'])
  }
 
}
