//GLOBAL SPACE VARIABLES (lovely isn't it?)
const EMPTY_CHOICE = -1;
const LEFT_CHOICE = 0;
const RIGHT_CHOICE = 1;
const VALID_CHOICES = [EMPTY_CHOICE, LEFT_CHOICE, RIGHT_CHOICE];
let picked = EMPTY_CHOICE;

// console.log("underscore", _);


const leftText = "LEFT";
const rightText = "RIGHT";
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const title = document.getElementById("title");

const BUTTONS = [leftBtn, rightBtn];

leftBtn.textContent = leftText;
rightBtn.textContent = rightText;
title.innerText = leftText + " or " + rightText + "?";
console.log("right btn", rightBtn);

// setUpAnimationEnd();
// setUpAnimationEnd2();



function clickImg(){
    //Wait until a user picked a choice.
    if(picked === EMPTY_CHOICE)  return;

    const element = document.getElementById("main-img-container");

    //reset transition by removing class and re-adding
    element.addEventListener("click", function(e){
        e.preventDefault();

        element.classList.remove("btn-img-anim");
        void element.offsetWidth;

        element.classList.add("btn-img-anim");
    });

    //Reveal Image just before 3s animation ends (hard coded)
    console.log("going to reveal image in 2.7 seconds...");
    setTimeout(setImage,2700);
}

function clickLeft(element){
    console.log("LEFT");
    //First remove btn-focus class from all buttons
    _(BUTTONS).forEach(function(button){
        console.log(button);
        button.classList.remove("btn-focus");
    });

    //Set focus to clicked button
    element.classList.add("btn-focus");
    setPicked(LEFT_CHOICE);
}

function clickRight(element){
    console.log("Right");
    _(BUTTONS).forEach(function(button){
        console.log(button);
        button.classList.remove("btn-focus");
    });

    element.classList.add("btn-focus");
    setPicked(RIGHT_CHOICE);
}

function setUpAnimationEnd(){
    const element = document.getElementById("main-img-container");
    element.addEventListener("animationend", function(e){
        console.log("DONE!");
        e.preventDefault();

        //Swap image
        const img = document.getElementById("img");
        img.src = "./assets/right.png"; //risky


        element.classList.remove("btn-img-anim");
        void element.offsetWidth;

        // element.
        element.classList.add("btn-img-anim-revel");

    });
}

function setUpAnimationEnd2(){
    const element = document.getElementById("main-img-container");
    element.addEventListener("animationend", function (e){
        e.preventDefault();

        console.log(e.elapsedTime);
        const img = document.getElementById("img");
        img.src = "./assets/right.png"; //risky
    });
}

function setImage(){
    console.log("...reveal image");
    //todo set the style of the image (transform and scale back to original)
    const img = document.getElementById("main-img");
    img.src = "./assets/right.png"; //not safe
}

function setPicked(val){
    if(!_.isNumber(val)){
        console.error("please enter a number");
    }else if(!_.contains(VALID_CHOICES, val)){
        console.error("incorrect value specified");
    }else{
        console.log("Picked: ", val);
        picked = val;
    }
}