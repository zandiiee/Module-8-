// Literal object 

speaker ={
    name : "Zandie",
    age : 23,
    gender : "Female"
}
document.getElementById("name").innerHTML = speaker.name
document.getElementById("gender").innerHTML = speaker.gender

class Person{
    constructor(name, age, gender,secondGender){
        this.name = name ,
        this.age = age,
        this.gender = gender,
        this.secondGender = secondGender
    }

    walk (){
        console.log("Walking")
    }
}

const person1 = new Person("Zandie", 23, "Female", "Male")

document.getElementById("age").innerHTML = person1.age
document.getElementById("secondGender").innerHTML = person1.secondGender