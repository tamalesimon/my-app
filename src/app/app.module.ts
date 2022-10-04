import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseComponent } from './courses.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CoursesService } from './courses.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SummaryPipe } from './summary.pipe';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './posts/post.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ZippyComponent } from './zippy/zippy.component';
import { LikeComponent } from './like/like.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent, //component definition and registration
    CourseComponent,
    CourseFormComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostsComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    NotFoundComponent,
    ZippyComponent,
    LikeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'followers', component: GithubFollowersComponent},
      {path:'profile/:username', component: GithubProfileComponent},
      {path:'posts', component: PostsComponent},
      {path:'**', component: NotFoundComponent}
    ])
  ],
  providers: [
    CoursesService, //dependency injection registration
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
