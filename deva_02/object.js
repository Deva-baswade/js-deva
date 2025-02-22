///this is the object
//object literals
// const mySym = Symbol("key1");
const user = {
    name:"devanand",
    
    myId:12345,
    age:19,
    email:"deva@gamil.com"

}
// console.log(user.age);//this the first method
// console.log(user["age"]);//this the second method to acess the object
// //the second method is nice to use
// console.log(user[mySym]);


// user.age=20;//this for overrite the value
// console.log(user["age"])//=>20
// user.email="baswadepaa@gmail.com";
// Object.freeze(user);
// console.log(user["email"]);
user.greeting = function(){
    console.log("the deva is here");
    
}
console.log(user.greeting());//the deva is here undefined
console.log(user.greeting);//[Function (anonymous)]

user.greeting2 = function(){
    console.log(`this the sting interpulation ${this.name}`);
    
}
console.log(user.greeting2())