import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { NavigationComponent } from './components/navigation/navigation/navigation.component';
import { NavbarLeftComponent } from './components/navigation/navbar-left/navbar-left.component';
import { ResizerComponent } from './components/navigation/resizer/resizer.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { JiraControlModule } from '../jira-control/jira-control.module';
import { StepperComponent } from './components/stepper/stepper.component';
import { NgZorroAntdModule } from '../core/ng-zorro-antd/ng-zorro-antd.module';
import { TypeComponent } from './components/stepper/type/type.component';
import { ScoreComponent } from './components/stepper/score/score.component';
import { SuggestResultComponent } from './components/stepper/suggest-result/suggest-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MajorBlockComponent } from './components/stepper/suggest-result/major-block/major-block.component';
import { ModalComponent } from './components/stepper/modal/modal.component';



@NgModule({
  declarations: [ProjectComponent, NavigationComponent, NavbarLeftComponent, ResizerComponent, SidebarComponent, StepperComponent, TypeComponent, ScoreComponent, SuggestResultComponent, MajorBlockComponent, ModalComponent],
  imports: [
    CommonModule,  
    ProjectRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    JiraControlModule,
    NgZorroAntdModule    
  ]
})
export class ProjectModule { }
