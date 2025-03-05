// now we use the ES6 version

class user{
    constructor(username,email,password){
        this.email=email;
        this.password=password;
        this.username=username;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const deva1 = new user('deva',"deva@gmail.com",123)
console.log(deva1.encryptPassword());


//behind the seen

function user(username,email,password){
    this.email=email;
    this.password=password;
    this.username=username;
}

user.prototype.encryptPassword = function(){
    return `${this.username} abd`
}

user.prototype.encryptPassword = function(){
    return `${this.email} abd`
}
const deva = new user('deva','deva@gmail.oc',123);
console.log(deva);
