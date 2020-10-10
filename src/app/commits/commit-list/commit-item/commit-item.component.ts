import { Commit } from './../../commits.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commit-item',
  templateUrl: './commit-item.component.html',
  styleUrls: ['./commit-item.component.scss']
})
export class CommitItemComponent implements OnInit {
  @Input() commit: Commit;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
    console.log('commit:', this.commit);
  }

}
