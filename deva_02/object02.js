//const tinder_user= new Object ();//=>{} singleton
// const tinder_user = {}//{}=>non-singlrton
// console.log(tinder_user);

// const tinder_user1 = {};
// tinder_user1.name="devanand"
// tinder_user1.Id=12345
// tinder_user1.email="baswadeva@gmail.com"
// console.log(tinder_user1);//{ name: 'devanand', Id: 12345, email: 'baswadeva@gmail.com' }


//nested object means the object in the object

// const ob = {
//     fullname:{
//         userfullname:{
//             fname:"deva",
//             lname:"baswade"
//         }
//     }
// }
// console.log(ob.fullname.userfullname.fname);//deva

// const obj1 = {  1:"a", 2:"b"}
// const obj2 = {3:"c",4:"d"}
// const obj3 = {obj1,obj2};
// console.log(obj3);//{ ob1: { '1': 'a', '2': 'b' }, ob2: { '3': 'c', '4': 'd' } }
// const obj4 = Object.assign({},obj1,obj2);
// console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//  const obj6 = {...obj1,...obj2};
//  console.log(obj6);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
 


const nestedobj = [
    {
        name:"deva",
        email:"baswadaedeva@gmail.com"
    },
    {
        id:123,
        name:"pavan"
    },
    {
        age:12,
        Id:1234
    }
]
////for accesing 
nestedobj[1].email
console.log(nestedobj);


