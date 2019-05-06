/*
Trey DeaBueno
Task 9
March 5, 2019
*/

function changeText(){
    document.getElementById("changeNoun1").innerHTML = document.getElementById("noun1").value;
    document.getElementById("changeNoun2").innerHTML = document.getElementById("noun2").value;
    document.getElementById("changeNoun3").innerHTML = document.getElementById("noun3").value;
    document.getElementById("changeVerb1").innerHTML = document.getElementById("verb1").value;
    document.getElementById("changeVerb2").innerHTML = document.getElementById("verb2").value;
    document.getElementById("changeVerb3").innerHTML = document.getElementById("verb3").value;
    document.getElementById("changeAdj1").innerHTML = document.getElementById("adj1").value;
    document.getElementById("changeAdj2").innerHTML = document.getElementById("adj2").value;
    document.getElementById("changeAdj3").innerHTML = document.getElementById("adj3").value;
}

function changeColor(){
    if (document.getElementById("hide").checked){
        document.getElementById("paragraph").hidden = true;
    }
    if (document.getElementById("red").checked){
        document.getElementById("paragraph").style.color = "Red";
        document.getElementById("paragraph").hidden = false;
    }
    if (document.getElementById("blue").checked){
        document.getElementById("paragraph").style.color = "Blue";
        document.getElementById("paragraph").hidden = false;
    }
    if (document.getElementById("purple").checked){
        document.getElementById("paragraph").style.color = "Purple";
        document.getElementById("paragraph").hidden = false;
    }
    if (document.getElementById("yellow").checked){
        document.getElementById("paragraph").style.color = "Yellow";
        document.getElementById("paragraph").hidden = false;
    }
}
