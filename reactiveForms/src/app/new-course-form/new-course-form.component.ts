import { Component, OnInit } from '@angular/core';
import {FormArray, FormGroup, FormControl, AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {
  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  get topics () {
    return this.form.get('topics') as FormArray
  }

  ngOnInit(): void {
  }

  removeTopic(topic: AbstractControl) {
    this.topics.removeAt(this.topics.controls.indexOf(topic));
  }
}
