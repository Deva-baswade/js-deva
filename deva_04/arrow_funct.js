// const user = {
//     username : "devanand",
//     price :99,
//     welcomeMesa:function(){
//         console.log(`${this.username},welcome here`);
//         console.log(this);
        
//         //this used for current content
//     }
// }
// user.welcomeMesa();
// user.username = "pavan";
// user.welcomeMesa();
/*devanand,welcome here
{
  username: 'devanand',
  price: 99,
  welcomeMesa: [Function: welcomeMesa]
}
pavan,welcome here
{ username: 'pavan', price: 99, welcomeMesa: [Function: welcomeMesa] }*/

// console.log(this);//{}

//browser global object is the window


function one(){
    console.log(this);
    
}
one()