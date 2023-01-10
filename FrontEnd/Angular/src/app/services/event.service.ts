import { Injectable } from '@angular/core';
import { Event } from './Event';
import {OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { PageEvent } from '../model/event.model';
import { AuthService } from '../auth/service/auth.service';
import { Student } from './Student';


@Injectable({
  providedIn: 'root'
})
export class EventService  {
  private eventsUrl = "http://localhost:8090/api/";  // URL to web api
  private Events!:Array<Event>;


   headers = new HttpHeaders({

    'Authorization': `Bearer ${this.authService.getToken()}`
  });
  constructor(private http: HttpClient,private authService : AuthService) {

  }








  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



  getEvents(): Observable<Event[]> {

    return this.http.get<Event[]>(this.eventsUrl,{headers:this.headers});
  }

  createEvent(Event: object): Observable<Event> {
    return this.http.post<Event>(`${this.eventsUrl}`+'save', Event, {headers:this.headers});
  }

  deleteEvent(id: string): Observable<any> {
    return this.http.delete(`${this.eventsUrl}`+'delete/'+id, {headers:this.headers});
  }

  getEvent(id: string): Observable<Event> {
    return this.http.get<Event>(`${this.eventsUrl}${id}`, {headers:this.headers});
  }




  getParticipta(id: string): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.eventsUrl}users/${id}`, {headers:this.headers});
  }
  updateEvent(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.eventsUrl}update/` + id, value, {headers:this.headers});
  }



  upload(file:any,id:String):Observable<any> {
   const formData = new FormData();
    formData.append("file", file, file.name);
    return this.http.post(`${this.eventsUrl}uplode/`+id, formData)
    }


/*
  public getPageEvents(page:number,size:number) : Observable<PageEvent>{
    let index=page*size;
    let totalPages= ~~(this.Events.length/size);
    if(this.Events.length % size != 0)
      totalPages++;
   let pageEvents= this.Events.slice(index,index+size);

    return of({page:page, size:size, totalPages:totalPages, Events:pageEvents});

  }*/
}

