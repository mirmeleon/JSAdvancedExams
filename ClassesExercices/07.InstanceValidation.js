
class CheckingAccount{
    constructor(clientId, email, firstName, lastName ){
        let products = [];
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId(){
        return this._clientId;
    }

    set clientId(value){
        if(value.length !== 6){
            throw new TypeError("Client ID must be a 6-digit number");
        }
        this._clientId = value;
    }

    get email(){
        return this._email;
    }

    set email(email){
        let pattern = "/[a-zA-Z]+@[a-zA-Z.]/g";
        let rgx = new RegExp(pattern);
        if(!rgx.exec(email)){
            throw new TypeError("Invalid e-mail");
        }
       this._email = email;
    }
}