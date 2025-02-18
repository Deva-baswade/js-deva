let Id = 33;
console.log(Id);
console.log(typeof Id);

//conversion of datatype one into another byusing simple method

let newString = String(Id);
console.log(typeof newString);// ans is string
let score = '33';// if we add abc after the 33 then also give the number in result but when we print then give NaN not a number
let newScore = Number(score);
console.log(typeof newScore);
let number = null;//here undefined then give NaN
console.log(typeof number);
console.log(number);

//if we convert one number into another then 
//"33"=>33
//"33abc"=>NaN
//true=>1, false=>0

let isnumber = "deva";//1 or number give true 0 or empty give false
let newIsnumber = Boolean(isnumber);
console.log(newIsnumber);






