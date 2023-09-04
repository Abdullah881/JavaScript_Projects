// WHILE LOOP
// function Call_loop(){
//     var digit = '';
//     var x = 1;
//     while (x < 11) {
//         digit += "<br>" + x;
//         x++

//     }
//     document.getElementById("loop").innerHTML = digit;


// }

// //FOR LOOP
function Call_loop(){
    var digit = '';
    var x = 1;
    for (i = 0 ; i < 12 ; i++ ) {
        digit += "<br>" + x;
        x++

    }
    document.getElementById("loop").innerHTML = digit;


}

function Basic_Array(){
    Array_1 = [];
    Array_1[0] = "Luke";
    Array_1[1] = "Sky Walker";
    Array_1[2] = "General";
    Array_1[3] = "Ken-obi";
    document.getElementById("Array").innerHTML = "Hello There , " + Array_1[2] + " "+Array_1[3]
    
}