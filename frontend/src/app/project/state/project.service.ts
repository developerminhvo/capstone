import { Injectable } from '@angular/core';
import { ProjectStore } from './project.store';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _store: ProjectStore) { }

  setLoading(isLoading: boolean){
    this._store.setLoading(isLoading);
  }
}
