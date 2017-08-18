function getPersons(){
class Person {
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

   return [
       new Person('Maria', 'Petrova', 22, 'mp@yahoo.com'),
       new Person('Softuni'),
       new Person('Stephan', 'Nikolov', 25),
       new Person('Peter', 'Kolev', 24, 'ptr@gmail.com'),
   ]
}

for(let p of getPersons()){
    console.log(p);
}