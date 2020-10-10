import { Component, OnInit } from '@angular/core';
import { Commit, CommitsService } from './commits.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'commit-app';
  commits: Commit[];

  constructor(private commitService: CommitsService) {}

  ngOnInit(): any {
    this.showCommits();
  }

  showCommits(): any{
    this.commitService.getCommits()
      .subscribe((data: Commit[]) => {
        this.commits = { ...data };
        console.log('commits:', this.commits);
      });
  }
}
