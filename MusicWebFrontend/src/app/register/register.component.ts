import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Form, NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user =new User()
  @Input()
  PhotoFileName='';
  PhotoFilePath='';

  constructor(private userSer:UserService) { }

  ngOnInit(): void {

  }
 
  uploadPic(event:any){

    var file = event.target.files[0];
    const formData:FormData = new FormData();
    formData.append('uploadfile',file, file.name);

    this.userSer.uploadPhototoStorage(formData).subscribe(
      (data:any)=>{
        this.PhotoFileName=data.toString();
        this.PhotoFilePath= this.userSer.PhotoUrl+this.PhotoFileName;

        localStorage.setItem('mypic',JSON.stringify(this.PhotoFilePath));

      },
      error=>{
        console.log(error)
      }
    )
 
  }  

  userRegister(regForm:NgForm){

    this.user.file=this.PhotoFileName
    this.userSer.registerUser(this.user).subscribe(
      data=>{
        alert(data)
      },
      error=>{
        console.log(error)
      }
    )

  }



}
