import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-events',
  templateUrl: './modal-events.component.html',
  styleUrls: ['./modal-events.component.css']
})
export class ModalEventsComponent implements OnInit {
  form!:FormGroup;
  constructor(private dialogRef:MatDialogRef<ModalEventsComponent> ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      dateDebut: new FormControl('', Validators.required),
      dateFin: new FormControl('', Validators.required),
      place: new FormControl('', Validators.required)
    });
  }
  save() {
    this.dialogRef.close(this.form.value);
}
close() {
    this.dialogRef.close();
}
}
