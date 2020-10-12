import { Component, OnInit } from '@angular/core';
import { CommitsService, Commit } from '../commits.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.scss']
})
export class CommitListComponent implements OnInit {
  commits: Commit[] = [];
  page: number;
  showPrevious: boolean;
  clicked: boolean;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  month: string;
  today: string;
  tomorrow: string;
  firstDay: string;

  constructor(private commitService: CommitsService) {
    this.page = 1;
    this.showPrevious = false;
    this.clicked = false;

    const date = new Date();  // 2009-11-10
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const tomorrow = new Date(date);
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.tomorrow = tomorrow.toISOString();
    this.firstDay = firstDay.toISOString();
    this.today = date.toISOString();
    this.month = date.toLocaleString('default', { month: 'long' });
  }

  ngOnInit(): void {

    this.showCommits(this.page);
  }

  showCommits(page): any{
    const range = this.determineDateRange();

    this.commitService.fetchCommits(page, range.start, range.end)
      .subscribe((data: Commit[]) => {
        if (data && data.length > 0) {
          this.commits = [ ...data ];
        } else {
          this.commits = [];
        }
        this.clicked = false;
      });
  }

  determineDateRange(): any {
    if (!this.range.value.start && !this.range.value.end) {
      const newRange: { start: string, end: string} = {
        start: this.firstDay,
        end: this.today
      };
      return newRange;
    } else {
      if (this.range.value.start) {
        this.range.value.start = this.range.value.start.toISOString();
      }
      if (this.range.value.end) {
        this.range.value.end = this.range.value.end.toISOString();
      }
      return this.range.value;
    }
  }

  getNext(): void {
    this.page ++;
    if (this.page > 1) {
      this.showPrevious = true;
    }
    this.clicked = true;
    this.showCommits(this.page);
  }

  getPrevious(): void {
    this.page --;
    if (this.page < 2) {
      this.showPrevious = false;
    }
    this.clicked = true;
    this.showCommits(this.page);
  }

  onDateChange(event: any): void {
    console.log('range: ', this.range);
    this.showCommits(1);
  }
}
