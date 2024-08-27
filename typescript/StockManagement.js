"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Stock_js_1 = require("./Stock.js");
var s = new Stock_js_1.default(1, 'itc', 45);
s.display();
var ETF = /** @class */ (function (_super) {
    __extends(ETF, _super);
    function ETF() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ETF.prototype.show = function () {
        console.log(this.company);
    };
    return ETF;
}(Stock_js_1.default));
var MutualFund = /** @class */ (function () {
    function MutualFund(fundcode, fundName, broker) {
        this.fundcode = fundcode;
        this.fundName = fundName;
        this.broker = broker;
    }
    MutualFund.prototype.showData = function () {
        console.log("code:".concat(this.fundcode, " name:").concat(this.fundName, " broker:").concat(this.broker));
    };
    return MutualFund;
}());
var m = new MutualFund('bluchip', 'icici', 'broker');
m.showData();
