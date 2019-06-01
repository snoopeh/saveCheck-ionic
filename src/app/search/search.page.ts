import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/domain/product.service';
import { ProductDTO } from 'src/models/product.dto';
import { API_CONFIG } from 'src/config/api.config';
import { Router } from '@angular/router';
import { BrandService } from 'src/services/domain/brand.service';
import { BrandDTO } from 'src/models/brand.dto';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(
    public productService: ProductService,
    public brandService: BrandService,
    private router: Router

  ) { }

  imageUrl: string = API_CONFIG.baseUrl;
  id;
  products: ProductDTO[];
  brands: BrandDTO[];
  searchItens(ev) {
    var val = ev.target.value;
    if (val.length > 3) {
      this.productService.findByName(val)
        .subscribe(response => {
          this.products = response;
          this.brands = null;
        },
          error => {
            this.brandService.findByName(val)
        .subscribe(response => {
          this.brands = response;
          this.products = null;
        },
          error => {
            this.products = null;
          });
            this.products = null;
          });
    }
  }
teste(

){
  console.log("teset");
}

  ngOnInit() {
   
  }

}
