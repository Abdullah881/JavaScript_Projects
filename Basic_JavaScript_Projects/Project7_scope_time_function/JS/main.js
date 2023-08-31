
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

function Full_Sentence(){
    var part_1 = "Hello My Name "
    var part_2 = "is Luke Sky walker "
    var part_3 = "and i am a Jedi"
    var whole_sentence = part_1.concat(part_2 , part_3);
    document.getElementById("Concatenate").innerHTML = whole_sentence;


}

function slice_function() {
    var sentence = document.getElementById("Slice").innerHTML
    sentence = sentence.slice(0,10);
    document.getElementById("Slice").innerHTML = sentence

}


function Upper() {
    var sentence = document.getElementById("UpperC").innerHTML
    sentence = sentence.toUpperCase()
    document.getElementById("UpperC").innerHTML = sentence

}

function Find_function() {
    var sentence = document.getElementById("UpperC").innerHTML
    sentence = sentence.search("jumper")
    document.getElementById("Where").innerHTML = sentence

}

function String_Function(){
    var x = 198
    document.getElementById("num_to_str").innerHTML = x.toString();
}

function Precision_Function(){
    var x = 123.826748912634
    document.getElementById("Precision").innerHTML = x.toPrecision(7);
}