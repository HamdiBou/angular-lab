import { ActivatedRoute } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-events',
  templateUrl: './modal-events.component.html',
  styleUrls: ['./modal-events.component.css']
})
export class ModalEventsComponent implements OnInit {
  idCourant!:number;
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalEventsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    //// condition when its an update or create
    console.log(data);
    if(data){
      this.form = this.fb.group({
        title: [data.title, Validators.required],
        dateDebut: [data.dateDebut, Validators.required],
        dateFin: [data.dateFin, Validators.required],
        place: [data.place, Validators.required]
      });
    }
    else{
      this.form = this.fb.group({
        title: ['', Validators.required],
        dateDebut: ['', Validators.required],
        dateFin: ['', Validators.required],
        place: ['', Validators.required]
      });
    }
  }

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}
