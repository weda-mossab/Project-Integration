import { Component } from '@angular/core';
import { EventService_Student } from 'src/app/services/event.service_student';
import { Event_student } from 'src/app/services/Event_student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent {
  Events: Event_student[] = [];
  constructor(private eventService_Student: EventService_Student ,private route: ActivatedRoute) {}

  ngOnInit(): void {

      this.eventService_Student.getEvents().subscribe(data => {
        this.Events=data
        console.log(this.Events)
      })

 
    }

  }
