import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { SadSong } from '../sadsong.model';
import { ChillSong } from '../chillsong.model';
import { EnglishSong } from '../englishsong.model';
import { FavoriteService } from '../favorite.service';
import { FavforSad } from '../sadSongToFav.model';
import { FavforChill } from '../chillSongToFav.model';
import { FavforEnglish } from '../englishSongToFav.model';
import { MyFavList } from '../myFavList.model';

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
  myfav = new MyFavList();


  sadlist=0
  chilllist=0
  englishlist=0
  mylistlist=0
  about=0

  constructor(private productSer: ProductService, private router:Router, private favSer: FavoriteService) { }

  ngOnInit(): void {

    let user= localStorage.getItem('user')+'';
    this.user=JSON.parse(user);

  }


  getAllSongs(){

  }

  sadsongs:SadSong[]=[];
  getSadSongs(){

    this.sadlist=1
    this.chilllist=0
    this.englishlist=0
    this.mylistlist=0
    this.about=0

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

  chillsongs:ChillSong[]=[]
  getChillSongs(){

    this.sadlist=0
    this.chilllist=1
    this.englishlist=0
    this.mylistlist=0
    this.about=0

    this.productSer.getAllChillSong().subscribe(
      data=>{
        console.log(data)
        this.chillsongs=data
      },
      error=>{
        console.log(error)

      }
    )
  }

  englishsongs:EnglishSong[]=[]
  getEnglishSongs(){
    this.sadlist=0
    this.chilllist=0
    this.englishlist=1
    this.mylistlist=0
    this.about=0

    this.productSer.getAllEnglishSong().subscribe(
      data=>{
        console.log(data)
        this.englishsongs=data
      },
      error=>{
        console.log(error)

      }
    )

  }

  myFavlist:MyFavList[]=[]
  getMyFavourite(){

    this.sadlist=0
    this.chilllist=0
    this.englishlist=0
    this.mylistlist=1
    this.about=0

    this.myfav.username=this.user.username
    this.favSer.getAllMyFav(this.myfav).subscribe(
      data=>{
        let kc=JSON.stringify(data)
        this.myFavlist=JSON.parse(kc)
        
      },
      error=>{
        console.log(error)
      }
    )
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

  favforsad = new FavforSad()
  addToFavforSad(sad:SadSong){
    
    this.favforsad.username=this.user.username
    this.favforsad.name=sad.name
    this.favforsad.file=sad.sadsong
    console.log(this.favforsad)

    this.favSer.addToFavforSad(this.favforsad).subscribe(
      data=>{
        alert("Added")
        console.log(data)
      },
      error=>{
        console.log(error)
      }

    )

  }


  favforchill = new FavforChill();
  addToFavforChill(chill:ChillSong){

    this.favforchill.username=this.user.username
    this.favforchill.name=chill.name
    this.favforchill.file=chill.chillsong
    console.log(this.favforchill)

    this.favSer.addToFavforChill(this.favforchill).subscribe(
      data=>{
        alert("Added")
        console.log(data)
      },
      error=>{
        console.log(error)
      }

    )


  }


  favforenglish = new FavforEnglish()
  addToFavforEnglish(eng:EnglishSong){

    this.favforenglish.username=this.user.username
    this.favforenglish.name=eng.name
    this.favforenglish.file=eng.englishsong
    console.log(this.favforenglish)

    this.favSer.addToFavforChill(this.favforenglish).subscribe(
      data=>{
        alert("Added")
        console.log(data)
      },
      error=>{
        console.log(error)
      }

    )

  }


  deleteFromMyFav(my:string){

    this.favSer.deleteMyFav(my).subscribe(
      data=>{
        console.log(data)
        this.getMyFavourite()
      },
      error=>{
        console.log(error)
      }
    )

  }

  
  getAbout(){
    this.sadlist=0
    this.chilllist=0
    this.englishlist=0
    this.mylistlist=0
    this.about=1
  }

  }


