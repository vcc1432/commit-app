import { Component, OnInit } from '@angular/core';
import { Commit, CommitsService } from './commits/commits.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'commit-app';

  constructor() {}
}
