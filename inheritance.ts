class A{
    name:string
    city:string
    phonenumber:number
    id:number

   constructor(name,city,phonenumber,id){
      this.name=name;
      this.city=city;
      this.phonenumber=phonenumber;
      this.id=id;
   }
    
   get(){
    console.log(`this is parent class name${this.name}`);
    console.log(`this is parent class city ${this.city}`)
    console.log(`this is parent class phonenumber ${this.phonenumber}`)
    console.log(`this is parent class id ${this.id}`)
   }

}
class B extends A{
  
  classname
    constructor(name:string,city:string,phonenumber:number,id:number,classname:number){
    super(name,city,phonenumber,id)
    this.classname=classname;
     
    }
    setdata(){
        console.log(`this is good class ${this.classname} `)
    }
}
let a=new B("mit","sagar",25369523,1425665,12);
console.log(a.get())

console.log(a.setdata());