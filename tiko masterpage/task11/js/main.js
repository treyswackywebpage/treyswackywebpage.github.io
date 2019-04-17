var album1Pics = document.getElementsByClassName("Album1");
var album2Pics = document.getElementsByClassName("Album2");
var album3Pics = document.getElementsByClassName("Album3");
var album4Pics = document.getElementsByClassName("Album4");
var arg = 1;

document.getElementsByClassName("Album1").hidden = true;
function chooseAlbum(arg) {
  switch (arg) {
    case 1:
      for (var i = 0; i < 8; i++) {album1Pics[i].hidden = false;}
      for (var i = 0; i < 8; i++) {album2Pics[i].hidden = true;}
      for (var i = 0; i < 8; i++) {album3Pics[i].hidden = true;}
      for (var i = 0; i < 8; i++) {album4Pics[i].hidden = true;}
      break;
    case 2:
      for (var i = 0; i < 8; i++) {album1Pics[i].hidden = true;}
      for (var i = 0; i < 8; i++) {album2Pics[i].hidden = false;}
      for (var i = 0; i < 8; i++) {album3Pics[i].hidden = true;}
      for (var i = 0; i < 8; i++) {album4Pics[i].hidden = true;}
      break;
    case 3:
      for (var i = 0; i < 8; i++) {album1Pics[i].hidden = true;}
      for (var i = 0; i < 8; i++) {album2Pics[i].hidden = true;}
      for (var i = 0; i < 8; i++) {album3Pics[i].hidden = false;}
      for (var i = 0; i < 8; i++) {album4Pics[i].hidden = true;}
      break;
    case 4:
      for (var i = 0; i < 8; i++) {album1Pics[i].hidden = true;}
      for (var i = 0; i < 8; i++) {album2Pics[i].hidden = true;}
      for (var i = 0; i < 8; i++) {album3Pics[i].hidden = true;}
      for (var i = 0; i < 8; i++) {album4Pics[i].hidden = false;}
      break;
    default:
      for (var i = 0; i < 8; i++) {album1Pics[i].hidden = true;}
      for (var i = 0; i < 8; i++) {album2Pics[i].hidden = true;}
      for (var i = 0; i < 8; i++) {album3Pics[i].hidden = true;}
      for (var i = 0; i < 8; i++) {album4Pics[i].hidden = true;}
      break;
  }

}
function openMenu() {
  var dropdown = document.getElementById("dropdown");
  var arrow = document.getElementById("arrow");
  var arrowClass = arrow.className;
  console.log(arrowClass);
  if (arrowClass == "down")
  {
    dropdown.style.top = "0px";
    arrow.innerHTML = "/\\";
  }
  else {
    dropdown.style.top = "-220px";
    arrow.innerHTML = "\\/"
  }
  $("#arrow").toggleClass("down");
  $("#arrow").toggleClass("up");
}

//Ethan's code from here down
document.onkeydown = function()	{
	switch (window.event.keyCode) {
		case 37:
  		plusSlides(-1)
  		break;
		case 39:
  		plusSlides(1)
  		break;
		case 40:
  		openMenu()
  		break;
		case 38:
  		openMenu()
  		break;
		case 49:
  		chooseAlbum(1)
  		break;
		case 50:
  		chooseAlbum(2)
  		break;
		case 51:
  		chooseAlbum(3)
  		break;
    case 52:
  		chooseAlbum(4)
  		break;
    }
}
