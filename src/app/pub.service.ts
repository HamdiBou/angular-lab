import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pub } from 'src/assets/Modeless/Pub';

@Injectable({
  providedIn: 'root'
})
export class PubService {

  constructor(private http:HttpClient) { }
  getAllPubs():Observable<Pub[]>{
    return this.http.get<Pub[]>('http://localhost:3000/pub');
  }
  getPubById(id:number):Observable<Pub>{
    return this.http.get<Pub>(`http://localhost:3000/pub/${id}`);
  }
}
