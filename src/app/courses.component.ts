import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
})
export class CourseComponent {
  title;
  courses: any;

  constructor(service: CoursesService) { //dependency injection in the constructor
    this.title = service.getTitle();
  }
  onAdd() {
    this.courses.push({id:6, name: 'C#'});
}
  onRemove(course: any) {
    let idx = this.courses.indexOf(course);
    this.courses.splice(idx, 1);
  }

  loadCourses() {
    this.courses = [
      {id:1, name: 'JavaScript'},
      {id:2, name: 'Java'},
      {id:4, name: 'GoLang'},
      {id:5, name: 'Rust'}
    ]
   }

   trackCourse(index:number, course:any) {
      return course ? course.id : undefined;
   }
}
