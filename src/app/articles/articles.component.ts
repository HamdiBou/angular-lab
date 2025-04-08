import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { PubService } from '../pub.service';
import { Pub } from 'src/assets/Modeless/Pub';
import { MatTableDataSource } from '@angular/material/table';
import { PubVisibilityComponent } from '../pub-visibility/pub-visibility.component';
import { SelectedMemberComponent } from '../selected-member/selected-member.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  constructor(private PS:PubService, private dialog: MatDialog) { }
  displayedColumns: string[] = ['id', 'title', 'type', 'lien', 'datePub', 'sourcePdf', 'actions'];
  dataSource = new MatTableDataSource<Pub>();
  ngOnInit() {
    this.fetchData();
  }
  fetchData():void{
    this.PS.getAllPubs().subscribe((data) => {
      this.dataSource.data = data; 
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  open(id:number){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data=id;
    dialogConfig.width='500px';
    dialogConfig.height='400px';
    let dialogRef=this.dialog.open(PubVisibilityComponent, dialogConfig);
  }
  openSelected(id:number){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data=id;
    dialogConfig.width='500px';
    dialogConfig.height='400px';
    let dialogRef=this.dialog.open(SelectedMemberComponent, dialogConfig);
  }
}
