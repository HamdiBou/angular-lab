import { Pub } from './../../assets/Modeless/Pub';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { PubService } from '../pub.service';

@Component({
  selector: 'app-pub-visibility',
  templateUrl: './pub-visibility.component.html',
  styleUrls: ['./pub-visibility.component.css']
})

export class PubVisibilityComponent {
  //forcage de type
  pub?:Pub;
  constructor(private PS:PubService ,private dialogRef: MatDialogRef<PubVisibilityComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    console.log(data);
    this.PS.getPubById(data).subscribe((data) => {
      this.pub = data;
    }
    );
   }

}
