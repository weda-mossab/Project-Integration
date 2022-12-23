import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormControl, FormGroup, Validators } from '@angular/forms';
=======
import { FormControl, FormGroup } from '@angular/forms';
import { Event } from 'src/app/event';
>>>>>>> a11efdb (FIX)
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})

export class AddEventComponent implements OnInit {

  constructor(private eventService: EventService) {}
  event:Event= new Event()
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

<<<<<<< HEAD
  eventsaveform=new FormGroup({
    student_name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    student_email:new FormControl('',[Validators.required,Validators.email]),
    student_branch:new FormControl()
  });

  saveEvent(saveEvent){
    this.event=new Student();
    this.event.student_name=this.StudentName.value;
    this.student.student_email=this.StudentEmail.value;
    this.student.student_branch=this.StudentBranch.value;
    this.submitted = true;
    this.save();
  }
=======
  // event: Event= new Event();
  // eventsaveform=new FormGroup({
  //   student_name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
  //   student_email:new FormControl('',[Validators.required,Validators.email]),
  //   student_branch:new FormControl()
  // });

  // saveEvent(saveEvent){
    // this.event=new Event();
    // this.event.student_name=this.StudentName.value;
    // this.student.student_email=this.StudentEmail.value;
  //   this.student.student_branch=this.StudentBranch.value;
  //   this.submitted = true;
  //   this.save();
  // }
>>>>>>> a11efdb (FIX)

  // save() {
  //   this.studentservice.createStudent(this.student).subscribe(data => console.log(data), error => console.log(error));
  //   this.student = new Student();
  // }

  // get StudentName(){
  //   return this.studentsaveform.get('student_name');
  // }

  // get StudentEmail(){
  //   return this.studentsaveform.get('student_email');
  // }

  // get StudentBranch(){
  //   return this.studentsaveform.get('student_branch');
  // }

  // addStudentForm(){
  //   this.submitted=false;
  //   this.studentsaveform.reset();
  // }

  onFileSelected(image : Event): void{

  }


}
