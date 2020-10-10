import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitStartComponent } from './commit-start.component';

describe('CommitStartComponent', () => {
  let component: CommitStartComponent;
  let fixture: ComponentFixture<CommitStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
