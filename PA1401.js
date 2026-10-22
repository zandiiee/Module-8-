let firstname = "Zandile" // ES6 feature let
console.log(firstname)

const age = 23; // ES6 feature const 
console.log(age)

function getName () {
   
}

const getSurname=()=> {

}

const getSurnames=(()=>{  // arrow functions 

})

let Name = 'Zandie'
let surname = 'Zulu'

let vollenaam = `${Name} ${surname}`  //template literals 

const person = {
    personAge :23,
    naam  :"Zandie",
    Surname : "Zulu"
}

const [ personAge, naam, Surname]= person  // desconstruting

// Spread operators

const topics = ["html", "css, 'js"]
const languages = [...topics, "java", "pyhton"]


//Classes 
class Speaker{
    constructor(fullname){
        this.fullname = fullname;
    }
}
let speaker1 = new Speaker("Zandie");
console.log(speaker1.fullname);

//Modules 

export const studentName = "Thabo";
export const studentAge = 20;

import { studentName, studentAge } from "./student.js";

console.log(studentName);
console.log(studentAge);

// PROMISES

const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));

