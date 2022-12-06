import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { ProService } from '../pro.service';

@Component({
  selector: 'app-viewallproduct',
  templateUrl: './viewallproduct.component.html',
  styleUrls: ['./viewallproduct.component.css']
})
export class ViewallproductComponent implements OnInit {

  constructor(private pro:ProService) { this.dataFromPro()}

dataFromPro=()=>{
  this.pro.fetchproducts().subscribe(
    (response)=>{
      this.products=response
    }
  )
}

  products:any=[
   
  ]
  ngOnInit(): void {
  }

}
