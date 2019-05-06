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
    var text = document.getElementById("slideshow" + albumNumber).getElementsByClassName("albumText")[0];
    switch (albumNumber) {
        case "One":
            switch (n) {
                case 1:
                    text.innerHTML = "tiko but epic";
                    break;
                case 2:
                    text.innerHTML = "high five";
                    break;
                case 3:
                    text.innerHTML = "laptop";
                    break;
                case 4:
                    text.innerHTML = "gay pride";
                    break;
                case 5:
                    text.innerHTML = "gay pride 2";
                    break;
                case 6:
                    text.innerHTML = "bloque";
                    break;
                case 7:
                    text.innerHTML = "bloque royal";
                    break;
                case 8:
                    text.innerHTML = "hot";
                    break;
                case 9:
                    text.innerHTML = "dot";
                    break;
                case 10:
                    text.innerHTML = "pubg";
                    break;
                default:
            }
            break;
        case "Two":
            switch (n) {
                case 1:
                    text.innerHTML = "fly";
                    break;
                case 2:
                    text.innerHTML = "doggo";
                    break;
                case 3:
                    text.innerHTML = "forknife";
                    break;
                case 4:
                    text.innerHTML = "dab";
                    break;
                case 5:
                    text.innerHTML = "motorcycle";
                    break;
                case 6:
                    text.innerHTML = "dance";
                    break;
                case 7:
                    text.innerHTML = "flex";
                    break;
                case 8:
                    text.innerHTML = "fenze";
                    break;
                case 9:
                    text.innerHTML = "santa";
                    break;
                case 10:
                    text.innerHTML = "delet";
                    break;
                default:
            }
            break;
        case "Three":
            switch (n) {
                case 1:
                    text.innerHTML = "dis";
                    break;
                case 2:
                    text.innerHTML = "dinosaur";
                    break;
                case 3:
                    text.innerHTML = "pika pika";
                    break;
                case 4:
                    text.innerHTML = "ew";
                    break;
                case 5:
                    text.innerHTML = "pokemans";
                    break;
                case 6:
                    text.innerHTML = "fazt";
                    break;
                case 7:
                    text.innerHTML = "sugr";
                    break;
                case 8:
                    text.innerHTML = "colours";
                    break;
                case 9:
                    text.innerHTML = "excap";
                    break;
                case 10:
                    text.innerHTML = "free";
                    break;
                default:
            }
            break;
        case "Four":
            switch (n) {
                case 1:
                    text.innerHTML = "yee haw";
                    break;
                case 2:
                    text.innerHTML = "dont mine at night";
                    break;
                case 3:
                    text.innerHTML = "mario (but in sarah's voice)";
                    break;
                case 4:
                    text.innerHTML = "god";
                    break;
                case 5:
                    text.innerHTML = "chaos";
                    break;
                case 6:
                    text.innerHTML = "kentucky";
                    break;
                case 7:
                    text.innerHTML = "happiness";
                    break;
                case 8:
                    text.innerHTML = "spoopy";
                    break;
                case 9:
                    text.innerHTML = "the bible";
                    break;
                case 10:
                    text.innerHTML = "assault";
                    break;
                default:
            }
            break;
        default:
    }
}
