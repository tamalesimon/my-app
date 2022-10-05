import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GithubFollowersComponent } from './github-followers.component';

describe('GithubFollowersComponent', () => {
  let component: GithubFollowersComponent;
  let fixture: ComponentFixture<GithubFollowersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubFollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
