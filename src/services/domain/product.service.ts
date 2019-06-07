import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { ProductDTO } from 'src/models/product.dto';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { Comments } from 'src/app/interfaces/comments';
//import {FileTransfer,FileUploadOptions} from '@ionic-native/file-transfer';
//import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    constructor(public http:HttpClient,)
    {
    
    }
    findAll(): Observable<ProductDTO[]>{ 
        return this.http.get<ProductDTO[]>(`${API_CONFIG.baseUrl}/product`);
    }
    findByName(name): Observable<ProductDTO[]>{
        return this.http.get<ProductDTO[]>(`${API_CONFIG.baseUrl}/product/name/`+name);
    }
    findById(id): Observable<ProductDTO>{
        return this.http.get<ProductDTO>(`${API_CONFIG.baseUrl}/product/`+id);
    }

    newProduct(product: Product){
        return new Promise((resolve, reject) => {
            this.http.post(`${API_CONFIG.baseUrl}/product`, product)
            .subscribe((result: any) => {
                resolve(result);
              },(error) => {
                console.log("ERRO na requisiçao",error.error);
                reject(error);
              });
          });
    }

    newComment(comment: Comments){
        return new Promise((resolve, reject) => {
            this.http.put(`${API_CONFIG.baseUrl}/product/comments/`+comment.productId, comment)
            .subscribe((result: any) => {
                resolve(result);
              },(error) => {
                console.log("ERRO na requisiçao",error.error);
                reject(error);
              });
          });
    }
    deleteComment(comment: Comments){
        return new Promise((resolve, reject) => {
            this.http.put(`${API_CONFIG.baseUrl}/product/deletecomments/`+comment.productId, comment)
            .subscribe((result: any) => {
                resolve(result);
              },(error) => {
                console.log("ERRO na requisiçao",error.error);
                reject(error);
              });
          });
    }
}