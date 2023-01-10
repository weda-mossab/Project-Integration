import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { EventService_Student } from 'src/app/services/event.service_student';
import { Event_student } from 'src/app/services/Event_student';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.css']
})
export class ShowEventComponent {
  constructor(public eventService_Student: EventService_Student ,private route: ActivatedRoute,private sanitizer: DomSanitizer) {}
  id: string ="";
  Event !: Event_student  ;

    ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {

      this.eventService_Student.getEvent(params['id']).subscribe(data=>{
        console.log(data)
        this.Event=data;
        console.log(data.avatar.split('/'))
        this.Event.avatar="http://localhost:8090/"+data.avatar.split('/')[data.avatar.split('/').length-1].replace("public","")


      })
   });



  }
 public registerStudent(){
    this.eventService_Student.registerStudent(this.Event._id).subscribe(()=>{
      console.log("done")
    })
    this.Event.Notparticipated=!this.Event.Notparticipated
  }


  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
}

  sub: any;

}

