import { Component, OnChanges, OnInit, Output, SimpleChanges, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit, OnChanges {

  @Input() typeInput: string;
  @Output() type = new EventEmitter();
  radioValue: string = "hocba";
  constructor() { }

  getType(): void {
    this.type.emit(this.radioValue);
  }
  ngOnInit(): void {       
  }

  ngOnChanges(changes: SimpleChanges){
    this.radioValue = this.typeInput;
  }
}
