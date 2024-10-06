window.onload = function() {
    const recordButton = document.getElementById("recordButton");
    let counter = 0;

    function colorChanger() {
        if (counter % 2 === 0) {
            changeColor(); // lightred
        } else {
            revertColor(); // lightblue
        }
        counter++;
    }

    function changeColor() {
        recordButton.style.backgroundColor = "#FF8899"; // lightred
    }

    function revertColor() {
        recordButton.style.backgroundColor = "lightblue"; //lightblue
    }
    recordButton.addEventListener("click", colorChanger);
}