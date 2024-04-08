// Exercises for learning about Object Oriented JavaScript: Part 1


// Question 1: Based on the Constructor function below. Create three Flower objects

function Flower(color, petals, smell){
    this.color = color;
    this.petals = petals;
    this.smellsPretty = smell;
}

let flower1 = new Flower("purple", "oblong", true );
let flower2 = new Flower("red", "round", true );
let flower3 = new Flower("white", "oval", false );



// Question 2: 
// Review the following code:

function Contact(name, email) {
  this.name = name;
  this.email = email;
 }

let myOtherContact = new Contact('Everest', 'everest@hello.com');
console.log(myOtherContact.name);
  

// What would be logged to the console when this code is run?
// Everest



// Question 3: 
// Given the following code:

function Animal(species, noise) {
  this.species = species;
  this.noise = noise;
  this.makeNoise = function() {
    console.log(this.noise + ", " + this.noise);
  }
}
// How would you create an instance of an Animal?
let animal1 = new Animal("Canine", "bark");
console.log(animal1);




// Question 4: TODO LIST EXERCISE

// Create a constructor for an object that holds the information for a Todo List. Each new object created by the constructor should have:

// A description of the task.
// An attribute to define if the task is done.
// A method to call when the task is done.

function ToDoList(description, attribute, method) {
  this.taskDescription = description;
  this.taskIsDone
  this.method = method;
}

// Create 3 objects with the constructor function

let item1 = new ToDoList("")


//Question 5:
// Exercise: FinTech Project

// Create a constructor function for an "Account" with the following properties:
//    - accountNumber (a unique number for each account)
//    - accountHolder (name of the account holder)
//    - balance (initial balance, default to 0)
//    - deposit(amount) method that adds the specified amount to the balance
//    - withdraw(amount) method that subtracts the specified amount from the balance


// Create two instances of the Account object and test the deposit and withdraw methods.
