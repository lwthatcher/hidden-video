import { Component, OnInit } from '@angular/core';
import videojs from 'video.js/dist/video.js';
import {stopButton, StopButtonToggle}  from 'videojs-stop-button/src/plugin.js';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['video.component.css']
})
export class VideoComponent implements OnInit {

  constructor() { 
    videojs.registerComponent('StopButton', StopButtonToggle);
    videojs.plugin('stopButton', stopButton);
  }

  ngOnInit() {
    
    var options = {
    };
    var player = videojs('my-player', options, function onPlayerReady() {
      
      videojs.log('video player loaded', this, stopButton);

      // How about an event listener?
      this.on('ended', function() {
        videojs.log('reached end of video');
      });
    });
    player.stopButton();
  }
}
