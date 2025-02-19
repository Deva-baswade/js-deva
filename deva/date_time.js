//dates
//typeof date is =>object
//const myDate = new Date();
console.log(myDate);//2025-02-19T01:53:03.423Z this the result
console.log(myDate.toString());//Wed Feb 19 2025 01:54:03 GMT+0000 


console.log(myDate.toISOString());//2025-02-19T01:57:06.965Z
console.log(myDate.toJSON());//2025-02-19T01:57:06.965Z
console.log(myDate.toLocaleDateString());//2/19/2025
console.log(myDate.toLocaleString());//2/19/2025, 1:57:06 AM

let ownDate = new Date(2025,1,19,7,32)//this the format to specify the date 
console.log(ownDate.toString());//Wed Feb 19 2025 07:32:00

yy-mm-dd
let tDate = new Date("2025-02-19")
//console.log(tDate.toString());//this give in string so dont use for
console.log(tDate.toLocaleString());//2/19/2025, 12:00:00 AM


let myDate = new Date("01-14-2025");
//timestamp this used in gameing

let mTime = Date.now();//=>dont use new 
console.log(mTime);//=>1739931141848
console.log(myDate.getTime());//=>1736812800000
//converting into sec intview question
console.log(Math.floor(Date.now()/1000));//=>1739931297

myDate = new Date()
console.log(myDate.getDay());//=>3
console.log(myDate.getDate())//=>19
console.log(myDate.getMonth()+1);//user not confuse//=>2

myDate.toLocaleString('default',{//for suggestion ctrl and space
    weekday:"log"

});


