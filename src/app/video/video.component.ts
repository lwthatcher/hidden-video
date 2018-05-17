import { Component, OnInit } from '@angular/core';
import {VgAPI} from 'videogular2/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  preload:string = 'auto';
  api:VgAPI;

  constructor() { }

  ngOnInit() {
    console.log('video component init!', this);
  }

  onPlayerReady(api:VgAPI) {
    this.api = api;
    console.log('video player ready', this.api);
  }

}
