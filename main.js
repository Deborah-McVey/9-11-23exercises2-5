/* Exercise #2
Objective: Delve into Object-Oriented Programming by creating and interacting with classes.

Instructions:

Define a Person class with properties name and age.
Add a method greet() to this class which outputs a greeting.
Instantiate two different Person objects and invoke their greet methods. */

class FirstPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
       return console.log(`Hello, ${this.name}, how are you? Are you ${this.age} years old?`);
    }
    }

let firstName = new FirstPerson('Janet', 56);
let firstName1 = new FirstPerson('David', 34);

firstName.greet();
firstName1.greet();

/* Exercise #3
Objective: Understand the role of constructor methods within classes.

Instructions:

Modify your Person class. The constructor should now accept and initialize name and age properties.
Create two different Person instances with unique names and ages. */

class SecondPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return console.log(`Hello, ${this.name}, how old are you? ${this.age}.`);
    }
}

let myName = new SecondPerson('Janet', 56);
let myName1 = new SecondPerson('David', 34);

myName.greet();
myName1.greet();


/* Exercise #4
Objective: Familiarize with static methods in classes.

Instructions:

Add a static method called info() to the Person class. This method should return a statement like, "This is a Person class".
Try accessing this method both from the class itself and from an instance of the class. Document the outcomes. */

// ~ Static Method ~ //
class ThirdPerson {
	static info(name, age) {
		return name + age;
	}
}
const thirdPerson = new ThirdPerson();
console.log(thirdPerson.info('Janet', 56));

console.log(ThirdPerson.info('Janet', 56));


/* Exercise #5
Objective: Implement getters and setters for class properties.

Instructions:

Within your Person class, add getters and setters for the age property.
Ensure with the setter that age can't be set to a negative value.
Instantiate a Person object, try setting a negative age, and observe the results. */

class Person {
    age;

    constructor(age) {
        this.age = age;
    }

    get age() {
        return this.age;
    }

    set age(number) {
        if (number < 0) {
            console.log("Age can't be negative!");
        } else {
            this.age = number;
        }
    }
}

const year = new Person(95);
console.log(year.age); // 95
year.age = -3;  // Age can't be negative!