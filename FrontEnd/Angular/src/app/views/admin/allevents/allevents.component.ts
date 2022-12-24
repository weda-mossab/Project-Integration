import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/services/Event';
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


  currentPage:number=0;
  pageSize: number=5;
  totalPages: number=0;
  errorMessage!: string;
  searchFormGroup!:FormGroup;
  currentAction: string="all";



  constructor(private eventService: EventService ,private fb: FormBuilder) {}


  ngOnInit(): void {
   
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

title='pagination';
POSTS :any;
page:number =1;
count : number =0;
tableSize:number =2;
tableSizes :any= [1,2,3,4,5];

onTableDataChange(event:any){
  this.page= event;
  this.getEvents();
}

onTableSizeChange(event:any):void{
this.tableSize=event.target.value;
this.page=1;
this.getEvents();
}

}

