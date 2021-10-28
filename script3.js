function colorChanger(color) {
  switch(color) {
		case "red":
document.getElementById("color_box").style.backgroundImage = "linear-gradient(rgba(255,0,0,0.8), rgba(255,0,0,0.8)), url(https://paebersol.github.io/EscapeRoomNarrative/words.png)"; 
			break;
      case "cyan":
document.getElementById("color_box").style.backgroundImage = "linear-gradient(rgba(0,255,255,0.8), rgba(0,255,255,0.8)), url(https://paebersol.github.io/EscapeRoomNarrative/words.png)"; 
			break;
      case "yellow":
document.getElementById("color_box").style.backgroundImage = "linear-gradient(rgba(255,255,0,0.8), rgba(255,255,0,0.8)), url(https://paebersol.github.io/EscapeRoomNarrative/words.png)"; 
			break;
}
}
function problem() {
  alert("Try again.");
}