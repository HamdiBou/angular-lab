import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PubService } from '../pub.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-selected-member',
  templateUrl: './selected-member.component.html',
  styleUrls: ['./selected-member.component.css']
})
export class SelectedMemberComponent {
    constructor(private PS:PubService ,private dialogRef: MatDialogRef<SelectedMemberComponent>, @Inject(MAT_DIALOG_DATA) data: any) { }
    selectedValue?: string;
    foods: Food[] = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'},
    ];
}
