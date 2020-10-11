import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Commit, CommitsService } from './commits.service';

@Injectable({ providedIn: 'root' })
export class CommitsResolverService implements Resolve<Commit> {
  constructor(private commitsService: CommitsService) {}

  resolve(route: ActivatedRouteSnapshot): any {
    const sha = route.params.sha;
    const commit = this.commitsService.getCommit(sha);

    if (!commit || commit.sha !== route.params.sha) {
      return this.commitsService.fetchCommit(sha);
    } else {
      return commit;
    }
  }
}
