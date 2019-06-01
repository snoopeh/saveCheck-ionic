import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
//import {HttpClient} from 'angular/common/http';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.findAll = function () {
        return this.http.get(API_CONFIG.baseUrl + "/product");
    };
    ProductService.prototype.findByName = function (name) {
        return this.http.get(API_CONFIG.baseUrl + "/product/name/" + name);
    };
    ProductService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ProductService);
    return ProductService;
}());
export { ProductService };
//# sourceMappingURL=product.service.js.map