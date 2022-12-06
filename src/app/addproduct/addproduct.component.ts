import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor() { }

  id=""
  title=""
  description=""
  category=""
  image=""

  ngOnInit(): void {
    
  }

    read=()=>
{

    let data={
      "id":this.id,
      "title":this.title,
      "description":this.description,
      "category":this.category,
      "image":this.image
    }
  console.log(data)
  
  
  }
}

