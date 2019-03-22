/*
Trey DeaBueno
Task 10
March 6, 2019
*/

/// Nav Bar ///
$(window).resize(function() {
    var targetWidth = 580;
    if ($(window).width() >= targetWidth) {
        document.getElementById("navbar-right").style.display = "block";
        scrollFunction();
    } else {
        document.getElementById("active").style.height = "37px";
        document.getElementById("navbar-right").style.display = "none";
    }
});

window.onscroll = function() {
    var targetWidth = 580;
    if ($(window).width() >= targetWidth) {
        scrollFunction();
    }
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("active").style.fontSize = "17px";
        document.getElementById("active").style.height = "55px";
        document.getElementById("navbar").style.padding = "10px 10px";
        document.getElementById("logo").style.fontSize = "25px";
        document.getElementById("logoimg").style.width = "25px";
        document.getElementById("logoimg").style.height = "25px";
    } else {
        document.getElementById("active").style.fontSize = "20px";
        document.getElementById("active").style.height = "59px";
        document.getElementById("navbar").style.padding = "15px 10px";
        document.getElementById("logo").style.fontSize = "35px";
        document.getElementById("logoimg").style.width = "35px";
        document.getElementById("logoimg").style.height = "35px";
    }
}

function mobileBar() {
  var bar = document.getElementById("navbar-right");
  if (bar.style.display === "block") {
    bar.style.display = "none";
  } else {
    bar.style.display = "block";
  }
}


// Dark Theme //

function setDarkMode() {
    document.cookie = "theme=dark; expires=Wed, 18 Dec 2023 12:00:00 UTC";
    document.getElementById("html").style.background = "black";
    document.getElementById("html").style.color = "white";
    document.getElementById("darkModeButton").style.display = "none";
    document.getElementById("lightModeButton").style.display = "block";
}
function setLightMode() {
    document.cookie = "theme=light; expires=Wed, 18 Dec 2023 12:00:00 UTC";
    document.getElementById("html").style.background = "white";
    document.getElementById("html").style.color = "black";
    document.getElementById("darkModeButton").style.display = "block";
    document.getElementById("lightModeButton").style.display = "none";
}
