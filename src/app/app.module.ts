import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CommitsComponent } from './commits/commits.component';
import { CommitStartComponent } from './commits/commit-start/commit-start.component';
import { CommitDetailComponent } from './commits/commit-detail/commit-detail.component';
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommitListComponent } from './commits/commit-list/commit-list.component';
import { CommitItemComponent } from './commits/commit-list/commit-item/commit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CommitsComponent,
    CommitStartComponent,
    CommitDetailComponent,
    CommitListComponent,
    CommitItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
