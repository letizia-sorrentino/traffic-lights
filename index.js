// FORK THIS PEN

// 1. Wire up the buttons to the lights

// You'll have to select and store the lights as a variable (although it may help you later to have a reference to all of them at once via the 'light' class)

// You'll have to select and store the buttons as separate variables

// then, add an event listener to each of the buttons

// in the 'handler' (the function you give to the listener) you add a class of 'on' to the relevant light

// Also make the lights go on and off on hover (of the light!!)

const { log } = console;

document.addEventListener("DOMContentLoaded", () => {

    const stopButton = document.getElementById("stop");
    const stopLight = document.querySelector(".light.stop");

    const cautionButton = document.getElementById("caution");
    const cautionLight = document.querySelector(".light.caution");

    const goButton = document.getElementById("go");
    const goLight = document.querySelector(".light.go");

    const timerButton = document.getElementById("timer");
    const resetButton = document.getElementById("reset");

    // 2. (Extra credit): Have a go at making it so that only one light can be on at one time
    const turnOffButton = () => {
        stopLight.classList.remove("on");
        cautionLight.classList.remove("on");
        goLight.classList.remove("on");
    };

    // 3. (wild&crazy credit) See if you can set up a timer of some sort to do that automatically (You'll have to add new start and stop buttons to the page)

    const startTrafficSignal = () => {

        setTimeout(function () {
            stopLight.classList.add("on");
        }, 1000);

        setTimeout(function () {
            cautionLight.classList.add("on");
        }, 3000);

        setTimeout(function () {
            goLight.classList.add("on");
        }, 5000);

        setTimeout(function() {
            stopLight.classList.remove("on");
            cautionLight.classList.remove("on");
            goLight.classList.remove("on");
        }, 6000);
    }

    const timer = setInterval(function () {
        startTrafficSignal();
    }, 6000);

    clearInterval(timer);


    //User interactions
    stopButton.addEventListener("click", (e) => {
        log("evt ibj", e);
        turnOffButton();
        stopLight.classList.add("on");
    });

    stopLight.addEventListener("mouseover", (e) => {
        log("evt hoverOn", e);
        stopLight.classList.add("on");
    });

    stopLight.addEventListener("mouseout", (e) => {
        log("evt hoverOff", e);
        stopLight.classList.remove("on");
    });

    cautionButton.addEventListener("click", (e) => {
        log("evt ibj", e);
        turnOffButton();
        cautionLight.classList.add("on");
    });

    cautionLight.addEventListener("mouseover", (e) => {
        log("evt hoverOn", e);
        cautionLight.classList.add("on");
    });

    cautionLight.addEventListener("mouseout", (e) => {
        log("evt hoverOff", e);
        cautionLight.classList.remove("on");
    });

    goButton.addEventListener("click", (e) => {
        log("evt ibj", e);
        turnOffButton();
        goLight.classList.add("on");
    });

    goLight.addEventListener("mouseover", (e) => {
        log("evt hoverOn", e);
        goLight.classList.add("on");
    });

    goLight.addEventListener("mouseout", (e) => {
        log("evt hoverOff", e);
        goLight.classList.remove("on");
    });

    timerButton.addEventListener("click", (e) => {
        log("evt ibj", e);
        startTrafficSignal();
    })

    resetButton.addEventListener("click", (e) => {
        log("evt ibj", e);
        turnOffButton();
    })

});
