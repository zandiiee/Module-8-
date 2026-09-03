// PA0201
conference_name = "Codetribe Conference 2026"

document.getElementById("conference_name").innerHTML = conference_name

conference_date = " Date : 28th of August 2026"

document.getElementById("conference_date").innerHTML = conference_date

available_seats = "Number of available seats : 250"

document.getElementById("available_seats").innerHTML = available_seats 

welcome_message = "Welcome to the Codetribe Conference 2026!"

document.getElementById("welcome_message").innerHTML = welcome_message

// PA0303

function validateForm(){
    const fullname = document.getElementById("fullname").value 
    let age = document.getElementById("age").value
    let email = document.getElementById("email").value
    let interest = document.querySelectorAll('input[name="interest"]:checked');

    if(fullname.length >=3){
        
    } else{
        alert("Please enter a minimum of 3 characters")
    }

    if(age <=18 ){
        alert("You must be 18 years of age")

    }else if( age >=35){
        alert("You are over the required age ")
    } 


    if (email == "") {
    alert("Please ensure you don't leave the email field empty");
    } 

    if (interests.length === 0) {
        alert("Please select at least one conference interest.");
    }

}


// PA0401 - Retrieve data from an API  

const apiUrl = "https://randomuser.me/api/?results=6"  // example of API address

fetch(apiUrl). // a function that goes to given address and takes information
then(function(response){   // then means wait until data can be executed= pauses data retrieval in case there is a delay
    return response.json()
}). then (function(data){
    console.log(data)
})


//PA0402 

speaker = {
    name: "Zandile",
    email:"zandilez13@gmail.com",
    age: 23,
    province: "Gauteng",
    attendanceType: "Physical",
    topic: "Web Development"
}

console.log(speaker)

const convertObjectIntoJson = JSON.stringify(speaker)
console.log(convertObjectIntoJson)

speakerJson = {
    "name": "Zandile",
    "email":"zandilez13@gmail.com",
    "age": 23,
    "province": "Gauteng",
    "attendanceType": "Physical",
    "topic": "Web Development"
}

// PA0403 --- Refactor Code Using the jQuery AJAX Method

$.ajax({
    url:"https://randomuser.me/api/?results=6",
    method:"GET",
    success: function(data){
        console.log(data)
    },
    error: function(error){
        console.log(error)
    }
})

// PA0404
// asynchronous function
 async function getSpeakers(){
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}

// PA0405 --- Use XMLHttpRequest

const xhr = new XMLHttpRequest()
xhr.open(
    "GET", 
    apiUrl, // GET = retrieve info where the request must be sent 
    true // true makes the text asynchronous
);
// handle the response
// onload runs when the server has responded
xhr.onload = function(){
// check whether the HTTP REQUEST was successful

if (xhr.status === 200){
    console.log(
        "Raw JSON",
        xhr.responseText
    )
}
}
//PA0406 
const Url = "https://randomuser.me/api/?results=6"  // example of API address

fetch(apiUrl). // a function that goes to given address and takes information
then(function(response){   // then means wait until data can be executed= pauses data retrieval in case there is a delay
    return response.json()
}). then (function(data){
    console.log(data)
})

// PA0901 

// Hamburger menu

let menuButton = document.getElementById("menu-toggle");
let navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function() {
    navLinks.classList.toggle("show");
});


// Hamburger Menu


if (menuButton && navLinks) {

    menuButton.onclick = function() {

        if (navLinks.style.display === "flex") {
            navLinks.style.display = "none";
        } else {
            navLinks.style.display = "flex";
        }

    };

}

