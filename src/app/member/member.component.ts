import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Membre } from 'src/assets/Modeless/Membre';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent implements OnInit {
  displayedColumns: string[] = ['1', '2', '3', '4', '5', '6'];
  //injection of dependencies
  //dependency injection is a technique whereby one object supplies the dependencies of another object
  constructor(private MS: MemberService, private dialog: MatDialog) {
    //MS is a service that allows you to send requests to a server
  } //end constructor
  datasource: Membre[] = [];
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.MS.GetAllMembers().subscribe((data) => {
      this.datasource = data;
    });
  }
  deleteMember(id: string) {
    //open the dialog of confirm-dialog
    //wait the click of user and test
    // if the user click on yes then delete the member
    // else do nothing
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      height: '250px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.MS.deleteMember(id).subscribe(() => {
          console.log(`Member with ID ${id} deleted`);
          this.MS.GetAllMembers().subscribe((data) => {
            this.datasource = data;
          });
        });
      } else {
        console.log('Member not deleted');
      }
    });
  }
  editMember(id: string, member: Membre) {
    this.MS.updateMember(id, member).subscribe(() => {
      console.log(`Member with ID ${id} updated`);
      this.MS.GetAllMembers().subscribe((data) => {
        this.datasource = data;
      });
    });
  }
}
