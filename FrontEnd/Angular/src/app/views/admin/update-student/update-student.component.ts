import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {
  constructor(private studentService: StudentService ,private route: ActivatedRoute) {}
  id: string ="";

  ngOnInit() {
  this.sub = this.route.params.subscribe(params => {
     this.id = params['id'];
  });
}

 sub: any;
studentupdateform=new FormGroup({
  name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
  date:new FormControl('',[Validators.required,Validators.email]),
  description:new FormControl()
});

updateEvent(){
  this.studentService.updateStudent(this.id,this.studentupdateform.value).subscribe({
    next:(data)=>{
  alert("Event   added successfully")
      this.studentupdateform.reset();
    }, error:err => {
  console.log(err);
    }
  })
}



}

