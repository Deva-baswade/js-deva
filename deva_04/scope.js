////what is the global and the  local

let a = 10;
const b =20;
var c = 30;//=>now we understand dont use of var after the scope also

if(true){
    let a = 10;
    const b =20;
    var c = 30
}
console.log(a);//this error say not define
console.log(b);//this give error 
console.log(c);// this is not give error


//in the scope value cld the block scope and the 
//the outside scope value is the  global



//nsted scope
function one(){
    const username = "devanand";
    function two(){
        const web = "google";
        console.log(username);//we can use parent var in child scope
        
    }//console.log(web);//we dont child scope var in parent scope
    two()
}
one()

if(true){
    const username = "devanand";
    if(username=="devanand"){
        const web = "microsoft"
        console.log(username + web);
        
    }console.log(web);//this error
    
}
console.log(username);//this produce error

//+++++++++++some interesting++++++

one(5);//we can decleare here also
function one(num){
    return num+1;
}


twoNum(5)//this produce error
const twoNum = function two(num){
    return num+2;
}
twoNum(5)