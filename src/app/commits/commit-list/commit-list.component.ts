import { Component, OnInit } from '@angular/core';
import { CommitsService, Commit } from '../commits.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.scss']
})
export class CommitListComponent implements OnInit {
  commits: Commit[];
  page: number;
  showPrevious: boolean;
  clicked: boolean;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(private commitService: CommitsService) {
    this.page = 1;
    this.showPrevious = false;
    this.clicked = false;
  }

  ngOnInit(): void {
    this.showCommits(this.page);
  }

  showCommits(page): any{
    this.commitService.fetchCommits(page)
      .subscribe((data: Commit[]) => {
        this.commits = [ ...data ];
        this.clicked = false;
      });
  }

  getNext(): void {
    console.log('next');
    this.page ++;
    if (this.page > 1) {
      this.showPrevious = true;
    }
    this.clicked = true;
    this.showCommits(this.page);
  }

  getPrevious(): void {
    console.log('prev');
    this.page --;
    if (this.page < 2) {
      this.showPrevious = false;
    }
    this.clicked = true;
    this.showCommits(this.page);
  }

}
