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


  // signInWithGoogle(){
  //   console.log("hello")
  // }

}
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
// import { RestService } from 'src/app/Service/rest.service';
// import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor( public router: Router,private authService: SocialAuthService,private restService: RestService) { }
//   loading:boolean = false;
//   ngOnInit(): void {
//     this.restService.clearRefreshInterval();
//     let sessionData  = JSON.parse(sessionStorage.getItem("loggedInUser") || '{}');
//     if(JSON.stringify(sessionData) === '{}'){
//       return;
//     }else{
//       let userData ={
//         "aitEmail": sessionData.email,
//         "firstName": sessionData.firstName,
//         "lastName": sessionData.lastName
//       };
//       this.userApiCall(userData)
//     }
//     // let userData ={
//     //   "aitEmail": sessionData.email,
//     //   "firstName": sessionData.firstName,
//     //   "lastName": sessionData.lastName
//     // };
//     // this.restService.makeRestCall('/auth/login?email='+JSON.parse(sessionStorage.getItem('loggedInUser')|| '{}').email, 'POST', userData)
//     //         .subscribe((sessionRes) => {
//     //             this.redirectUser()
//     //         });
//   }

//   redirectUser() {
//     this.router.navigate(["dashboard"]);
//   }
//   forgotpassword() {
//     this.router.navigate(["forgotpassword"]);
//   }

//   signInWithGoogle(): void {
//     this.loading = true;
//     this.authService.initState.subscribe(value => {
//       this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user)=>{
//         if(user){
//           let userData ={
//             "aitEmail": user.email,
//             "firstName": user.firstName,
//             "lastName": user.lastName
//           };
//           sessionStorage.setItem("loggedInUser",JSON.stringify(user));
//           this.userApiCall(userData);
//         }
//       }
//       ).catch((error)=>{
//         console.error(error);
//         Swal.fire('Warning', error.error==='popup_closed_by_user'?'Log in pop up closed manualy.':error , 'warning');
//       }).finally(()=>{
//         this.loading = false;
//       });

//     })

//   }
//   userApiCall(userData:any){
//     this.restService.makeRestCall('/user', 'POST', userData, true)
//     .subscribe((res) => {
//       sessionStorage.setItem("token",JSON.stringify(res.token));
//       sessionStorage.setItem("userData",JSON.stringify({userId:res.userId}));
//       this.redirectUser();
//     }, error => {
//       this.loading = false;
//       Swal.fire('Error', error, 'warning');
//     });
//   }
// }