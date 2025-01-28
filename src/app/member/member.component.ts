import { Component } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  displayedColumns: string[] = ['1', '2', '3', '4', '5'];
  datasource:any[] = [
    {
      id:'1234',
      cin:'12345678',
      nom:'nom1',
      type:'type1',
      createdDate:'2020-01-01'
    },
    {
      id:'1235',
      cin:'12345679',
      nom:'nom2',
      type:'type2',
      createdDate:'2020-01-02'
    },
    {
      id:'1236',
      cin:'12345680',
      nom:'nom3',
      type:'type3',
      createdDate:'2020-01-03'
    }
  ];
}
