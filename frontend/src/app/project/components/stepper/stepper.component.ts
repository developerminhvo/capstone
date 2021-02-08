import { Component, OnInit, ViewChild } from '@angular/core';
import { ScoreComponent } from './score/score.component';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  isVisible: boolean = false;
  type: string = "hocba";
  diemToHop: any = null;

  @ViewChild(ScoreComponent) scoreComponent: ScoreComponent;

  resultValue: string;
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

  handleModal(rs: string) {
    this.resultValue = rs;
    this.isVisible = false;
    this.current = 2;  
    console.log(this.scoreComponent.getScore());  
  }

  tiepTuc(): void {
    // this.current += 1;    
    if (this.current == 1) {
      this.isVisible = true;
    } else {
      this.current += 1;
    }
  }

  hoanThanh(): void {
    console.log('done');
  }
  

}
