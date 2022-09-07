import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
form: FormGroup<{ name: FormControl<string | null>; contact: FormGroup<{ email: FormControl<null>; phone: FormControl<null>; }>; topics: FormArray<FormControl<unknown>>; }>;
constructor(fb:FormBuilder) {
  this.form = fb.group({
    name: ['', Validators.required],
    contact: fb.group({
      email: [],
      phone: []
    }),
    topics: fb.array([])
  });
}

addTopic(topic: HTMLInputElement ){
 this.topics.push(new FormControl(topic.value));
 console.log(topic.value);
 topic.value = '';
}

removeTopic(topic: AbstractControl) {
  let idx = this.topics.controls.indexOf(topic);
  this.topics.removeAt(idx);
}

get topics() {
  return this.form.get('topics') as FormArray
}

}
