// # Class Exercises
//
// ## Question 1
//
// a. Write a class called `Person` that has 3 properties: a first name, a last name and a middle name.
// Create 2 instances of a `Person`. Print one of their first names.
console.log("Number 1a");

class Person {
  constructor(firstName, middleName, lastName) {
    this.firstName = firstName,
    this.middleName = middleName,
    this.lastName = lastName
  } fullName () {
    console.log(`${this.firstName} ${this.middleName} ${this.lastName}`);
  }
}

let briany = new Person("Briany", "Rosalia", "Taveras")
let kadijah = new Person("Kadijah", "Christina", "Wilson")

console.log(briany.firstName);

// b. Write a method in `Person` called `fullName` that will return a formatted string of an instance's full name.
// Call this method on both the instances you created in part a.
console.log("Number 1b");

briany.fullName();
kadijah.fullName();

// ## Question 2
//
// a. Create a class called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
console.log("Number 2a");

class Book {
  constructor(title, author, rating) {
    this.title = title,
    this.author = author,
    this.rating = rating
  } isGood () {
    console.log(this.rating >= 7);
  }
}

let fouragreements = new Book("The Four Agreements", "Don Miguel Ruiz", 8)
let alchemist = new Book("The Alchemist", "Paulo Coelho", 6)

// b. Add a method to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7.
console.log("Number 2b");

alchemist.isGood();
fouragreements.isGood();


// ## Question 3
//
// a. Create a `Dog` class with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
console.log("Number 3a");

class Dog {
  constructor(name, breed, mood, hungry) {
    this.name = name,
    this.breed = breed,
    this.mood = mood,
    this.hungry = hungry
  } playFetch () {
    this.hungry = true
    this.mood = "Playful"
  console.log("Ruff!")
} feed () {
  if (this.hungry === true) {
    this.hungry = false
    console.log("Woof!")
  } else {
    console.log("The dog doesn't look hungry.")
  }
} toString () {
  console.log(`My dog's name is ${this.name}, he is a ${this.breed} and he is ${this.mood}.`)
}
}

let sam = new Dog("Sam", "Golden Retriever", "sleepy", false)
console.log(sam);

// b. Add a method called `playFetch`.
// It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
console.log("Number 3b");

sam.playFetch();
console.log(sam);

// c. Add a method called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!"
//  If the dog is not hungry, it should log "The dog doesn't look hungry".
console.log("Number 3c");

sam.feed();
console.log(sam);

// d. Add a method called `toString` that returns a description of the dog.
console.log("Number 3d");

sam.toString();

// ## Question 4
//
// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`.
// Give them all values equal to the freezing point of water.
console.log("Number 4a");

let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 273.15
}
console.log(freezingPoint);

// b. Make a class called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
console.log("Number 4b");

class Celsius {
  constructor(celsius) {
    this.celsius = celsius
  } getFahrenheitTemp() {
    console.log(this.celsius + 273.15)
  } getKelvinTemp() {
    console.log((this.celsius * 9/5) + 32);
  } isBelowFreezing () {
    console.log(this.celsius < freezingPoint.celsius);
  }
}


let outsideTempt = new Celsius(10)
console.log(outsideTempt);

outsideTempt.getKelvinTemp();
outsideTempt.getFahrenheitTemp();

// c. Give `Celsius` a method called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).
console.log("Number 4c");

let temp = new Celsius(10)
let temp1 = new Celsius(-1)
temp.isBelowFreezing();
temp1.isBelowFreezing();

// a. Create a class called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`.
// Create an instance of your `Movie`.
console.log("Number 5a");

class Movie {
  constructor (name, year, genre, cast, description) {
    this.name = name,
    this.year = year,
    this.genre = genre,
    this.cast = cast,
    this.description = description
  } blurb () {
    console.log(`The movie ${this.name} is a ${this.genre} film, that came out in ${this.year}, featuring ${this.cast}.`);
  }
}

let titanic = new Movie("Titanic", "1997", "Drama/Disaster", ["Leonardo Dicaprio", "Kate Winslet"])
console.log(titanic);

// b. Create an method inside `Movie` called `blurb` that returns a formatted string describing the movie.
console.log("Number 5b");

titanic.blurb();

// ## Question 6
//
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.
//
// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.
//
// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)
console.log("Number 6");

class Vector {
  constructor(x, y) {
    this.x = x,
    this.y = y
  } plus (vector) {
    return (`{x: ${this.x + vector.x}, y: ${this.y + vector.y}}`)
  } minus (vector) {
    return (`{x: ${this.x - vector.x}, y: ${this.y - vector.y}}`)
  } getLength () {
    let c2 = Math.pow(this.x, 2) + Math.pow(this.y, 2)
    return console.log(Math.sqrt(c2));
  }
}

let v1 = new Vector(1, 2)
let v2 = new Vector(2, 3)
console.log(v1.plus(v2));
console.log(v1.minus(v2));

let v3 = new Vector(3, 4)
v3.getLength();


// ## Question 7
//
// a. Make a class called `Car` with properties `make` and `model`.  Create an instance of a `Car`.
console.log("Number 7a");

class Car {
  constructor (make, model) {
    this.make = make,
    this.model = model
  } static numberOfWheels () {
    console.log("Car has four wheels.")
  }
}

let toyotaCamry = new Car ("toyota", "camry")
console.log(toyotaCamry);
Car.numberOfWheels(toyotaCamry);

// b. Make a class called `Bike` with properties `gears` and `hasBell`.  Create an instance of `Bike`.
console.log("Number 7b");

class Bike {
  constructor (gears, hasBell) {
    this.gears = gears,
    this.hasBell = hasBell
  } static numberOfWheels () {
    console.log("Bike has two wheels.")
  }
}

let bike1 = new Bike ("4", true)
console.log(bike1);
Bike.numberOfWheels(bike1);

// c. Give each class a static method called `numberOfWheels` that returns the number of wheels (2 for bikes, 4 for cars).
// Why does it make sense for this to be a static method instead of an instance method?
console.log("Number 7c");

Car.numberOfWheels(toyotaCamry);
Bike.numberOfWheels(bike1);
console.log("It makes sense for numberOfWheels to be a static method instead of an instance method because the number of wheels is going to be the same for all bikes, and the number of wheels is going to be the same for all cars.");


// ## Question 8
//
// a. Make a class called `Vehicle` with properties `color` and `name`.
//  Give it a method called `makeSound` which logs "WHHOOSSSH" to the console.
console.log("Number 8a");

class Vehicle {
  constructor (color, name) {
  this.color = color,
  this.name = name
} makeSound () {
  console.log("WHHOOSSSH");
}
}

let blueJeep = new Vehicle("blue", "jeep")
console.log(blueJeep);
blueJeep.makeSound();

// b. Modify your `Car` and `Bike` classes from Question 7 to extend the `Vehicle` class.
console.log("Number 8b");

class Car2 extends Vehicle {
  constructor (color, name, make, model) {
    super (color, name)
    this.make = make,
    this.model = model
  } static numberOfWheels () {
    return ("Car has four wheels.")
  }
}

let toyotaCamry2 = new Car2 ("black", "james", "toyota", "camry")
console.log(toyotaCamry2);

class Bike2 extends Vehicle {
  constructor (color, name, gears, hasBell) {
    super (color, name)
    this.gears = gears,
    this.hasBell = hasBell
  } static numberOfWheels () {
    return ("Bike has two wheels.")
  }
}

let bike2 = new Bike2 ("purple","sophie","6", true)
console.log(bike2);


// c. Create a new `Bike` instance that has a `color` of "green" and `name` "Bikey McBikeface".
console.log("Number 8c");

let bikey = new Bike2 ("green", "Bikey McBikeface", "6", true)
console.log(bikey);

// d. Create a new `Car` instance that has a `color` of "red" and `name` "Carry McCarface"
console.log("Number 8d");

let carry = new Car2 ("red", "Carry McCarface", "Honda", "Civic")
console.log(carry);
