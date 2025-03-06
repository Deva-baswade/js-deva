class User {
    constructor(email, password) {
        this.email = email;
        this._password = password;  // Changed variable name to `_password`
    }

    get email(){
        return this._email;
        }

    set email(value){
        this._email = value
    }

    get password() {
        return this._password;  // Return the original password
    }

    set password(value) {
        this._password = value;
    }
}

const deva = new User("deva@123", 1234);
console.log(deva.password);  // Access the password property correctly
console.log(deva.email);
