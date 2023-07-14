import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SadSong } from '../sadsong.model';
import { ChillSong } from '../chillsong.model';
import { EnglishSong } from '../englishsong.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  sad =  new  SadSong();
  chill = new ChillSong();
  english = new EnglishSong();

  mysong=""
  constructor(private productSer: ProductService) { }

  ngOnInit(): void {
  }

  uploadSong(fileIn:any){

    let rdr = new FileReader();
    rdr.onload=(e:any)=>{

      let file = new Image();
      file.src=e.target.result;

      file.onload=rs=>{
        this.mysong=e.target.result;
      }

    };

    rdr.readAsDataURL(fileIn.target.files[0])

  }

  addItem(regForm:NgForm){

    this.sad.sadsong=this.mysong;
    this.productSer.addSadSong(this.sad).subscribe(
      data=>{
        alert("Song Added")
        console.log(data)
      },
      error=>{
        console.log(error)
      }
    );
    
  }

}
