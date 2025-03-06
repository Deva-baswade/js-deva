const decriptor = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(decriptor);

// Math.PI = 5;
// console.log(Math.PI);

const deva = {
    name:"deva",
    course:JSON,
    price:123
}



Object.defineProperty(deva,'name',{
    writable:false,
    enumerable: false,

    devaBhai:function(){
        console.log("deva is legend");
        
    }

})
//console.log(Object.getOwnPropertyDescriptor(deva,'name'));

for(let [key,value] of Object.entries(deva)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
    
    
}