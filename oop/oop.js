// OBJECT LITERAL

const user = {
    username: 'deva',
    email: 'basaedde@gmail.com',
    signIn:true,
    userDetail:function(){
        console.log('this info from the database');
        // console.log(this.username);
        // console.log(this);
        
        
        
    }
}
console.log(user.username);
// console.log(user.userDetail());
// console.log(this);


//  constructer function

const promione = new Promise()
const adate  = new Date()




function user(username,logincount,isLoogedin){
    this.username = username;
    this.logincount = logincount;
    this.isLoogedin = isLoogedin;
    return this
}
const user1 = new user('deva',2,true);
console.log(user1);


