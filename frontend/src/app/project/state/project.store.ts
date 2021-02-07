import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { JProject } from '../interface/project';

export interface ProjectState extends JProject{
  key: string;
}

export function createInitialState(): ProjectState {
  return {
    issues: [],
    users: []
  } as ProjectState;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'project' })
export class ProjectStore extends Store<ProjectState> {

  constructor() {
    super(createInitialState());
  }

}
