import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgDefinationsComponent } from './svg-definations/svg-definations.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { AvatarComponent } from './avatar/avatar.component';

const JiraControlComponents = [
  SvgIconComponent,  
  AvatarComponent,
  SvgDefinationsComponent
];


@NgModule({
  declarations: JiraControlComponents,
  exports: JiraControlComponents,
  imports: [
    CommonModule
  ]
})
export class JiraControlModule { }
