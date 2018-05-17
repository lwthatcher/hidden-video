import { Component, OnInit, ElementRef } from '@angular/core';
import {VgAPI} from 'videogular2/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  preload:string = 'auto';
  api:VgAPI;
  canvas;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.canvas = this.el.nativeElement.querySelector('div.row > div.col-lg > canvas');
    console.log('video component init!', this);
  }

  onPlayerReady(api:VgAPI) {
    this.api = api;
    console.log('video player ready', this.api);
    const w = this.api.videogularElement.clientWidth;
    const h = this.api.videogularElement.clientHeight;
    console.log('setting canvas width/height', w, h);
    this.canvas.width = w;
    this.canvas.height = h;
  }


  transfer(event) {
    console.log('clicked transfer', event);
    console.log('host:', this.el.nativeElement);
  }

}
