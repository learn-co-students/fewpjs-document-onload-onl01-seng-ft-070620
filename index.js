// addEventListener takes a string with the name of the event...
// and a callback function
document.addEventListener( "DOMContentLoaded", function() {
  replaceText();
} );

// callback function changes text of the p element with id="text"
function replaceText() {
  document.querySelector("p#text").innerHTML = "This is really cool!";
}
