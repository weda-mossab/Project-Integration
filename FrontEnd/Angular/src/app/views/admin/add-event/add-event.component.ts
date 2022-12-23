import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { EventElemnt } from '../../../services/EventElemnt';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})

export class AddEventComponent implements OnInit {

  constructor(private eventService: EventService) {}


  ngOnInit(): void {
  
  }


  eventsaveform=new FormGroup({
    student_name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    student_email:new FormControl('',[Validators.required,Validators.email]),
    student_branch:new FormControl()
  });

  saveEvent(_savestudent: any){


  }
=======
  // eventsaveform=new FormGroup({
  //   student_name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
  //   student_email:new FormControl('',[Validators.required,Validators.email]),
  //   student_branch:new FormControl()
  // });

  // saveEvent(saveEvent){
  //   this.event=new Student();
  //   this.event.student_name=this.StudentName.value;
  //   this.student.student_email=this.StudentEmail.value;
  //   this.student.student_branch=this.StudentBranch.value;
  //   this.submitted = true;
  //   this.save();
  // }


  // eventsaveform=new FormGroup({
  //   student_name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
  //   student_email:new FormControl('',[Validators.required,Validators.email]),
  //   student_branch:new FormControl()
  // });
/*
  saveEvent(saveEvent){
    this.event=new Student();
    this.event.student_name=this.StudentName.value;
    this.student.student_email=this.StudentEmail.value;
    this.student.student_branch=this.StudentBranch.value;
    this.submitted = true;
    this.save();
  }
*/
>>>>>>> 7d819fda1f766d7474398ffa042494392248a304

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

}
