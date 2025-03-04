import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EvtService } from '../evt.service';
import { Evt } from 'src/assets/Modeless/Evt';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalEventsComponent } from '../modal-events/modal-events.component';
import { ConfirmDialogEventComponent } from '../confirm-dialog-event/confirm-dialog-event.component';
import {NgIf, JsonPipe} from '@angular/common';

import { FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit, AfterViewInit {
  // Update column names to match your data properties
  displayedColumns: string[] = [
    'id',
    'title',
    'dateDebut',
    'dateFin',
    'place',
    'actions',
  ];

  dataSource: MatTableDataSource<Evt>;
  range!: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ES: EvtService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  fetchData() {
    this.ES.getAllEvents().subscribe((data) => {
      this.dataSource.data = data;
      // Ensure sorting is reapplied after data load
      this.dataSource.sort = this.sort;
    });
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
    const dialogRef = this.dialog.open(ModalEventsComponent, {
      width: '500px',
      height: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.ES.addEvent(result).subscribe(() => {
          this.fetchData();
        });
      }
    });
  }
  delete(id: number) {
    let dialogRef = this.dialog.open(ConfirmDialogEventComponent, {
          width: '250px',
          height: '250px',
        });
        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            this.ES.deleteEvent(id).subscribe(() => {
              console.log(`Event with ID ${id} deleted`);
              this.fetchData();
            });
          } else {
            console.log('Member not deleted');
          }
        });
  }
  openDialogEdit(id: number) {
    this.ES.getEvent(id).subscribe((data) => {
      const DialogConfig = new MatDialogConfig();
      DialogConfig.data = data;
      DialogConfig.height = '500px';
      DialogConfig.width = '500px';
      const dialogRef = this.dialog.open(ModalEventsComponent, DialogConfig);
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.ES.updateEvent(id, result).subscribe(() => {
            this.fetchData();
          });
        }
      });
    });
  }
}
