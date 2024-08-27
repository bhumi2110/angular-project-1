"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//let Name: string="bhumi";
var Stock = /** @class */ (function () {
    function Stock(c, cm, r) {
        this.code = c;
        this.company = cm;
        this.rate = r;
    }
    Stock.prototype.display = function () {
        console.log("code:".concat(this.code, " comapny:").concat(this.company, " rate:").concat(this.rate));
    };
    return Stock;
}());
exports.default = Stock;
var c = new Stock(1, 'bhumi', 20);
//c.code=100;
//console.log(c.code);
c.display();
