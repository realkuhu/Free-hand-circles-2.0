canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
colour="empty"
radius="empty"
line_width="empty"
var mouseEvent="Empty";

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    colour= document.getElementById("colour").value;
radius= document.getElementById("Radius").value;
line_width= document.getElementById("width_of_line").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    mouseEvent = "mouseMove"
}

var current_x=e.client - canvas.offsetLeft;
var current_y=e.client - canvas.offsetTop;

if (mouseEvent == "mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth=line_width;
    ctx.arc(current_x, current_y, radius,0,2*Math.PI);
    ctx.stroke();
}