import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {VideoService} from '../services/video.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor(public _auth:AuthService,private router:Router,private route:ActivatedRoute,private videoService:VideoService) { }
  id;
  videos:[];
  

  ngOnInit(): void {
   
   

    
    this.videoService.getVideos().subscribe((data)=>{
      this.videos=JSON.parse(JSON.stringify(data))
    })
    
  }

}
