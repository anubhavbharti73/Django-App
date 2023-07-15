import { Component, OnInit } from '@angular/core';
import { userAuth } from '../userAuth.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userAuth = new userAuth()

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  loginValidate(regForm:NgForm)
  {

    if(this.userAuth.username=="admin" && this.userAuth.password=="1234"){
      this.router.navigate(['/admin'])
    }

    if(regForm.valid)
    {

      
      this.userService.loginUser(this.userAuth).subscribe(

  data=>{
    if(data==null)
    {
    alert('Invalid user name or password ')
    }
    else{
      alert('Welcome ')
      console.log(data);

      let user=new User();
      user=data;
      
      localStorage.setItem('user',JSON.stringify(user));
      
      this.router.navigate(['/product'])
    }
  },
  error=>{
    console.log(error)
    alert('Enter Valid Details')
  }
  
  )

    }
    else
    {
      alert('Enter Valid Details');
    }

  }

}

