
var total = 40

function Local_test(){
    var x = 10 
    total = x + total + 200
    document.write(total)
    console.log(total)
}

function Global_test(){
    total = x + total + 200
    document.write(total)
    console.log(total)
}

function Date_Function(){
    if (new Date().getHours() < 18)
    {
        document.getElementById("Greeting").innerHTML = "Good Day"
    }
    
}

var time =  new Date().getHours()
document.write(time)


