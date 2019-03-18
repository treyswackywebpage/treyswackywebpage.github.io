function revealPassword () {
    document.getElementById("password-box").hidden = false;
}
function sendEmail() {
    var templateParams = {
        name: document.getElementById("email").value,
        notes: document.getElementById("content").value
    }
    var password = document.getElementById("password").value;
    var realPassword = "Dank Dr.Wilson";
    if (password == realPassword) {
        document.getElementById("email-sent").hidden = false;
        document.getElementById("password-needed").hidden = true;
        emailjs.send("gmail", "template_IN8JsPm4", templateParams, userID);
    }
    else
    {
        document.getElementById("password-needed").hidden = false;
    }
}