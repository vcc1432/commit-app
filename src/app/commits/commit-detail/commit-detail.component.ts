import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CommitsService, Commit } from './../commits.service';


@Component({
  selector: 'app-commit-detail',
  templateUrl: './commit-detail.component.html',
  styleUrls: ['./commit-detail.component.scss']
})
export class CommitDetailComponent implements OnInit {
  sha: string;
  commit: Commit;

  constructor(private commitsService: CommitsService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.sha = params.sha;
        this.commit = this.commitsService.getCommit(this.sha);
        this.commit.commit.message = this.commit.commit.message.replace(new RegExp('\n', 'g'), '<br />');
      }
    );
  }
}
