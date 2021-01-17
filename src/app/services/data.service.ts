import { Person } from './../data-model/person.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http: HttpClient) { }

  postUserDetails(person: Person): Observable<Person>{
    console.log(person);
    // return this.http.post<Person>('https://putsreq.com/aEJaJyGeFRl7vzOj00sb', person)
    return this.http.post<Person>('http://omnichannel-clients-api.us-east-1.elasticbeanstalk.com/clients', person)
    
  }
}
