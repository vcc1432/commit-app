import { Component, OnInit } from '@angular/core';
import { CommitsService, Commit } from '../commits.service';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.scss']
})
export class CommitListComponent implements OnInit {
  commits: Commit[];

  constructor(private commitService: CommitsService) { }

  ngOnInit(): void {
    this.showCommits();
  }

  showCommits(): any{
    this.commitService.getCommits()
      .subscribe((data: Commit[]) => {
        this.commits = [ ...data ];
        console.log('commits:', this.commits);
      });
  }
}
