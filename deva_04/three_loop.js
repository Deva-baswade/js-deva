// this loop based on the array

// for  of loop

const number =[1,2,3,4,5];
for (const element of number) {
    console.log(element);
    
    
}

const greeting = "devaannd";

for(const i of greeting){
    console.log(i);
    
}

//maps   

const map = new Map();
map.set('ind',"india");//this not store the duplicate
map.set('usa',"united state of america")
map.set('fra',"france")

//  console.,log(map)

for(const [i,j] of map){
    console.log(i,j);
}

// const myobject = {
//     number:12345,
//     name:"deva",
//     age:19
// }
// for(const i of myobject){
//     console.log(i);//this give the error
    
// }



//this the for in loop
const myobj ={
    name:"deva",
    number:12345,
    age:12
}

for (const key in myobj) {
    console.log(key,myobj[key]);
    
    // name deva
    // number 12345
    // age 12
}

const array = ['deva','ram','pavan']
for(const i in array){
console.log(i);
console.log(array[i]);

}




const coding =['deva','pavan','ram']
coding.forEach(function(val){
    console.log(val);
    
})
coding.forEach((item) =>{
    console.log(item);
    
})


function printMe(item){
    console.log(item);
    
}
coding.forEach(printMe)

coding.forEach((item,index,array)=>{
    console.log(item,index,array);
    
})

//in array in object

const userdata =[
    {
        username:"deva",
        userage:"19"
    },
    {
        username:"ram",
        userage:"19"
    },
    {
        username:"pavan",
        userage:"19"
    }
]
userdata.forEach((item)=>{
        console.log(item.username);
})