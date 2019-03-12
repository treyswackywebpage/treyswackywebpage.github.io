function revealPassword () {
    document.getElementById("password-box").hidden = false;
}
function sendEmail() {
    var password = document.getElementById("password").value;
    var realPassword = "Dank Dr.Wilson";
    if (password == realPassword) {
        document.getElementById("email-sent").hidden = false;
        document.getElementById("password-needed").hidden = true;
    }
    else
    {
        document.getElementById("password-needed").hidden = false;
    }
}