import { Commit } from './../../commits.service';
import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-commit-item',
  templateUrl: './commit-item.component.html',
  styleUrls: ['./commit-item.component.scss']
})
export class CommitItemComponent implements OnInit, OnChanges {
  @Input() commit: Commit;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.commit && changes.commit.currentValue && changes.commit.currentValue.sha) {
      this.commit.commit.message = this.commit.commit.message.split(new RegExp('\n', 'g'))[0];
    }
  }

}
