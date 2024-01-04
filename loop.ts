// let i=0;
// for(;i<10;i++){
//     console.log(i);
// }
let i = 0;
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
class Perant{
    name
    setName(name){
        return this.name;
       
    }
}

class Child extends Perant{
   getName():string{
    return this.name;
   }
}
let d=new Child();
d.setName('harry');
console.log(d.getName);

