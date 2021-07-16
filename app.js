// Sanity check
console.log('Hello World! 👋🌎')

// Lesson Objectives:
// Create objects & access their properties
// Give them properties
// Give them functionalities (methods)
// Understand "this"
// using for...in loops
// using arrow functions


// key:value pairs
let myExampleObj = {
    someKey: "some value"
}

console.log(myExampleObj.someKey) // dot notation
console.log(myExampleObj["someKey"]) // bracket notation
console.log(myExampleObj.aKeyThatDoesntExist) // gets undefined

let myCar = {
    make: 'Chevrolet',
    model: 'Equinox',
    year: 2011,
    color: 'Grey',
    mileage: 80000,
    needsOilChangeAt: 86000,
    honk: function() {
        console.log("honk 🦢")
    }
}

// Increase the mileage on my car
myCar.mileage = 81000;
console.log(myCar.mileage)

// Use the honk functionality of my car
myCar.honk() // "invoke" the honk function

// Add a new key value pair to myCar that is a boolean
// for my check engine light
myCar.checkEngine = true
console.log(myCar)

// Exercise!
const garcia = {
    albums: ['shady grove', 'run for the roses', 'hooteroll', 'Garcia', 'Reflections'],
    instruments: ['Vocals', 'pedal steel', 'electric guitar', 'acoustic guitar', 'banjo'],
    alive: false,
    quote: 'Im shopping around for something to do that no one will like',
    friends: [{
      name: 'Bobby weir',
      hobby: 'guitar'
    },
    {
      name: 'Bob Dylan',
      hobby: 'writing songs'
    },
    {
      name: 'Allen Ginsberg',
      hobby: 'writing poems'
    },
    {
      name: 'Phil Lesh',
      hobby: 'Playing dope bass lines'
    }],
    thisExampleFunc: function() {
        console.log(this)
    }
}
// Print the following:
// 'hooteroll'
console.log(garcia.albums[2])
// 'Bobby weir'
console.log(garcia.friends[0].name)
// 'writing poems'
console.log(garcia.friends[2].hobby)
// 'banjo'
console.log(garcia.instruments[4])

// Edit the following properties:
// change the alive property to true using dot notation with the object
garcia.alive = true
console.log(garcia.alive)
// change the quote property to 'Everybody just be nice to each other' using bracket notation
garcia.quote = 'Everybody just be nice to each other'

// Add a method
// add a method to the garcia object named speak that logs out "Heyy, Thats a good song!"
garcia.speak = function() {
    console.log("Heyy, Thats a good song!")
}
garcia.speak()
// add a method to the garcia object named letsPlay that logs out "La daaa da da, La daa, da, da"
garcia.letsPlay = function() { //anonymous function
    console.log("La daaa da da, La daa, da, da")
}


function theNameOfTheFunction() {

}


// Lesson: "this" in javascript
// Definition: "this" refers to the object that is invoking the method
// "Context"

let myOtherCar = {
    wheels: 4,
    make: 'Chevrolet',
    model: 'Equinox',
    year: 2011,
    color: 'Grey',
    mileage: 80000,
    needsOilChangeAt: 86000,
    checkEngineLight: true,
    honk: function() {
        console.log("honk 🦢")
    },
    drive: function() {
        // Drive increases my mileage to 100000
        this.mileage = 100000
    },
    // Write a function that turns off the check engine light
    elbowGrease: function() {
        this.checkEngineLight = false
    }
}

// we expect the myOtherCar.mileage to be 100000 after this function runs
myOtherCar.drive()
console.log(myOtherCar.mileage)

let myCars = [myCar, myOtherCar]
myOtherCar.drive()

function exampleFunc() {
    console.log(this)
}
exampleFunc()


myOtherCar.elbowGrease()
console.log(myOtherCar.checkEngineLight)




function doStuff() {
    console.log(this) // "global context" - we're gonna the window object
}

const myObj = {
    whatsThis: function() {
        console.log(this) // 
    }
}

console.log(myObj.whatsThis())


// Arrow functions
// ECMAScript - ES6 added arrow functions in 2015

function myRegularFunc() {
    
}

const myArrowFunc = () => {
    // They change the way "this" works slightly
}

// Lets explore the difference between
// regular and arrow functions
const game = {
    start: function() {
        const gameTimer = setInterval(function() {
            console.log('hi', this) // we wanted to see "game" but saw "window" instead
        }, 1000)
    },
    betterStart: function() {
        const gameTimer = setInterval(() => {
            console.log('hello', this)
        }, 1000)
    }
}

// game.start()
// game.betterStart()

// Recap:
// Definition: "this" refers to the object that is invoking the method
// Arrow functions have different "this" rules
// Arrow functions use "lexical" scope
// That means - instead of using "this" being the object that invoked the method
// "this" instead is the object where the arrow function resides in


// Activity!
// Create a player object
// Add properties of score, name, and lives.
// Make the score a value of ten.
// use prompt to get the users name in the name property.
// set the lives property equal to 3.
// Add a method that increases the persons score.
// Add a method that will either decrease or increase the lives depending on an 
// argument you pass that method.
// Access all the properties using dot notation, and bracket notation.

let player = {
    score: 10,
    name: "",
    lives: 3,
    getName: function() {
        this.name = prompt("What is your name?")
    },
    increaseScore: function() {
        this.score++
    },
    increaseLives: function(addLife) {
        console.log(addLife)
        this.lives += addLife
    }
}
// player.getName()
player.increaseScore()
player.increaseLives(-2)
console.log(player)

// Starting and Stopping intervals
// setInterval to start
// clearInterval to stop
const intervalTestObj = {
    gameTimer: null,
    start: function() {
        this.gameTimer = setInterval(() => {
            console.log('hello', this)
        }, 1000)
    },
    stop: function() {
        clearInterval(this.gameTimer)
    }
}

intervalTestObj.start()
intervalTestObj.stop()

// We used the for...of loop for arrays

// The for...in loop can be used for objects
const movie = { 
    title: "L'Avventura", 
    director: "Michelangelo Antonioni", 
    year: 1960 
}

for(let key in movie) {
    console.log(movie[key])
}