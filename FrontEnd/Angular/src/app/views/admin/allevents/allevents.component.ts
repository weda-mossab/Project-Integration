import { Component, OnInit } from '@angular/core';
import { Event } from '../../../services/Event';
import { EventService } from '../../../services/event.service';
import {FormBuilder, FormGroup} from "@angular/forms";
// import { Event, Event } from 'src/app/event';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-allevents',
  templateUrl: './allevents.component.html',
  styleUrls: ['./allevents.component.css']
})

export class AlleventsComponent implements OnInit {
  Events: Event[] = [];
  // evt:Observable<Event[]>;

  currentPage:number=0;
  pageSize: number=5;
  totalPages: number=0;
  errorMessage!: string;
  searchFormGroup!:FormGroup;
  currentAction: string="all";



  constructor(private eventService: EventService ,private fb: FormBuilder) {}


  ngOnInit(): void {
    // this.getEvents();
      this.eventService.getEvents().subscribe(data => {
        this.Events=data;

      })

  }

  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.Events = events);
  }

  deleteEvent(id: string) {
    this.eventService.deleteEvent(id)
      .subscribe(
        data => {
          console.log(data);
          // this.deleteMessage=true;
          this.eventService.getEvents().subscribe(data =>{
            this.Events =data
            })
        },
        error => console.log(error));
  }



//   constructor(private http: HttpClient){}

//   ngOnInit() {
//     let url= "http://localhost:8090/api/"
//     this.http.get<any>(url).toPromise().then(res => {
//     console.log(res);
//     });
// }

// search
searchText: string = '';

onSearchTextEntered(searchValue: string){
this.searchText=searchValue;
console.log(this.searchText)
}
// pagination:



/*
   handlegetPageProducts(){
    this.eventService.getPageEvents(this.currentPage,this.pageSize).subscribe({
      next:(data )=>{
        this.Events=data.Events;
        this.totalPages=data.totalPages;
      },
      error:(err)=> {
        this.errorMessage=err;
      }
    });
  }
*/





}

