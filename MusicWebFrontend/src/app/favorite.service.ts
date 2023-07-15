import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SadSong } from './sadsong.model';
import { FavforSad } from './sadSongToFav.model';
import { FavforChill } from './chillSongToFav.model';
import { MyFavList } from './myFavList.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http: HttpClient) { }


  addToFavforSad(sad:FavforSad){
    return this.http.post<FavforSad>('http://127.0.0.1:6067/favsave/',sad);
  }

  addToFavforChill(chill:FavforChill){
    return this.http.post<FavforChill>('http://127.0.0.1:6067/favsave/',chill);
  }

  getAllMyFav(myfav:MyFavList){
    return this.http.post<MyFavList>(`http://localhost:6067/fav/`,myfav);
  }

}
