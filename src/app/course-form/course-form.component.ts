import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent{

submit(myForm: any) {
  console.log(myForm.value.firstName)
  }

 contactMethod = [
  {id: 1, name: 'Email'},
  {id: 2, name: 'Phone'},
  {id:3, name: 'Mail'}
 ]

}
