import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit
{
  constructor(private MS:MemberService, private router:Router, private activatedRoute:ActivatedRoute) { }
  form !: FormGroup;
  idCourant!:string;
//

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  //if the route is /create then the form is empty else the form is filled with the data of the member
  this.idCourant=this.activatedRoute.snapshot.params['id'];
  //console.log(this.idCourant);
  if(this.idCourant){
    this.MS.getMemberById(this.idCourant).subscribe((data)=>{
      this.form = new FormGroup({
        cin : new FormControl(data.cin, Validators.required),
        nom : new FormControl(data.nom, Validators.required),
        type : new FormControl(data.type, Validators.required),
        createdDate: new FormControl(data.createdDate, Validators.required),
      });
    });
  }
  else{
    this.form = new FormGroup({
      cin : new FormControl(null, Validators.required),
      nom : new FormControl(null, Validators.required),
      type : new FormControl(null, Validators.required),
      createdDate: new FormControl(null, Validators.required),
    });
  }
}
onSubmit(){
  if(this.idCourant){
    this.MS.updateMember(this.idCourant,this.form.value).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/']);
    });
  } else {
    this.MS.addMember(this.form.value).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/']);
    });
  }
}
}
