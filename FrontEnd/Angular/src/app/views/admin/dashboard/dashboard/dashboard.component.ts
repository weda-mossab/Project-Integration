import { Component ,OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { Observable } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import { Student } from 'src/app/services/Student';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private students?:  Student[];
  constructor(private eventService: EventService,private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
    this.eventService.getParticipta(params['id']).subscribe(data => {
      this.Students=data;
      console.log(data)

    })
  });



 }

  // getParticipta():void {
  //   this.eventService.getParticipta()
  //   .subscribe(events => this.Students = students);
  // }
  Students: Student[] = [];
  searchText: string = '';

onSearchTextEntered(searchValue: string){
this.searchText=searchValue;
console.log(this.searchText)
}
sub: any;
}
