import { Injectable } from '@angular/core';
//import {HttpClient} from 'angular/common/http';
import { HttpClient } from  '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { Observable } from 'rxjs';
import { BrandDTO } from 'src/models/brand.dto';

@Injectable()
export class BrandService {
    constructor(public http:HttpClient)
    {
    
    }
    findAll(): Observable<BrandDTO[]>{ 
        return this.http.get<BrandDTO[]>(`${API_CONFIG.baseUrl}/brand`);
    }
    findByName(name): Observable<BrandDTO[]>{
        return this.http.get<BrandDTO[]>(`${API_CONFIG.baseUrl}/brand/name/`+name);
    }
}