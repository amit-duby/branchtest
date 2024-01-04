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
var A = /** @class */ (function () {
    function A(name, city, phonenumber, id) {
        this.name = name;
        this.city = city;
        this.phonenumber = phonenumber;
        this.id = id;
    }
    A.prototype.get = function () {
        console.log("this is parent class name".concat(this.name));
        console.log("this is parent class city ".concat(this.city));
        console.log("this is parent class phonenumber ".concat(this.phonenumber));
        console.log("this is parent class id ".concat(this.id));
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B(name, city, phonenumber, id, classname) {
        var _this = _super.call(this, name, city, phonenumber, id) || this;
        _this.classname = classname;
        return _this;
    }
    B.prototype.setdata = function () {
        console.log("this is good class ".concat(this.classname, " "));
    };
    return B;
}(A));
var a = new B("mit", "sagar", 25369523, 1425665, 12);
console.log(a.get());
console.log(a.setdata());
