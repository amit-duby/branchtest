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
// let i=0;
// for(;i<10;i++){
//     console.log(i);
// }
var i = 0;
// for (; i < 10; i++) {
//     console.log(i);
// }
// while loop...
// while(i<5){
//     console.log(i)
//     i++;
// }
// do while loop
// do{
//     console.log(i)
//     i++;
// }while(i<10);
// function getTotal(...numbers: number[]): number {
//     let total = 0;
//     numbers.forEach((num) => total += num);
//     return total;
// }
// class App{
//     name
// getName(){
//     console.log(this.name)
// }
// }
// let a=new App()
// a.name='ram'
// a.getName();
// using constructore....
// class Person {
//     ssn: string;
//     firstName: string;
//     lastName: string;
//     constructor(ssn: string, firstName: string, lastName: string) {
//         this.ssn = ssn;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     getFullName(): string {
//         return `${this.firstName} ${this.lastName} ${this.lastName}`;
//     }
// }
// let c=new Person("dkei","jggui","jjujiiu");
// console.log(c.getFullName());
// inheritace ......
var Perant = /** @class */ (function () {
    function Perant() {
    }
    Perant.prototype.setName = function (name) {
        return this.name;
    };
    return Perant;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.getName = function () {
        return this.name;
    };
    return Child;
}(Perant));
var d = new Child();
d.setName('harry');
console.log(d.getName);
