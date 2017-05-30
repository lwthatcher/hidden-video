import { Component, OnInit } from '@angular/core';
import videojs from 'video.js/dist/video.js';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['video.component.css']
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var player = videojs('my-player');
  }

}
