
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
    var Time = new Date().getHours(); 
    if (0 < Time && Time < 11) //
    {
        document.getElementById("Greeting").innerHTML = "Hello, Good Morning " + Time
    }
    else if (11 < Time && Time < 18)
    {
        document.getElementById("Greeting").innerHTML = "Hello, Good Afternoon " + Time
    }
    else 
    {
        document.getElementById("Greeting").innerHTML = "Hello, Good Evening " + Time
    }
    
}


function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age > 18) 
    {
        document.getElementById("How_Old").innerHTML = "You are old enough to Vote"
    }
    else
    {
        document.getElementById("How_Old").innerHTML = "You are NOT old enough to Vote"
    }
}



