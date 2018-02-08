/* is there another way to introduce class? */

function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

Vehicle.prototype.turnOn = function () {
  this.isRunning = true;
}

Vehicle.prototype.turnOff = function () {
  this.isRunning = false;
}

Vehicle.prototype.honk = function () {
  if (this.isRunning) {
    return 'beep!';
  }
}

// 1 - Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber)

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = this.favoriteNumber;
  this.family = [];
}

/* 2 - Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.

Examples:
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.fullName() // "Elie Schoppik"

*/

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
}

// 3 -  Add a property on the object created from the Person function called family which is an empty array. This will involve you adding an additional line of code to your Person constructor.

/* 4 - Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor (HINT - take a look at the instanceof keyword). Make sure that your family array does not include duplicates! This method should return the length of the family array.

Examples:

    var person = new Person("Elie", "Schoppik", "purple", 34)
    var anotherPerson = new Person()
    person.addToFamily(anotherPerson); // 1
    person.addToFamily(anotherPerson); // 1
    person.family.length // 1

    person.addToFamily("test"); // 1
    person.addToFamily({}); // 1
    person.addToFamily([]); // 1
    person.addToFamily(false); // 1
    person.family.length // 1
*/

Person.prototype.addToFamily = function(familyMember) {
  if (familyMember instanceof Person) {

    if (!this.family.includes(familyMember)) {
      this.family.push(familyMember);
      return this.family.length;
    } else {
      return 'Family member already exists';
    }

  } else {
    return 'Not an instance of Person';
  }
}

// PART II

// 1 - Implement your own version of Array.prototype.map. The function should accept a callback and return a new array with the result of the callback for each value in the array.

Array.prototype.myMap = function(cb) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i, this));
  }
  return newArr;
 }

/* 2 - Implement a function called reverse that reverses a string and place it on the String.prototype

Examples:
    "test".reverse() // "tset"
    "tacocat".reverse() // "tacocat"
*/

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

// inherit 1 thing from another

function Vehicle(make,model,year){
  this.make = make;
  this.model = model;
  this.year = year;
}

Vehicle.prototype.start = function(){
  return "VROOM!"
}

Vehicle.prototype.toString = function(){
  return "The make, model, and year are " + this.make + " " + this.model  + " " + this.year;
}

function Car(make,model,year){
  Vehicle.apply(this, arguments)
  this.numWheels = 4;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

function Motorcycle(make,model,year){
  Vehicle.apply(this, arguments)
  this.numWheels = 2;
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;