import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CommitsComponent } from './commits/commits.component';
import { CommitStartComponent } from './commits/commit-start/commit-start.component';
import { CommitDetailComponent } from './commits/commit-detail/commit-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CommitsComponent,
    CommitStartComponent,
    CommitDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
