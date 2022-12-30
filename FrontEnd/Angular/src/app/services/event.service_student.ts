import { Injectable } from '@angular/core';
import { Event } from './Event';
import {OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { PageEvent } from '../model/event.model';
import { AuthService } from '../auth/service/auth.service';
import { Event_student } from './Event_student';


@Injectable({
  providedIn: 'root'
})
export class EventService  {
  private eventsUrl = "http://localhost:3000/api/";  // URL to web api
  private Events!:Array<Event_student>;


   headers = new HttpHeaders({

    'Authorization': `Bearer ${this.authService.getToken()}`
  });
  constructor(private http: HttpClient,private authService : AuthService) {
   
  }

  getEvents(): Observable<Event_student[]> {
    return this.http.get<Event_student[]>(this.eventsUrl,{headers:this.headers});
  }



  registerStudent(id: string): Observable<Object> {
    return this.http.post(`${this.eventsUrl}/` + id, {headers:this.headers});
  }


}

