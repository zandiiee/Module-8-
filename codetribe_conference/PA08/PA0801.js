// PA0801 and PA0804
function saveDataLocally(){
const userName = document.getElementById("userName").value 


    localStorage.setItem('userName', userName)
}



function getDataLocally(){
    const getUserName = localStorage.getItem('userName')
    console.log(getUserName)
}

getDataLocally()

function removeDataLocally(){
    const removeUser = localStorage.removeItem('userName')
    console.log(removeUser)
}

removeDataLocally()

// PA0805

const registration = {
    name : "Zandie",
    email : "zandie@gmail.com"
}


const convertJavascriptToJson = JSON.stringify(registration)
localStorage.setItem('registration', convertJavascriptToJson)

const saveData = localStorage.getItem('registration');

//covert json string to object

const convertToParse = JSON.parse(saveData)

console.log(convertToParse)
