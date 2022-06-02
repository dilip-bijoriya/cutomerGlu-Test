import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent-count',
  templateUrl: './parent-count.component.html',
  styleUrls: ['./parent-count.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ParentCountComponent implements OnInit {
  time: number = 0;
  display;
  interval;
  name: string;
  sendToChild: string;
  constructor() {}

  ngOnInit() {}
  startTimer() {
    this.interval = setInterval(() => {
      if (this.time === 0) {
        this.time++;
      } else {
        this.time++;
      }
      this.display = this.transform(this.time);
    }, 1000);
    this.sendToChild = this.name;
  }
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return minutes + ':' + (value - minutes * 60);
  }
  pauseTimer() {
    clearInterval(this.interval);
  }
}
