import { Component, ViewEncapsulation } from '@angular/core';
import { ProjectQuery } from './project/state/project.query';
import { ProjectService } from './project/state/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'frontend';

  constructor(
    public projectQuery: ProjectQuery,
    private _projectService: ProjectService,
  ){
    this._projectService.setLoading(true);
  }
}
