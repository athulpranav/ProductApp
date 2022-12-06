import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProService {

  constructor(private http:HttpClient) { }



  fetchproducts=()=>{
    return this.http.get( "https://dummyjson.com/products" )
  }


}
