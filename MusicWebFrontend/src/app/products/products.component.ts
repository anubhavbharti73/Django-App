import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { SadSong } from '../sadsong.model';
import { ChillSong } from '../chillsong.model';
import { EnglishSong } from '../englishsong.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  user = new User();
  username=this.user.username
  sadsong = new SadSong();
  chillsong = new ChillSong();
  englishsong =new EnglishSong();


  constructor(private productSer: ProductService, private router:Router) { }

  ngOnInit(): void {

    let user= localStorage.getItem('user')+'';
    this.user=JSON.parse(user);

  }


  getAllSongs(){

  }

  sadsongs:SadSong[]=[];

  getSadSongs(){
    this.productSer.getAllSadSong().subscribe(
      data=>{
        console.log(data)

        this.sadsongs=data

      },
      error=>{
        console.log(error)

      }
    )
  }

  getChillSongs(){
    this.productSer.getAllChillSong().subscribe(
      data=>{
        console.log(data)
      },
      error=>{
        console.log(error)

      }
    )
  }

  getEnglishSongs(){

    this.productSer.getAllEnglishSong().subscribe(
      data=>{
        console.log(data)
      },
      error=>{
        console.log(error)

      }
    )

  }

  getMyFavourite(){

  }

  delAcount(){

    this.productSer.deleteAcc(this.user.username).subscribe(
      data=>{
       
        alert("User Deleted")
        this.router.navigate(['/home'])
      },
      error=>{
        console.log(error)
      }
    )
    
  }
  

  }


