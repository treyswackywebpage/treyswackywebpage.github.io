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
  document.getElementById("dropdown").style.top = "0px";
  document.getElementById("dropdown").style.height = "auto";
}
