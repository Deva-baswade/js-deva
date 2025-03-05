class user{
    constructor(username){
        this.username=username;
    }

    logMe(){
        return `name is the :${this.username}`
    }

    static createId(){//that save from the run 
        return `123`;
    }
}

const deva = new user('deva')
console.log(deva.createId());

class pavan extends user{
   constructor(email,usernmae){
    super(usernmae)
    this.email=email
   }
}

const redmi = new pavan('deva','deva22@gmail.com');
redmi.logme();


//when we use statis then code that not run not acess by
// paren as well as child