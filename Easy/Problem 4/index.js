const counterButton = document.getElementById("counterButton");
const clickCounter = document.getElementById("clickCounter");

let counterValue = 0;

counterButton.addEventListener('click', handleCount)
function handleCount (){
    counterValue++
    clickCounter.innerHTML = counterValue
};

