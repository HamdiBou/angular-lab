import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit,ViewChild,AfterViewInit} from '@angular/core';
import { EvtService } from '../evt.service';
import { Evt } from 'src/assets/Modeless/Evt';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ModalEventsComponent } from '../modal-events/modal-events.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],

})
export class EventsComponent implements OnInit ,AfterViewInit {
  displayedColumns: string[] = ['1', '2', '3', '4','5'];
  constructor(private ES:EvtService,private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource:MatTableDataSource<Evt>;
  fetchData() {
    this.ES.getAllEvents().subscribe((data) => {
      this.dataSource.data = data;
    }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(): void {
    this.fetchData();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  openDialog() {
    let MatDialogRef = this.dialog.open(ModalEventsComponent, {
      width: '500px', height: '500px'
    });
    MatDialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.ES.addEvent(result).subscribe((data)=>{
          this.fetchData();
        });
      }
    }
    );
  }
}
