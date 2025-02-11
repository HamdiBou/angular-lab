import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Membre } from 'src/assets/Modeless/Membre';

@Injectable({
  providedIn: 'root'
})
//@injectable is a decorator that marks a class as available to an injector for instantiation.
export class MemberService {
  constructor(private http:HttpClient) {
    //http is a service that allows you to send requests to a server
    //HttpClientModule is a module that allows you to send requests to a server
  }
  //get all members from the server with a get request
  GetAllMembers():Observable<Membre[]>{//Observable is a class that represents a stream of data
    return this.http.get<Membre[]>('http://localhost:3000/members');
  }
}
