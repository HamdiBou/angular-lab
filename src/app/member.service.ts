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
  //add a member to the server with a post request
  addMember(member:Membre):Observable<Membre>{
    return this.http.post<Membre>('http://localhost:3000/members',member);
    }
  //delete a member from the server with a delete request
  deleteMember(id:string):Observable<Membre>{
    return this.http.delete<Membre>(`http://localhost:3000/members/${id}`);
  }
  //update a member from the server with a put request
  updateMember(id:string,member:Membre):Observable<Membre>{
    return this.http.put<Membre>(`http://localhost:3000/members/${id}`,member);
  }
  getMemberById(id:string):Observable<Membre>{
    return this.http.get<Membre>(`http://localhost:3000/members/${id}`);
  }
}
