////non-primitive data-tyepe;
////array

// const number = [0,1,2,3,4,5,6,7,8,9,10];
// const name = ['deva','pavan','ram','shivaji','baswade'];
// const defineArray = new Array(1,2,3,4,5);
// //for accesing
// console.log(name[1],number[1],defineArray);//pavan,1,[ 1, 2, 3, 4, 5 ]

////method of array

//let myArray = [1,2,3,4,5];
// myArray.push(6);//=>[ 6 ] this add in last
// myArray.unshift(9)//=>[ 9, 1, 2, 3, 4, 5 ] this add in front
// myArray.shift()//this method delate the first value [ 2, 3, 4, 5 ]
// myArray.pop();//=> delete last value

// let array = [1,2,3,4,5];
// let array2 = [5,4,3,2];
// console.log(array.concat(array2));//=>[1,2,3,4,5,5,4,3,2]
// console.log(array.includes(5));//=>true
// console.log(array.indexOf(5));//=>4
// let newarray = array.join()//this datatype convert into string copy all value

////*******this difference bateween slice and spilce***

// let array =[1,2,3,4,5];
// console.log(array);
// const array1 = array.slice(1,3);
// console.log("a ",array1);
// const array2 = array.splice(1,3);
// console.log("b ",array2);
//  const marvel_hero = ["thor","ironman","shaktiman"];
// const dc_heros = ["superman","flash","batman"];
// marvel_hero.push(dc_heros);//[ 'thor', 'ironman', 'shaktiman', [ 'superman', 'flash', 'batman' ] ]
//marvel_hero.concat(dc_heros);//[ 'thor', 'ironman', 'shaktiman', [ 'superman', 'flash', 'batman' ] ]
//const all = marvel_hero.concat(dc_heros);//[ 'thor', 'ironman', 'shaktiman', 'superman', 'flash', 'batman' ]
//console.log(all);

// const for_spread_property = [...marvel_hero,...dc_heros];
// console.log(for_spread_property);//[ 'thor', 'ironman', 'shaktiman', 'superman', 'flash', 'batman' ]

////$$$$$$$$$$$$$$$$$$$$$ flat property

// const array1 = [1,2,3,4[4,3,2,1],5,6[6,[1,2,3],5,[1,2,3,4]]];//convert into one array
// const array2 = array1.flat(Infinity);
// console.log(array2);//[ 1, 2, 3, undefined, 5, undefined ]


// let num1 = 100;
// let num2 = 200;
// let num3  = 300;
// console.log(Array.of(num1,num2,num3));//[ 100, 200, 300 ]


 


