import { Component ,OnInit} from '@angular/core';

import {FormBuilder, FormGroup} from "@angular/forms";
// import { Event, Event } from 'src/app/event';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/services/event.service';

import { Student } from 'src/app/services/Student';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private students?:  Student[];
  constructor(private eventService: EventService ) {}
  ngOnInit(): void {
   
    this.eventService.getParticipta("Event2").subscribe(data => {
   
      this.Students=data;

    })

}

  Students: Student[] = [];
  searchText: string = '';




onSearchTextEntered(searchValue: string){
this.searchText=searchValue;
console.log(this.searchText)
}

}
