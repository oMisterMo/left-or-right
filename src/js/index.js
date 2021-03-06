const leftText = "LEFT";
const rightText = "RIGHT";
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const title = document.getElementById("title");

leftBtn.textContent = leftText;
rightBtn.textContent = rightText;
title.innerText = leftText + " or " + rightText + "?";
console.log("right btn", rightBtn);

function clickImg(){
    const element = document.getElementById("main-img");

    //reset transition by removing class and re-adding
    element.addEventListener("click", function(e){
        e.preventDefault();

        element.classList.remove("btn-img-anim");
        void element.offsetWidth;

        element.classList.add("btn-img-anim");
    });
}

function clickLeft(){
    console.log("LEFT");

}

function clickRight(){
    console.log("Right");
}