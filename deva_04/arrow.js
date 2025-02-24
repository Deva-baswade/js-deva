const user ={
    username:"devanand",
    couseprice:999,
    welcomemessage:function(){
        console.log(`${this.username},this the hello`);
        console.log(this);
        
        
    }
}
user.welcomemessage()
user.username="ram";
user.welcomemessage();
//devanand,this the hello
// {
//   username: 'devanand',
//   couseprice: 999,
//   welcomemessage: [Function: welcomemessage]
// }
// ram,this the hello
// {
//   username: 'ram',
//   couseprice: 999,
//   welcomemessage: [Function: welcomemessage]
// } this th ebeasuse the this keyword
// console.log(this);//this simple give the =>{}

// the browser global object is the window
// if the i in console write the  log(this) then give above ans

function deva(){
    const username = "devanand"
    // console.log(this);
    console.log(this.username);//this give the undefined
    
    
}
deva();

const arrow=()=>{
    console.log("deva");
    
    
}
arrow();//=>deva


//########## above code of this we use here ######
const deva = () =>{
    console.log(this);//this also give the {}
    console.log(this.username);//this give the undefined
    
    
}
deva()



const add1 = (num1,num2) =>{

    return num1+num2;
}
console.log(add1(3,5));//this givve the 8


//emplicit arrow function return in one line
const add = (num1,num2) =>  num1+num2
add(4,5)//ANOTHER IS THE    (num+num2)"|" 


// another one is the object in implicit 
// const var = (user)=>({username:"devanand"})



