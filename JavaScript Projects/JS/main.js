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