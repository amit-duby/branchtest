var A = /** @class */ (function () {
    function A(name, last, email, password) {
        this.name = name;
        this.last = last;
        this.email = email;
        this.password = password;
        A.count++;
    }
    A.getname = function () {
        console.log("print tha number value ");
    };
    A.count = 0;
    return A;
}());
var b = new A('amit', "dwivedi", "amit@text.com", "125263");
var c = new A("ram", "dwivedi", "ram@text.com", "7859642");
console.log(A.count);
console.log(A.getname());
