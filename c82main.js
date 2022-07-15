var mouseEvent="empty";
var last_postion_of_x, last_poation_of_y;
canvas=document.getElementById("myCanvas");
color="red";
width_of_line=1;
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_postion_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_postion_of_mouse_y=e.clientY-canvas.offsetTop;
    
    if (mouseEvent=="mousedown") {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
        
        console.log("Last postion of x and y coordinates = ");
        console.log("x = " + last_postion_of_x + "y = " + last_poation_of_y);
        ctx.moveTo(last_postion_of_x, last_poation_of_y);
        
    
        console.log("Current postion of x and y coordinates = ");
        console.log("x =" + current_postion_of_mouse_x + "y = " + current_postion_of_mouse_y);
        ctx.lineTo(current_postion_of_mouse_x, current_postion_of_mouse_y);
        ctx.stroke();
    }
    last_postion_of_x=current_postion_of_mouse_x;
    last_poation_of_y=current_postion_of_mouse_y;
}