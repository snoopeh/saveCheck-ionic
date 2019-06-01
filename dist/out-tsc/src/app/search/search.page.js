import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductService } from 'src/services/domain/product.service';
import { API_CONFIG } from 'src/config/api.config';
var SearchPage = /** @class */ (function () {
    function SearchPage(productService) {
        this.productService = productService;
        this.imageUrl = API_CONFIG.baseUrl;
    }
    SearchPage.prototype.searchItens = function (ev) {
        var _this = this;
        var val = ev.target.value;
        this.productService.findByName(val)
            .subscribe(function (response) {
            _this.products = response;
        }, function (error) {
            console.log(error);
        });
    };
    SearchPage.prototype.ngOnInit = function () {
    };
    SearchPage = tslib_1.__decorate([
        Component({
            selector: 'app-search',
            templateUrl: './search.page.html',
            styleUrls: ['./search.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ProductService])
    ], SearchPage);
    return SearchPage;
}());
export { SearchPage };
//# sourceMappingURL=search.page.js.map