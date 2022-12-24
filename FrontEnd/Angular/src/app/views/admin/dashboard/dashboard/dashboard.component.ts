import { Component ,OnInit} from '@angular/core';

import {FormBuilder, FormGroup} from "@angular/forms";
// import { Event, Event } from 'src/app/event';
import { Observable } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/services/Student';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  Students: Student[] = [];
  searchText: string = '';

onSearchTextEntered(searchValue: string){
this.searchText=searchValue;
console.log(this.searchText)
}

}
