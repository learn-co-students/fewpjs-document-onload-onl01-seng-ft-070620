document.addEventListener("DOMContentLoaded", function() {
  updateDom();
});

function updateDom() {
  let element = document.getElementById('text');
  element.innerHTML = "This is really cool!";
}