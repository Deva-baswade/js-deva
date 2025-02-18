
const score=100
const newScore = new Number(100.223);
console.log(score);//*****this give 100 as it is
console.log(newScore);//*****this give [number:100]

console.log(newScore.toString().length);//first string then give length 3
console.log(newScore.toFixed(2));//this give 100.00
console.log(newScore.toPrecision());

const number = 10000000;
console.log(number.toLocaleString())//this convert 10,000,000 into result


/*number have diffrent value*/ //for se Number.


////++++++++++++++++++++maths+++++++++++++++++++

console.log(Math)//this give this is obj
console.log(Math.round(4.5));//this round value
console.log(Math.ceil(4.2))//this is give the higher value 5
console.log(Math.floor(4.9))//this give least value 4
console.log(Math.abs(-4));//this convert -ve to +ve
console.log(Math.floor(Math.random()*10+1));
console.log(Math.ceil(Math.random()*10+1));


// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random()*(max -min +1))+min);
