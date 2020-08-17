const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
];


for( const student of students ) {
    console.log( student.name + " lives in " + student.city );
}

let contacts = ["Mary", "Joel", "Danny"];

let personalFriends = [ "David", ...contacts, "Lily" ];

contacts.push("John");

console.log(personalFriends);

/* **************************************************************************************************************** */

let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}

let employee = {
    ...person,
    salary: 50000,
    position: "Software Developer"
}

console.log(employee);

/* **************************************************************************************************************** */

const shoppingList = ["eggs", "milk", "butter"];

let shoppingBasket = ["cheese", ...shoppingList , "maggi"];
console.log(shoppingBasket);

/* **************************************************************************************************************** */

// Arrow Function:

//function declaration
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}

const dinnerMenu = food => `I'm going to eat a ${food} for dinner`;

console.log( dinnerMenu("chicken salad") );

const nightmenu = (food,drink) =>{
    return(`I am going to eat ${food} and drink ${drink} in night.`);
}

console.log(nightmenu("kurkure","coldrink"));

/* **************************************************************************************************************** */

const item = (food="something") => console.log(`I'm going to buy ${food} from the grocery shop.`);

item("milk");

/* **************************************************************************************************************** */

const listIngredients =  [ "flour", "sugar", "eggs", "butter", "chocolate" ];

if( listIngredients.includes("chocolate")) {
    console.log("We are going to make a chocolate cake" );
} else {
    console.log("We can't make a chocolate cake because we are missing the ingredient chocolate" );
}

/* **************************************************************************************************************** */

// import {data} from './example.js';
// let updatedData = data;
// updatedData.push(5);
// console.log(updatedData);

function add(a,b){
    let sum = a + b;
    console.log(sum);
}

add(4,5);

/* **************************************************************************************************************** */

class Player {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }
    
    introduce() {
        console.log(`${this.name} was born in ${this.country}`);
    }
}

const messi = new Player("Messi", "Argentina");

messi.introduce();

class TennisPlayer extends Player {
    constructor(name, country, age) {
        super(name, country);
        this.age = age;
    }
    
    playTennis() {
        console.log(`${this.name} is ${this.age} years old and knows how to play Tennis`);
    }
}

const roger = new TennisPlayer( "Roger Federer", "Spain", 38);

roger.introduce();
roger.playTennis();

/* **************************************************************************************************************** */

// Promises

const buyFlightTicket = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = true;
            
            if( error ) {
                reject("Sorry your payment was not successful")
            } else {
                resolve("Thank you, your payment was successful");
            }
        }, 3000)
    })
}

buyFlightTicket()
.then( (success) => console.log(success))
.catch( (error) => console.log(error) );