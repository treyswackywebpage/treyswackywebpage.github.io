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
        document.getElementById("active").style.fontSize = "19px";
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
    var d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "theme=dark; " + expires + "; path=/;";
    document.getElementById("html").style.transition = "0.5s";
    document.getElementById("html").style.background = "black";
    document.getElementById("html").style.color = "white";
    document.getElementById("darkModeButton").style.display = "none";
    document.getElementById("lightModeButton").style.display = "block";
    document.getElementById("darkImage").hidden = false;
    document.getElementById("lightImage").hidden = true;
}
function setLightMode() {
    var d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "theme=light; " + expires + "; path=/;";
    document.getElementById("html").style.transition = "0.5s";
    document.getElementById("html").style.background = "white";
    document.getElementById("html").style.color = "black";
    document.getElementById("darkModeButton").style.display = "block";
    document.getElementById("lightModeButton").style.display = "none";
    document.getElementById("darkImage").hidden = true;
    document.getElementById("lightImage").hidden = false;
}
function checkTheme(){
    var name = "theme=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
}

function sendEmail() {
    if (document.getElementById("password").value !== "Egg1"){
        alert("Please type the correct password.");
        return false;
    }
    if (!grecaptcha.getResponse(captcha1)) {
        alert("Please finish the first captcha!");
        return false;
    }
    if (!grecaptcha.getResponse(captcha2)) {
        alert("Please finish the second captcha!");
        return false;
    }
    if (!grecaptcha.getResponse(captcha3)) {
        alert("Please finish the third captcha!");
        return false;
    }
    if (!grecaptcha.getResponse(captcha4)) {
        alert("Please finish the fourth captcha!");
        return false;
    }
    if (!grecaptcha.getResponse(captcha5)) {
        alert("Please finish the fifth captcha!");
        return false;
    }
    $("#submit").hide();
    var form = $("form#contactForm");
    form.submit(function(event){
        emailjs.sendForm("gmail", "template_WaVz2flD", form[0]).then(function(){
            alert("Successfully sent email!");
            location.reload();
        }, function(err) {
            alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
            $("#submit").show();
        });

        return false;
    });

}
