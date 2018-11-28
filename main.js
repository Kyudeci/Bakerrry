let codeA = document.getElementById("secret");
let submit = document.getElementById("submit");
let imgUnlock = document.getElementById("unlock");
let titleUnlock = document.getElementById("unlock-title");
let textUnlock = document.getElementById("unlock-text");

function search() {
if (codeA.value == "cheesecake") {
  alert("You've unlocked something!");
  imgUnlock.src = "Padlock-open.png";
  titleUnlock.innerHTML = "It Appears to Have Opened!";
  textUnlock.innerHTML = "You figured out the secret code! Don't share it or do share it if you want to! Click on the image to reveal the new option...";
  // *Note: I don't have cookies on this site so this will lock on refresh!
  }
}
function unknown() {
  if (imgUnlock.src == "Padlock-open.png") {
    imgUnlock.src = "swirl.png";
    titleUnlock.innerHTML = "";
    textUnlock.innerHTML = "";
  }
}
submit.addEventListener("click", search)
