import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggest-result',
  templateUrl: './suggest-result.component.html',
  styleUrls: ['./suggest-result.component.scss']
})
export class SuggestResultComponent implements OnInit {

  @Input() diemToHop: any = null;
  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.diemToHop);
  }

  
}
