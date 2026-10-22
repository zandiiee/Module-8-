
/* =========================================
   CODETRIBE CONFERENCE 2026
   ES6 JAVASCRIPT MODULE
   ========================================= */


/* PA0201 - Display Conference Information */

const conference_name = "Codetribe Conference 2026";
const conference_date = "Date: 28th of August 2026";
const available_seats = "Number of available seats: 250";
const welcome_message = "Welcome to the Codetribe Conference 2026!";

function displayConferenceInfo() {
    const nameElement = document.getElementById("conference_name");
    const dateElement = document.getElementById("conference_date");
    const seatsElement = document.getElementById("available_seats");
    const welcomeElement = document.getElementById("welcome_message");

    if (nameElement) nameElement.textContent = conference_name;
    if (dateElement) dateElement.textContent = conference_date;
    if (seatsElement) seatsElement.textContent = available_seats;
    if (welcomeElement) welcomeElement.textContent = welcome_message;
}


/* PA0303 - Validate Registration Form */

function validateForm() {
    const fullname = document.getElementById("fullname").value.trim();
    const age = Number(document.getElementById("age").value);
    const email = document.getElementById("email").value.trim();
    const interests = document.querySelectorAll(
        'input[name="interest"]:checked'
    );

    if (fullname.length < 3) {
        alert("Please enter a minimum of 3 characters.");
        return false;
    }

    if (!age || age < 18 || age >= 35) {
        alert("You must be at least 18 and under 35 years old.");
        return false;
    }

    if (email === "") {
        alert("Please ensure you don't leave the email field empty.");
        return false;
    }

    if (interests.length === 0) {
        alert("Please select at least one conference interest.");
        return false;
    }

    return true;
}


/* PA0401 - Retrieve Data from an API */

const apiUrl = "https://randomuser.me/api/?results=6";

function getRandomUsers() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to retrieve data.");
            }
            return response.json();
        })
        .then(data => {
            console.log("API data:", data);
        })
        .catch(error => {
            console.error("API error:", error);
        });
}


/* PA0402 - JavaScript Object and JSON */

const speaker = {
    name: "Zandile",
    email: "zandilez13@gmail.com",
    age: 23,
    province: "Gauteng",
    attendanceType: "Physical",
    topic: "Web Development"
};

function displaySpeaker() {
    console.log("Speaker object:", speaker);

    const speakerJSON = JSON.stringify(speaker);
    console.log("Speaker JSON:", speakerJSON);

    const speakerObject = JSON.parse(speakerJSON);
    console.log("Converted object:", speakerObject);
}


/* PA0403 - Retrieve Data Using jQuery AJAX */

function getUsersWithAjax() {
    if (typeof $ === "undefined") {
        console.error("jQuery is not loaded.");
        return;
    }

    $.ajax({
        url: apiUrl,
        method: "GET",

        success: function(data) {
            console.log("AJAX data:", data);
        },

        error: function(error) {
            console.error("AJAX error:", error);
        }
    });
}


/* PA0404 - Asynchronous Function Using Async/Await */

async function getSpeakers() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Failed to retrieve speaker data.");
        }

        const data = await response.json();
        console.log("Async/Await data:", data);

    } catch (error) {
        console.error("Error:", error);
    }
}


/* PA0405 - Retrieve Data Using XMLHttpRequest */

function getUsersWithXHR() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", apiUrl, true);

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log("Raw JSON:", xhr.responseText);
        } else {
            console.error("Request failed:", xhr.status);
        }
    };

    xhr.onerror = function() {
        console.error("Network error occurred.");
    };

    xhr.send();
}


/* PA0406 - Retrieve Data Using Fetch */

function retrieveAPIData() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log("Retrieved data:", data);
        })
        .catch(error => {
            console.error("Error retrieving data:", error);
        });
}


/* PA0901 - Hamburger Menu */

function setupHamburgerMenu() {
    const menuButton = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function() {
            navLinks.classList.toggle("show");
        });
    }
}


/* INITIALISE THE MODULE */

function initialiseConference() {
    displayConferenceInfo();
    displaySpeaker();
    setupHamburgerMenu();

    const registrationForm = document.getElementById("registration-form");

    if (registrationForm) {
        registrationForm.addEventListener("submit", function(event) {
            if (!validateForm()) {
                event.preventDefault();
            }
        });
    }
}


/* EXPORT FUNCTIONS FOR REUSE */

export {
    displayConferenceInfo,
    validateForm,
    getRandomUsers,
    speaker,
    displaySpeaker,
    getUsersWithAjax,
    getSpeakers,
    getUsersWithXHR,
    retrieveAPIData,
    setupHamburgerMenu,
    initialiseConference
};


/* START THE MODULE */

initialiseConference();
