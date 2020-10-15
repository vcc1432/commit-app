import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

export interface Commit {
  sha: string;
  node_id: string;
  commit: any;
  committer: any;
  author: any;
}

@Injectable({
  providedIn: 'root'
})
export class CommitsService {
  private commits: Commit[] = [];
  private commit: Commit;

  constructor(private httpClient: HttpClient) { }

  setCommits(commits: Commit[]): void {
    this.commits = commits;
  }

  setCommit(commit: Commit): void {
    this.commit = commit;
  }

  getCommits(): Commit[] {
    return [...this.commits];
  }

  getCommit(sha: string): Commit {
    if (!this.commit || this.commit.sha !== sha) {
      this.commit = this.commits.find(commitItem => commitItem.sha === sha);
    }
    return {...this.commit};
  }

  fetchCommits(page: number = 1, since, until): Observable<Commit[]> {
    let baseUrl = `https://api.github.com/repos/angular/material/commits?page=${page}`;
    if (since){
      baseUrl += `&since=${since}`;
    }
    if (until) {
      baseUrl += `&until=${until}`;
    }

    return this.httpClient
    .get<Commit[]>(baseUrl)
    .pipe(
      tap( commits => this.setCommits(commits))
    );
  }

  fetchCommit(sha: string): Observable<Commit> {
    return this.httpClient
    .get<Commit>(`https://api.github.com/repos/angular/material/commits/${sha}`)
    .pipe(
      tap( commit => {
        this.setCommit(commit);
      })
    );
  }
}
