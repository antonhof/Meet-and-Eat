import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Workspace } from '../_models/workspace';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseWorkspaceService {
  workspacesRef: AngularFireList<Workspace>;
  workspaces$: Observable<Workspace[]>;
  workspace$: Observable<Workspace>;
  workspaces: Workspace[];

  constructor(private db: AngularFireDatabase) {
    this.workspacesRef = db.list('/workspaces');
    this.workspaces$ = this.workspacesRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
    );
    this.workspaces$.forEach(workspaces => {
      this.workspaces = workspaces;
    });
  }

  getAll() {
    return this.workspaces$;
  }

  getWorkspace(key: string) {
    return this.db.object('/workspaces/' + key).valueChanges();
  }

  getWorkspaceByName(name: string) {
    return this.workspaces.find(function(workspace) {
      return name === workspace.name;
    });
  }

  create(name: string) {
    let w: Workspace;
    w = {name: name, restaurantList: null, userList: null};
    this.workspacesRef.push(w);
  }

  delete(key: string) {
    this.workspacesRef.remove(key);
  }
}
