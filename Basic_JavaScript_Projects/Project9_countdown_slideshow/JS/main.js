function countdown(){
    var seconds = document.getElementById("Seconds").value;

    function tick(){
        seconds = seconds - 1;
        document.getElementById('timer').innerHTML = seconds;
        var time = setTimeout(tick,1000);
        if (seconds == -1) 
        {
            alert("TIME'S UP");
            clearTimeout(time);
            document.getElementById('timer').innerHTML ="";
        }
    }
    tick()

}