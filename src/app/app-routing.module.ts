import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommitsComponent } from './commits/commits.component';
import { CommitStartComponent } from './commits/commit-start/commit-start.component';
import { CommitDetailComponent } from './commits/commit-detail/commit-detail.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/commits', pathMatch: 'full'},
  {path: 'commits', component: CommitsComponent, children: [
    { path: '', component: CommitStartComponent },
    { path: ':sha', component: CommitDetailComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
