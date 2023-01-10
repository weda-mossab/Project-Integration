import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent {
  constructor(private eventService: EventService ,private route: ActivatedRoute) {}
   id: string ="";
   sub: any;
    private file?: File ;

    ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
    });
  }


  eventupdateform=new FormGroup({
    name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    date:new FormControl('',[Validators.required,Validators.email]),
    description:new FormControl()
  });

  updateEvent(){
    this.eventService.updateEvent(this.id,this.eventupdateform.value).subscribe({
      next:(data)=>{
        this.eventService.upload(this.file,this.id).subscribe({
          next:()=>{
            alert("image uploded")
          }
        })
       alert("Event added successfully")
        this.eventupdateform.reset();
      }, error:err => {
    console.log(err);
      }
    })
  }

   onChange(event:any) {

            this.file = event.target.files[0];
        }
      




}
