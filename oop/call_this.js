////if there any function in function then the .
// //this word  browser take the window and the node envoirment take =>{}

    function setUser(username){
        //complex problem
        this.username = username
    }
    
    function createUser(username,email,password){
        setUser.call(this,username)// setUser(username)
        //another two acess but not the usename acess
    
        this.email=email
        this.password=password
    }
    
    const deva = new createUser("deva","devaBswade@45gmail.com",'123');
    console.log(deva);
    