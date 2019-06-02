import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/domain/product.service';
import { BrandService } from 'src/services/domain/brand.service';
import { ProductDTO } from 'src/models/product.dto';
import { BrandDTO } from 'src/models/brand.dto';
import { API_CONFIG } from 'src/config/api.config';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  product: ProductDTO;
  brand: BrandDTO;
  
  constructor(
    private route: ActivatedRoute,    
    public productService: ProductService,
    public brandService: BrandService,
    private router: Router
  ) { 

  }

  imageUrl: string = API_CONFIG.baseUrl;
  type :any;
  id:any;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.type = this.route.snapshot.paramMap.get('type');
    this.product = null;
    this.brand = null;
    this.fillItens();
    
  }

  fillItens()
  {
    if(this.type == 2) {
      this.brandService.findById(this.id)
      .subscribe(response => {
        this.brand = response;
      },
        error => {
        });
    }

    if(this.type == 1)
    {
      this.productService.findById(this.id)
      .subscribe(response => {
        this.product = response;
      },
        error => {
        });
    }
  }

}
