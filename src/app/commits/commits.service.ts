import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

export interface Commit {
  sha: string;
  node_id: string;
  commit: any;
  committer: any;
}

@Injectable({
  providedIn: 'root'
})
export class CommitsService {
  private commits: Commit[] = [];

  constructor(private httpClient: HttpClient) { }

  setCommits(commits: Commit[]): void {
    this.commits = commits;
  }

  getCommits(): Commit[] {
    return [...this.commits];
  }

  getCommit(sha: string): Commit {
    const commit = this.commits.find(commitItem => commitItem.sha === sha);
    return commit;
  }

  fetchCommits(page: number = 1): Observable<Commit[]> {
    return this.httpClient
    .get<Commit[]>(`https://api.github.com/repos/angular/material/commits?page=${page}`)
    .pipe(
      tap( commits => this.setCommits(commits))
    );
  }
}
