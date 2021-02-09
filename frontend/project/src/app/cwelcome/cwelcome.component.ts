import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import {AuthService} from '../services/auth.service';



@Component({
  selector: 'app-cwelcome',
  templateUrl: './cwelcome.component.html',
  styleUrls: ['./cwelcome.component.css']
})
export class CwelcomeComponent implements OnInit {

  constructor(public _auth:AuthService,public dialog: MatDialog) { }
  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true
        dialogConfig.width= '450px';
        dialogConfig.height= '450px';
        this.dialog.open(CourseDialogComponent, dialogConfig);
  
        
}
  ngOnInit(): void {
  }

}
