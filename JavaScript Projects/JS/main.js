// Function which gets an input and compares it to a series of cases
function Color_Function () {
    var Color_Output;
    var Colors = document.getElementById ("Color Input") .value;
    var Color_String = " is a great color!";
    switch (Colors) 
    {
    case "Red":
        Color_Output = "Red" + Color_String;
    break;
    case "Yellow":
        Color_Output = "Yellow" + Color_String;
    break;
    case "Green":
        Color_Output = "Green" + Color_String;
    break;
    case "Blue":
        Color_Output = "Blue" + Color_String;
    break;
    case "Pink":
        Color_Output = "Pink" + Color_String;
    break;
    case "Purple":
        Color_Output = "Purple" + Color_String;
    break;
    default:
        Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById ("Output"). innerHTML = Color_Output;
}

// Function which gets inner HTML s of all elements of the certain class and adds them to a list object A
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[1].innerHTML = "The Text Has Changed!";
}


// Drawing on Canvas with getContext()

const canvas = document.getElementById("Canvas_Id");
const ctx = canvas.getContext("2d");

const grd = ctx.createLinearGradient(0, 0, 1000, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(1, 1, 999, 298);

ctx.beginPath();
ctx.lineWidth = 4;
ctx.arc(500, 150, 140, 0, 2 * Math.PI);
ctx.moveTo(380, 220);
ctx.lineTo(500, 10);
ctx.lineTo(620, 220);
ctx.moveTo(420, 150);
ctx.lineTo(580, 150);
ctx.strokeStyle = "red";
ctx.stroke();






