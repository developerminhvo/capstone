import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { KhoiA, KhoiB } from 'src/assets/subject';


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  @Input() type: string;
  @Output() layDiemToHop = new EventEmitter();
  validateForm!: FormGroup;
  controlArray: Array<{ index: number; show: boolean, value: string }> = [];
  isCollapse = true;
  hocba: string[] = [
    "Toán", "Vật lí", "Hóa học", "Sinh học", "Lịch sử", "Địa lí", "Ngữ Văn", "Tin học", "Công nghệ", "GDCD", "Tiếng Anh",
  ];
  thpt: string[] = [
    "Toán", "Vật lí", "Hóa học", "Sinh học", "Lịch sử", "Địa lí", "Ngữ Văn", "Tiếng Anh", "GDCD",
  ];
  subjects: string[] = null;
  
  diemKhoiA: number = null;  
  diemKhoiB: number = null;
  toan: number = null;
  li: number = null;
  hoa: number = null;
  sinh: number = null;
  tiengAnh: number = null;
  lichSu: number = null;
  diaLi: number = null;
  handleSubject(){
    if (this.type == "thpt") {
      this.subjects = this.thpt;
    }
    if (this.type == "hocba") {
      this.subjects = this.hocba;
    }
  }
  resetForm(): void {
    this.validateForm.reset();
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.type);
    this.handleSubject();    
    this.validateForm = this.fb.group({});
    for (let i = 0; i < this.subjects.length; i++) {
      this.controlArray.push({ index: i, show: i < 12, value: this.subjects[i] });      
      this.validateForm.addControl(`${this.subjects[i]}`, new FormControl());
    }
    
  }
  

  getScore(): void {    
    this.diemKhoiA = parseFloat(this.validateForm.value["Toán"]) + parseFloat(this.validateForm.value["Vật lí"]) + parseFloat(this.validateForm.value["Hóa học"])
    this.diemKhoiB = parseFloat(this.validateForm.value["Toán"]) + parseFloat(this.validateForm.value["Hóa học"]) + parseFloat(this.validateForm.value["Sinh học"])    
    this.layDiemToHop.emit({diemKhoiA: this.diemKhoiA, diemKhoiB: this.diemKhoiB, subjects: this.validateForm.value});
  }
}
