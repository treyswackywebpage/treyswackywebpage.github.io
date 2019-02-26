function replaceText() {
    var noun1 = document.getElementById("noun1").value;
    document.getElementById("Bnoun9").innerHTML = noun1;

    var pluralnoun1 = document.getElementById("pluralnoun1").value;
    document.getElementById("Bpluralnoun1").innerHTML = pluralnoun1;

    var noun3 = document.getElementById("noun3").value;
    document.getElementById("Bnoun3").innerHTML = noun3;

    var verb1 = document.getElementById("verb1").value;
    document.getElementById("Bverb1").innerHTML = verb1;

    var adj1 = document.getElementById("adj1").value;
    document.getElementById("Badj1").innerHTML = adj1;

    var adj2 = document.getElementById("adj2").value;
    document.getElementById("Badj2").innerHTML = adj2;

    var adj3 = document.getElementById("adj3").value;
    document.getElementById("Badj3").innerHTML = adj3;

    var noun2 = document.getElementById("noun2").value;
    document.getElementById("Bnoun2").innerHTML = noun2;
    
    var verb2 = document.getElementById("verb2").value;
    document.getElementById("Bverb2").innerHTML = verb2;

    var infverb1 = document.getElementById("infverb1").value;
    document.getElementById("Binfverb1").innerHTML = infverb1;

    var verb3 = document.getElementById("verb3").value;
    document.getElementById("Bverb3").innerHTML = verb3;

    var adj4 = document.getElementById("adj4").value;
    document.getElementById("Badj4").innerHTML = adj4;
}
function changeColor() {
    var color1 = document.getElementById("color1")
    var color2 = document.getElementById("color2")
    var color3 = document.getElementById("color3")
    var color4 = document.getElementById("color4")
    var color5 = document.getElementById("color5")
    if (color1.checked)
    {
        document.getElementById("color").style.color = "#138599";
    }
    if (color2.checked)
    {
        document.getElementById("color").style.color = "#138599";
    }
    if (color3.checked)
    {
        document.getElementById("color").style.color = "white";
    }
    if (color4.checked)
    {
        document.getElementById("color").style.color = "blue";
    }
    if (color5.checked)
    {
        document.getElementById("color").style.color = "green";
    }
}
