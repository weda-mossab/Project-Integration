import { Injectable } from '@angular/core';
import { Event } from './Event';
import { Events } from './mock-events';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsUrl = "http://localhost:8090/api/";  // URL to web api

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

  deleteEvent(id: number): Observable<any> {
    return this.http.delete(`${this.eventsUrl}/delete`, { responseType: 'text' });
  }

  getEvent(id: number): Observable<Object> {
    return this.http.get(`${this.eventsUrl}/${id}`);
  }

  updateStudent(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.eventsUrl}/update`, value);
  }

}

