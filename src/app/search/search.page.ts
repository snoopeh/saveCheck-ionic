import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/domain/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(
   public productService : ProductService
  ) { }

  ionViewDidLoad(){
    this.productService.findAll()
    .subscribe(response => {
      console.log(response);
    },
    error => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.productService.findAll()
    .subscribe(response => {
      console.log(response);
    },
    error => {
      console.log(error);
    });
  }

}
