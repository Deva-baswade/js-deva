// const power5 = function(number){
//     return number*5;
// }
// power5.Power=5;
// console.log(power5(2));
// console.log(power5.Power);
// console.log(power5.prototype);

// function createUser(username, score){
//     this.username = username;
//     this.score = score;
// }

// createUser.prototype.increment = function(){
//     this.score++;
// }

// createUser.prototype.print = function(){
//     console.log(this.username, this.score);
// }

// const deva = new createUser('deva', 2);
// const ram = new createUser('ram', 3);

// deva.increment();
// deva.print();
// ram.increment();
// ram.print();

// let myName = 'deva     ';//we have another property myname.trim().length
// console.log(myName.truelength);//this for the treu length


let devaBhai = {
    thor:"mahastra",
    ironman:"india",

    getSpiderman:function(){
        console.log(this.thor);
        
    }
}
devaBhai.getSpiderman();