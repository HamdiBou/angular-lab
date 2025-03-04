import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog-event',
  templateUrl: './confirm-dialog-event.component.html',
  styleUrls: ['./confirm-dialog-event.component.css']
})
export class ConfirmDialogEventComponent {
   constructor(public dialog: MatDialogRef<ConfirmDialogEventComponent>) { }
}
