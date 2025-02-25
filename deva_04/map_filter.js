// const array = ['deva','ram','pavan']
// const var1 = array.forEach((item)=>{
//     console.log(item);//array
    
// })
// console.log(var1);//undefined

///*********filter */
// const number0=[1,2,3,4,56,7,8]
// let newnum=number.filter((num)=>num>4 )
// console.log(newnum);

// let newnum1=number.filter((num)=>{
//      return num>4;
// })
// console.log(newnum1)///=>[]

//map
// const number1=[1,2,3,4,56,7,8]
// let var1=number.map((num)=>num+10)
// console.log(var1);


// const number5=[1,2,3,4,5,6,7,8]
// let var2 = number5
// .map((num)=>num*10)
// .map((num)=>num+1)
// console.log(var2);


////reduce method

 const newnum = [1,2,3]//this print sum of the array=>6
// const total = newnum.reduce(function(acc,curval){
//     console.log(`val1 ${acc} val2 ${curval}`);
    
//     return acc + curval
// },0)
// console.log(total);

// const mytotal = newnum.reduce((acc,cur)=>acc+cur,0)
// console.log(mytotal);


const shopingval = [
    {
        coursename:"java",
        courseprice:99
    },
    {
        coursename:"python",
        courseprice:99
    },
    {
        coursename:"js",
        courseprice:199
    }
]
const tot = shopingval.reduce((acc,item)=>acc+item.courseprice,0)
console.log(tot);

