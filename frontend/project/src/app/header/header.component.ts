import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {NotificationComponent} from '../notification/notification.component';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _auth:AuthService,
    private _router:Router,public dialog: MatDialog) { }
    openDialog(): void {
      const dialogConfig = new MatDialogConfig();
  
          dialogConfig.disableClose = false;
          dialogConfig.autoFocus = true
          dialogConfig.width= '350px';
          dialogConfig.height= '450px';
          this.dialog.open(NotificationComponent, dialogConfig);
    
          
  }
  logoutUser(){
    sessionStorage.removeItem('token')
      this._router.navigate(['/'])
    }

  ngOnInit(): void {
  }

}
