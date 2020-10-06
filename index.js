// Your code goes here

document.addEventListener("DOMContentLoaded", function () {
  console.log("The DOM has Loaded");
  changeText()
});

function changeText() {
  let text = document.getElementById("text")
  text.innerHTML = "This is really cool!"
}