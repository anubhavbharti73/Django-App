import { Component, OnInit } from '@angular/core';
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

  constructor(private userSer:UserService) { }

  ngOnInit(): void {
  }

  PhotoFilePath='';

  uploadPic(fileIn:any){
    // var file =event.target.file[0];
    // const formData:FormData=new FormData();
    // formData.append('uploadFile',file, file.name);

    // this.userSer.uploadPic(formData).subscribe((data:any)=>{
    //   this.PhotoFileName=data.toString();
    //   this.PhotoFilePath=this.userSer.PhotoUrl+this.PhotoFileName
    // })

    let rdr = new FileReader();
    rdr.onload=(e:any)=>{
      let image = new Image();
      image.src=e.target.result;

      image.onload=rs=>{
        this.PhotoFilePath=e.target.result;
      }
    };

    rdr.readAsDataURL(fileIn.target.files[0])

  }  

  userRegister(regForm:NgForm){

    this.user.file=this.PhotoFilePath
    console.log(this.user);

    this.userSer.registerUser(this.user).subscribe(
      data=>{
        console.log(data)
        alert(data)
      },
      error=>{
        console.log(error)
      }
    )

  }



}
