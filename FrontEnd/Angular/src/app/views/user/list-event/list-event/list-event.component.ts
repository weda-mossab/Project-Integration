import { Component } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/services/Event';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent {
  Events: Event[] = [];
  constructor(private eventService: EventService ) {}

  ngOnInit(): void {
      this.eventService.getEvents().subscribe(data => {
        this.Events=data;
      })

    }

}
