//add cart in web
function calculatecartPrice(...num1){//... this the spread or the rest oprstor
    return num1;
}
console.log(calculatecartPrice(2,3,5))

const user ={
    username:"name",
    userId:12345
}
function myobj(anyobject){
    console.log(anyobject.username);
    
}
myobj(user)//this the normal method
myobj({
    username:"name",
    userid:123
})//this also can valid

const mynewarray = [100,200,300]

function arrayReturn(getarray){
    return getarray[1]
}
console.log(arrayReturn(mynewarray));
