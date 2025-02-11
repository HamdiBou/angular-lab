import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Membre } from 'src/assets/Modeless/Membre';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  displayedColumns: string[] = ['1', '2', '3', '4', '5','6'];
  //injection of dependencies
  //dependency injection is a technique whereby one object supplies the dependencies of another object
  constructor(private MS:MemberService) {
    //MS is a service that allows you to send requests to a server
  }//end constructor
  datasource:Membre[] = [];
  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.MS.GetAllMembers().subscribe((data)=>{
      this.datasource = data;
    });
  }
}
