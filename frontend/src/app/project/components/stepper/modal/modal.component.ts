import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() isVisible = false;  
  @Output() test: EventEmitter<string> = new EventEmitter();
  isConfirmLoading = false;

  radioValue: string = "mean";
  constructor() { }

  ngOnInit(): void {
  }  

  handleOk(){
    this.test.emit(this.radioValue);
  }
}
