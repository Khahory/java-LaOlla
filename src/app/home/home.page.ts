import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    let audio = new Audio("assets/mp3.mp3");
    audio.play();
  }
  // @ts-ignore
  @ViewChild("audio") audio;

  ngAfterViewInit() {
    this.audio.nativeElement.oncanplaythrough = () => {
      alert("Can play through video without stopping");
      this.audio.nativeElement.play();
    };
  }
}
