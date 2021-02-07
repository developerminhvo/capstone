import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  type: string = "hocba";
  diemToHop: any = null;
  constructor() { }

  ngOnInit(): void {
  }

  chonLoaiDiem(type): void {
    this.type = type;    
  }
  
  layDiemToHop(diemToHop): void {
    this.diemToHop = diemToHop;    
  }
  current = 0;

  index = 'First-content';

  quayLai(): void {
    this.current -= 1;    
  }

  tiepTuc(): void {
    this.current += 1;    
  }

  hoanThanh(): void {
    console.log('done');
  }
  

}
