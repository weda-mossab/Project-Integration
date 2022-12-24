import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private eventsUrl = "http://localhost:8091/api/";  // URL to web api
  // private Events!:Array<Student>;

  constructor(private http: HttpClient) { }
}
