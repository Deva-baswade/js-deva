const user ={
    _email:"baswade@",
    _password: 124,

    get email(){
        return this._email.toLocaleUpperCase()
    },
    set email(value){
        this._email = value;
    }
}
const deva = Object.create(user);
console.log(deva.email);
