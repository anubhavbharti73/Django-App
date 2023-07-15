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

  mysongfilesad=""
  mysongfilechill=""
  mysongfileenglish=""
  constructor(private productSer: ProductService) { }

  ngOnInit(): void {
  }

  uploadSongforSad(fileIn:any){

    let rdr = new FileReader();
    rdr.onload=(e:any)=>{

      let file = new Image();
      file.src=e.target.result;

      file.onload=rs=>{
        this.mysongfilesad=e.target.result;
      }

    };

    rdr.readAsDataURL(fileIn.target.files[0])

  }

  uploadSongforChill(fileIn:any){

    let rdr = new FileReader();
    rdr.onload=(e:any)=>{

      let file = new Image();
      file.src=e.target.result;

      file.onload=rs=>{
        this.mysongfilechill=e.target.result;
      }

    };

    rdr.readAsDataURL(fileIn.target.files[0])

  }

  uploadSongforEnglish(fileIn:any){

    let rdr = new FileReader();
    rdr.onload=(e:any)=>{

      let file = new Image();
      file.src=e.target.result;

      file.onload=rs=>{
        this.mysongfileenglish=e.target.result;
      }

    };

    rdr.readAsDataURL(fileIn.target.files[0])

  }


  addSadSongToProduct(regForm:NgForm){

    this.sad.sadsong=this.mysongfilesad;
    this.productSer.addSadSong(this.sad).subscribe(
      data=>{
        alert(data)   
      },
      error=>{
        console.log(error)
      }
    );
    
  }


  addChillSongToProduct(regForm:NgForm){

    this.chill.chillsong=this.mysongfilechill;
    this.productSer.addChillSong(this.chill).subscribe(
      data=>{
        alert(data) 
      },
      error=>{
        console.log(error)
      }
    );
    
  }

  addEnglishSongToProduct(regForm:NgForm){

    this.english.englishsong=this.mysongfileenglish;
    this.productSer.addEnglishSong(this.english).subscribe(
      data=>{
        alert(data) 
      },
      error=>{
        console.log(error)
      }
    );
    
  }

}
