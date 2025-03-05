class user {
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`this the ${this.username}`);
        
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username) 
        this.email=email;
         // this.username=username;
        this.password=password;
    }

    addCourse(){
        console.log(`this the ${this.username}`);
        
    }
}
const deva = new teacher('deva',"email@gmail.com","123");
console.log(deva);
