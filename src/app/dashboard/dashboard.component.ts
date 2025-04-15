import { Component } from '@angular/core';
import { MemberService } from '../member.service';
import { EvtService } from '../evt.service';
import { PubService } from '../pub.service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  NbMembers:number=0;
  NbArticles:number=0;
  NbEvents:number=0;
  NbTools:number=0;
  chartData: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: '$ in millions',
      data: [ 1551, 1688, 1800, 1895, 2124, 2124 ]
    }
  ];
  chartLabels: string[] = ['April', 'May', 'June', 'July', 'August', 'September'];
  chartOptions: ChartOptions = {};

 constructor(private MS:MemberService,private ES:EvtService,private PS:PubService) {
  this.MS.GetAllMembers().subscribe((data:any)=>{
    this.NbMembers=data.length;
    });
    this.ES.getAllEvents().subscribe((data:any)=>{
      this.NbEvents=data.length;
      });
    this.PS.getAllPubs().subscribe((data:any)=>{
      this.NbArticles=data.length;
    });
  }

}
