//datatypes catagory into two part primitive and non-primitive
//primtive
const score = 45;
const ID = 456;
const isLoged = false;
const  outside_temp = null;
let userEmail;//this undefined type
const id = Symbol('12345');
console.log(id);
let bignumber = 12345678910n;
console.log(bignumber);
//7 types:string,number,boolean,null,undefined,symbol,BigInt


//reference(non-primitive) : array,objects,Functions
//type of variable define in lang called static dont then dyanamically
//so js is dynamically type

let arr = ["devnand","pavan","ram"];
let myobj = {
    name:"devanand",
    age:19
};
let myfunction = function(){
    console.log("hello deva");
    
}
//for checking the type use typrof


//*****************memory allocation******************//
//stack memory use for store the primitive datatype
//in heap memory stire we non primitive datatype

let myyoutubeName = "baswadedeva";
let anothervariable = myyoutubeName;
anothervariable = "pavan";
console.log(myyoutubeName);
console.log(anothervariable);


let userOne = {   //this also align to this data
    email:"baswadedeva@gmail.com",
    upi:"user@ybl"
};
let userTwo = userOne;
userTwo.email="pavanbaswade@123";//this align to first data

console.log(userOne.email);
console.log(userTwo.email);



