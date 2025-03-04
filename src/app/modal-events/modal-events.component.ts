import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-events',
  templateUrl: './modal-events.component.html',
  styleUrls: ['./modal-events.component.css'],
})
export class ModalEventsComponent implements OnInit {
  form: FormGroup;
  range!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalEventsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    // Create the main form group with all fields
    this.form = this.fb.group({
      title: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      place: ['', Validators.required]
    });

    // If data is passed, populate the form
    if (data) {
      this.form.patchValue({
        title: data.title || '',
        dateDebut: data.dateDebut || '',
        dateFin: data.dateFin || '',
        place: data.place || ''
      });
    }
  }

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.form.valid) {
      // Convert dates to string if they are Date objects
      const formValue = {...this.form.value};

      // Convert dates to string if needed
      if (formValue.dateDebut instanceof Date) {
        formValue.dateDebut = this.formatDateToString(formValue.dateDebut);
      }

      if (formValue.dateFin instanceof Date) {
        formValue.dateFin = this.formatDateToString(formValue.dateFin);
      }

      this.dialogRef.close(formValue);
    }
  }

  // Helper method to convert Date to string in MM/DD/YYYY format
  private formatDateToString(date: Date | null): string {
    if (!date) return '';
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }
}
