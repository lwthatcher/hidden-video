import { Component, OnInit, ElementRef } from '@angular/core';
import {VgAPI} from 'videogular2/core';

type RenderingContext = CanvasRenderingContext2D;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  preload:string = 'auto';
  api:VgAPI;
  canvas: HTMLCanvasElement;
  video: HTMLVideoElement;
  context: RenderingContext;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.canvas = this.el.nativeElement.querySelector('div.row > div.col-lg > canvas');
    this.video = this.el.nativeElement.querySelector('vg-player > video');
    this.context = this.canvas.getContext('2d');
    console.log('video component init!', this);
  }

  onPlayerReady(api:VgAPI) {
    this.api = api;
    console.log('video player ready', this.api);
    const w = this.api.videogularElement.clientWidth;
    const h = this.api.videogularElement.clientHeight;
    console.log('setting canvas width/height', w, h, this.video.clientWidth, this.video.clientHeight);
    this.canvas.width = w;
    this.canvas.height = h;
  }


  transfer(event) {
    console.log('transferring image', this.video, this.canvas);
    this.context.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
  }

}
