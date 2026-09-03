// PA0202
function clickMe(){
    console.log("Clicked")
    alert('Welcome to the page ')
}
function DisplayText(){
    let txt = document.getElementById("myInput").value 

    document.getElementById("txt").innerHTML = txt
}

function change(){
    document.getElementById("message").innerHTML =
        "Bye bye and have a good day!!";
}