import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SadSong } from './sadsong.model';
import { ChillSong } from './chillsong.model';
import { EnglishSong } from './englishsong.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addSadSong(sadsong:SadSong){

    return this.http.post<SadSong>("http://localhost:7000/productsad/",sadsong);
  }

  addChillSong(chillsong:ChillSong){

    return this.http.post<SadSong>("http://localhost:7000/productchill/",chillsong);
  }

  addEnglishSong(englishsong:EnglishSong){

    return this.http.post<SadSong>("http://localhost:7000/productenglish/",englishsong);
  }

  getAllSadSong(){
    return this.http.get<SadSong[]>("http://127.0.0.1:7000/productsad/");
  }

  getAllChillSong(){
    return this.http.get<ChillSong[]>("http://127.0.0.1:7000/productchill/");
  }

  getAllEnglishSong(){
    return this.http.get<EnglishSong[]>("http://127.0.0.1:7000/productenglish/");
  }

  deleteAcc(username:string){
    return this.http.delete(`http://localhost:8000/user/${username}`);
  }


}
