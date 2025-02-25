import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evt } from 'src/assets/Modeless/Evt';

@Injectable({
  providedIn: 'root'
})
export class EvtService {

  constructor(private http:HttpClient) { }

  getAllEvents():Observable<Evt[]> {
    return this.http.get<Evt[]>('http://localhost:3000/Evt');
  }
  addEvent(Evt: Evt):Observable<Evt> {
    return this.http.post<Evt>('http://localhost:3000/Evt',Evt);
  }
}
