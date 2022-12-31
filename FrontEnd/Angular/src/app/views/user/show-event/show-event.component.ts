import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService_Student } from 'src/app/services/event.service_student';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.css']
})
export class ShowEventComponent {
  constructor(private eventService_Student: EventService_Student ,private route: ActivatedRoute) {}
  id: string ="";

    ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
   });
  }

  sub: any;

}

