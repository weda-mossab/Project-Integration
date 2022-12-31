import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService_Student } from 'src/app/services/event.service_student';
import { Event_student } from 'src/app/services/Event_student';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.css']
})
export class ShowEventComponent {
  constructor(private eventService_Student: EventService_Student ,private route: ActivatedRoute) {}
  id: string ="";
  Event !: Event_student  ;

    ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {

      this.eventService_Student.getEvent(params['id']).subscribe(data=>{
        this.Event=data;

      })
   });

  }

  sub: any;

}

