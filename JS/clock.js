// We shall create a function where everything will be running
function timeNow(){
    var renow = new Date();     // Creating an object of the date class to get different current min,hrs&sec 
    // storing them in differnt variables
    var hour = renow.getHours();
    var min = renow.getMinutes();
    var sec = renow.getSeconds();

    // using the updateTime() mtd to add 0 so they display as 00:00:00

    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    document.getElementById('clock').innerHTML = hour + ":" + min + ":" + sec; //Adding the time to the div

    var t = setTimeout(function(){
        timeNow()
    },1000); //setting the timer

}




function updateTime(k){
    if (k < 10){
        return "0" + k;
    }
    else {
        return k;
    }
}


timeNow(); // calling the timenow function to initialize the process