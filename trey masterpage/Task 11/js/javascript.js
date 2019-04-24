function mobileBar() {
  var bar = document.getElementById("navbar-right");
  if (bar.style.display === "block") {
    bar.style.display = "none";
  } else {
    bar.style.display = "block";
  }
}

var slideIndex = 1;
var albumNumber = "One";

function setAlbum(n){
    $(".active").toggleClass("active");
    $(".slideshow").hide();
    slideIndex = 1;
    showSlides(slideIndex);
    switch (n) {
        case 1:
            $(".albumOne").toggleClass("active");
            $("#slideshowOne").show();
            albumNumber = "One";
            break;
        case 2:
            $(".albumTwo").toggleClass("active");
            $("#slideshowTwo").show();
            albumNumber = "Two";
            break;
        case 3:
            $(".albumThree").toggleClass("active");
            $("#slideshowThree").show();
            albumNumber = "Three";
            break;
        case 4:
            $(".albumFour").toggleClass("active");
            $("#slideshowFour").show();
            albumNumber = "Four";
            break;
        default:

    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementById("slideshow" + albumNumber).getElementsByClassName("mySlides");
    var dots = document.getElementById("slideshow" + albumNumber).getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setText(slideIndex);
}

function setText(n) {
    var text = document.getElementById("slideshow" + albumNumber).getElementsByClassName("albumText");
    
    text.value = document.getElementById("slideshow" + albumNumber).getElementsByClassName(slideIndex)[0].src;

}
