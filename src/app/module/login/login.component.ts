import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private formBuilder:FormBuilder) { }
   loginForm!: FormGroup;
   
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(5)]],
      password: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(5)]]
  });
  
  }

  get f(){ 
    return this.loginForm.controls;
   }
submit(){
    if(this.loginForm.valid){
    console.log(this.loginForm.value);
    this.loginForm.reset();
    
    }
  }
}

 