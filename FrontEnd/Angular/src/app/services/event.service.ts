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
  private eventsUrl = 'localhost:8090/';  // URL to web api

  constructor(
    private http: HttpClient
    ) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl)
    .pipe(
      catchError(this.handleError<Event[]>('getHeroes', []))
    );
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
}

