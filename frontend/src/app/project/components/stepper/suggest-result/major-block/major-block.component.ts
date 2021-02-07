import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-major-block',
  templateUrl: './major-block.component.html',
  styleUrls: ['./major-block.component.scss']
})
export class MajorBlockComponent implements OnInit {

  @Input() backgroundColor: string = "red";
  @Input() color: string = "blue";
  @Input() name: string;

  a = "red";

  constructor() { }

  ngOnInit(): void {
    console.log(this.backgroundColor);    
    console.log(this.color)    
  }

}
