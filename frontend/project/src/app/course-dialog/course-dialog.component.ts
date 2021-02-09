import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CourseDialogComponent implements OnInit {
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  


  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    
    return day !== 0 && day !== 6 && day !== 2 && day !== 3  && day !== 4;
  }
  minDate = new Date();
  show1=false;
  show2=false;
  name;
  date:Date;
  slot;
  phone:number;
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
     
    }

    return '';
  }
  constructor(public dialogRef: MatDialogRef<CourseDialogComponent>) {
    
  }
  
  ngOnInit(): void {
    
  }
 
  cancel() {
    this.dialogRef.close();
  }
  back() {
     this.show1=false;
     this.show2=false;
     return this.show1,this.show2;
  }
  talk(){
    return this.show1=true;
  }
  visit(){
    return this.show2=true;
  }
  time1(){
    return this.slot = "9:00 - 10:00"

  }
  time2(){
    return this.slot = "10:00 - 11:00"

  }
  time3(){
    return this.slot = "11:00 - 12:00"

  }
  proceed(){
    alert(`You request for appointment under ${this.name}, on ${this.date.toLocaleString().substring(0, 10)} at ${this.slot} is accepted... We will confirm the availability and contact you soon.`)
    this.dialogRef.close();
    // alert('Name:'+ this.name +'/'+ this.phone +'/'+ 'Date:'+ this.date + 'time:'+ this.slot)
    console.log('Name:'+ this.name)
    console.log('Date:'+ this.date.toLocaleString().substring(0, 10))
    console.log('time:'+ this.slot)
   this.name='';this.slot='';this.date;
   
  
   
  }
  
 
}
