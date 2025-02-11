import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit
{
form !: FormGroup;

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.form = new FormGroup({
    cin : new FormControl(null, Validators.required),
    name : new FormControl(null, Validators.required),
    type : new FormControl(null, Validators.required),
    createdDate: new FormControl(null, Validators.required),
  });
}
onSubmit(){
  console.log(this.form.value);
  }
}
