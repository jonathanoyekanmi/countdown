// set the date to countdown to
var countDownDate = new Date("Aug 31, 2020 09:00:00").getTime();

// Update countdown every 1s
var x = setInterval(function(){
    //Get today's date and time
    var today = new Date().getTime();
    // find the difference between today and the countdown date
    var difference = countDownDate - today;

    //Calculation for days, hrs, minutes and secs
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var mins = Math.floor((difference % (1000 * 60 * 60))/(1000 * 60));
    var secs = Math.floor((difference % (1000 * 60))/(1000));

    //Display Result
    document.getElementById("demo").innerHTML= days + "d " + hours + "h " + mins + "m " + secs + "s ";
    
    //when countdown finishes, display text
    if (difference<0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML="Click link to go to <a href=/"/">Homepage</a>";
    }
}, 1000);