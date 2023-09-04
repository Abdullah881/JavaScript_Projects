//observing how trying to edit a constant gives a bug
const x = 12
// x = 342 //gives error
document.write(x)

// new object 
function My_Car(){
    const Phantom = {brand: "Rolls" , color:"black" , wheels : 4};
    Phantom.color = "Red";
    document.getElementById("car1").innerHTML = "This Car is" + Phantom.color + "<br>"
}


//using let vs var
var X = 82;
document.write (X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write ("<br>" + X) ;


// new object with and imbedded function 
let Car_2 = 
{
    brand: "Rolls" ,
    color:"black" , 
    wheels : 4 ,
    Year :"2020" , 
    model: "Ghost",
    description: function() {
        return this.Year + "car is " + this.color + " " + this.brand + this.model;
    }
}

document.getElementById("Car_Object") = Car_2.description();