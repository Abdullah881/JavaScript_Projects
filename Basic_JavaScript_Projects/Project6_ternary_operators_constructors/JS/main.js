function Ride_Function () {
    var Height, Can_ride;
    Height = document.getElementById ("Height") .value;
    Can_ride = (Height < 52) ? "You are too short": "You are tall enough";
    document.getElementById ("Ride") .innerHTML = Can_ride + " to ride.";
    }

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;

}

const Jack = new Vehicle("Dodge", "Viper" , 2020 , "Red");
const Emily = new Vehicle("Jeep" , "Hawk" , 2019 , "Black");
const Erik = new Vehicle("Ford" , "Pinto" , 1972 , "Yellow");

function my_function() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

// var true; 
// document.write(true)
// gives error
//Nested Function
//<p id="nested_function" onclick="Nest_Function()">Click Here</p>

function Nest_Function() {
    document.getElementById("nested_function").innerHTML = Count_Function()
    function Count_Function() {
        var num1 = 10 
        var num2 = 12
        var total = num2 + num1
        return total
    }

}
