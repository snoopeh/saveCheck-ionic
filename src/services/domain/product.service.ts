import { Injectable } from '@angular/core';
//import {HttpClient} from 'angular/common/http';
import { HttpClient } from  '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { ProductDTO } from 'src/models/product.dto';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
    constructor(public http:HttpClient)
    {
    
    }
    findAll(): Observable<ProductDTO[]>{ 
        return this.http.get<ProductDTO[]>(`${API_CONFIG.baseUrl}/product`);
    }
    findByName(name): Observable<ProductDTO[]>{
        return this.http.get<ProductDTO[]>(`${API_CONFIG.baseUrl}/product/name/`+name);
    }
}