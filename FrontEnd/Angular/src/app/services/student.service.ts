import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './Student';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsUrl = "http://localhost:8091/api/";  // URL to web api
  private Student!:Array<Student>;


  constructor(private http: HttpClient) { }


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

getStudents(): Observable<Student[]>{
return this.http.get<Student[]>(this.studentsUrl).pipe(catchError(this.handleError<Student[]>('getStudents',[])));
}

updateStudent(id: string, value: any): Observable<Object> {
  return this.http.put(`${this.studentsUrl}update/` + id, value);
}



}
