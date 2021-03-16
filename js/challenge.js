const likeTracker = {};

function incrementTime(){
    const timer = document.querySelector("#counter");
    const stringTime = document.querySelector("#counter").innerText;
    let newTime = parseInt(stringTime);
    newtime += 1;
    timer.innerText = newTime;
}

function decrementTime(){
    const timer = document.querySelector("#counter");
    const stringTime = document.querySelector("#counter").innerText;
    let newTime = parseInt(stringTime);
    newtime -= 1;
    timer.innerText = newTime;
}

function automaticallyIncrement() {
    setInterval(function(){
        //wrapping in function so doesn't invoke in load
        incrementTime()
    }, 1000)
}

automaticallyIncrement()

function manuallyIncrement() {
    const plusButton = document.getElementById("+");
    plusButton.addEventListener('click', incrementTime);
}

function manuallyDecrement() {
const minusButton = document.getElementById("-");
    plusButton.addEventListener('click', decrementTime);
}

manuallyIncrement()
manuallyDecrement()

function heartButtonClick() {
    const heartButton = document.getElementById("<3");
    heartButton.addEventListener('click', likeNumber);
}

function likeNumber() {
    const timer = document.querySelector("#counter");
    const number = timer.innerText;
    if (likeTracker[number]) {
        likeTracker[number] += 1;
    } else {
        likeTracker[number] = 1;
    }
    // add string to put out the likeTracker number and likes in the likes container in ul class
    // add LI elements for that container
}