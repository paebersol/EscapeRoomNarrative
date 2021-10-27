var btn=document.getElementById("btn");

btn.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "https://paebersol.github.io/EscapeRoomNarrative/life-jacket-g564cb2f9f_1280.png"
 captionText.innerHTML = this.alt;
}