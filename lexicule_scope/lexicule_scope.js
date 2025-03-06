//this scope is the we acess data of the parent in child function


function outer(){
    let username = "deva";
    function inner(){
        console.log("inner is the deva: ",username);
        
    }
    inner();
}
outer();


//but no the child to chlid or chile to parent

function outer(){
    let username = "deva";
    function inner(){
        let deva = "ram";
        console.log("inner is the deva: ",username);
        
    }

    function usernma2(){
        console.log(ram)//this give error;
        
    }
    inner();
}


function outer() {
    let username = "deva";
    
    function inner() {
        let anotherName = "ram";
        console.log("inner is the deva: ", username);
    }

    inner();  // Call the inner function to see the closure in action
    return username;
}

outer();


