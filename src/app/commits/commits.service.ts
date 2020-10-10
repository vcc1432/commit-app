import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Commit {
  sha: string;
  node_id: string;
  commit: any;
}

@Injectable({
  providedIn: 'root'
})
export class CommitsService {

  constructor(private httpClient: HttpClient) { }

  getCommits(): Observable<Commit[]> {
    return this.httpClient
    .get<Commit[]>('https://api.github.com/repos/angular/material/commits');
  }
}
