import { Injectable } from '@angular/core';
import { Event } from './Event';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { PageEvent } from '../model/event.model';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsUrl = "http://localhost:8090/api/";  // URL to web api
  private Events!:Array<Event>;

  constructor(private http: HttpClient) {}

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
    return this.http.get<Event[]>(this.eventsUrl).pipe(catchError(this.handleError<Event[]>('getEvents', [])));
  }

  createEvent(Event: object): Observable<object> {
    return this.http.post(`${this.eventsUrl}`+'save', Event);
  }

  deleteEvent(id: string): Observable<any> {
    return this.http.delete(`${this.eventsUrl}`+'delete/'+id, { responseType: 'text' });
  }

  getEvent(id: string): Observable<Object> {
    return this.http.get(`${this.eventsUrl}/${id}`);
  }

  updateStudent(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.eventsUrl}update/` + id, value);
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

