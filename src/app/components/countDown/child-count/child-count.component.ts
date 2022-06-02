import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-count',
  templateUrl: './child-count.component.html',
  styleUrls: ['./child-count.component.scss']
})
export class ChildCountComponent implements OnInit {
  @Input() Name;  
  @Output() getResponse = new EventEmitter; 
  constructor() { }

  ngOnInit() {
    this.getResponse.emit('Message from child'); 
  }

}
