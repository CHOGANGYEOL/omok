require('./canvas.css');

const canvas = document.getElementById("canvas");
const ctx2 = canvas.getContext("2d");
const black = document.getElementById("black");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
const deleteBtn = document.getElementById("delete");
let removeState = false;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx2.strokeStyle = "black";
ctx2.lineWidth = 2.5;
black.onclick = function (e) {
    ctx2.strokeStyle = "black";
    ctx2.lineWidth = 2.5;
}
red.onclick = function (e) {
    ctx2.strokeStyle = "red";
    ctx2.lineWidth = 2.5;
}
green.onclick = function (e) {
    ctx2.strokeStyle = "green";
    ctx2.lineWidth = 2.5;
}
blue.onclick = function (e) {
    ctx2.strokeStyle = "blue";
    ctx2.lineWidth = 2.5;
}
yellow.onclick = function (e) {
    ctx2.strokeStyle = "yellow";
    ctx2.lineWidth = 2.5;
}
deleteBtn.onclick = function (e) {
    // if(!removeState) {
    //     removeState = true;
    //     // console.log(removeState)
    //   } else {
    //     removeState = false;
    //     // console.log(removeState)

    //   }
    ctx2.strokeStyle = "white";
    ctx2.lineWidth = 10;
}

let painting = false;

function startPainting() {
    painting = true;
}
function stopPainting(event) {
    painting = false;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx2.beginPath();
        ctx2.moveTo(x, y);
    }
    else {
        ctx2.lineTo(x, y);
        ctx2.stroke();
    }
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}