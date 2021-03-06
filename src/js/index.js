const leftText = "LEFT";
const rightText = "RIGHT";
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const title = document.getElementById("title");

leftBtn.textContent = leftText;
rightBtn.textContent = rightText;
title.innerText = leftText + " or " + rightText + "?";
console.log("right btn", rightBtn);
