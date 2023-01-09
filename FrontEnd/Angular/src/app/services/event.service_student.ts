import { Injectable } from '@angular/core';


import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from '../auth/service/auth.service';
import { Event_student } from './Event_student';
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class EventService_Student  { 
  private eventsUrl = "http://localhost:3000/";  // URL to web api
  headers = new HttpHeaders({
    'Authorization':`Bearer ${this.authService.getToken()}`
  });


  constructor(private http: HttpClient,private authService : AuthService) {}

  getEvents(): Observable<Event_student[]> {
    return this.http.get<Event_student[]>(this.eventsUrl,{headers:this.headers});
  }



  getEvent(id : String): Observable<Event_student> {
    return this.http.get<Event_student>(this.eventsUrl+id,{headers:this.headers});
  }

  registerStudent(id: string): Observable<Object> {
    return this.http.post(`${this.eventsUrl}` + id, {headers:this.headers});
  }


}

