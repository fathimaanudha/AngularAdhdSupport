import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {video} from '../models/video';
import {VideoService} from '../services/video.service';

@Component({
  selector: 'app-addvid',
  templateUrl: './addvid.component.html',
  styleUrls: ['./addvid.component.css']
})
export class AddvidComponent implements OnInit {

  constructor(private router: Router,private videoService:VideoService) { }
  vidItem = new video(null,null);

  ngOnInit(): void {
  }
  addnew(){
    this.videoService.newVideo(this.vidItem);
    this.router.navigate(['/videos'])
  }
}
