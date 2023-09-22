import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  myform!:FormGroup;
  constructor(private fb:FormBuilder, private http:HttpClient, private router:Router){}
  ngOnInit(): void {
    this.myform =this.fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      mobile:['', Validators.required],
      password:['', Validators.required],
    });
    
  }
  signUp(){
    this.http.post<any>("http://localhost:3000/signup",this.myform.value).subscribe(res=> 
    {
      alert("you are register successfully ");
      this.myform.reset(); //to reset the form
      this.router.navigate(['login']);
    },error=>{
      alert("something went wrong")


    })
  }
 
}