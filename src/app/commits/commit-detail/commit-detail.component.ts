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
  message: { header: string, body: string } = { header: '', body: ''};

  constructor(private commitsService: CommitsService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.sha = params.sha;
        this.commit = this.commitsService.getCommit(this.sha);
        const messageArray = this.commit.commit.message.split(new RegExp('\n', 'g'));
        this.message.header = messageArray[0];
        const bodyArray = messageArray.slice(2);
        this.message.body = bodyArray.join('<br />');
      }
    );
  }
}
