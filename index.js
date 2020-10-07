document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    changeCool();
    console.log("The program fired after the DOM loaded");
    }
)

function changeCool() {
    let updateItem = document.getElementById("text");
    updateItem.innerHTML = `This is really cool!`
}

