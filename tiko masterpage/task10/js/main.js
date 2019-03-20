function revealPassword () {
    document.getElementById("password-box").hidden = false;
}
function sendEmail() {
    var password = document.getElementById("password").value;
    var realPassword = "Dank Dr.Wilson";
    if (password == realPassword) {
        document.getElementById("email-sent").hidden = false;
        document.getElementById("password-needed").hidden = true;
        
        var emailBody = $("form#emailBody");
        emailBody.submit(function(event){
            event.preventDefault();

        // Change to your service ID, or keep using the default service
        var service_id = "default_service";
        var template_id = "template_IN8JsPm4";
        emailjs.sendForm(service_id,template_id,emailBody[0])
            .then(function(){ 
                alert("Sent!");
            }, function(err) {
            alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
            });
        return false;
        });
    }
    else
    {
        document.getElementById("password-needed").hidden = false;
    }
}
function changeHeaderSize() {
    $("#navbar").toggleClass("big-header");
    
}