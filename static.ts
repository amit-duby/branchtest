class A{
    static  count=0;

    constructor(

        public name:string,
        public last:string,
        private email:string,
        private password:string
        
        ){
           A.count++;
        }

        public static getname(){
            console.log(`print tha number value `)
        }
}

let b=new A('amit',"dwivedi","amit@text.com","125263");
let c=new A("ram","dwivedi","ram@text.com","7859642");

console.log(A.count);
console.log(A.getname())