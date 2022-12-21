import { Component, OnInit } from '@angular/core';
import { Event } from '../../../services/Event';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-allevents',
  templateUrl: './allevents.component.html',
  styleUrls: ['./allevents.component.css']
})

export class AlleventsComponent implements OnInit {
  Events: Event[] = [];
  constructor(private eventService: EventService) {}

  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.Events = events);
  }
  ngOnInit(): void {
    this.getEvents();
  }
//   constructor(private http: HttpClient){}

//   ngOnInit() {
//     let url= "http://localhost:8090/api/"
//     this.http.get<any>(url).toPromise().then(res => {
//     console.log(res);
//     });
// }

searchText: string = '';

onSearchTextEntered(searchValue: string){
this.searchText=searchValue;
console.log(this.searchText)
}


}

