var sec = 10;
var timerdiv
var clockdiv
// var dateInstance

function xx(){
    var now = new Date();
    var month = now.getMonth() + 1;
    var result = 
        now.getFullYear() + "년 " 
        + month + "월 "
        + now.getDate() + "일 "
        + now.getHours() + "시 "
        + now.getMinutes() + "분 "
        + now.getSeconds() + "초 ";
    clockdiv.innerHTML = result;
}

function x(){
    xx();
    // dateInstance = new Date();
    // clockdiv.innerHTML = dateInstance
    sec = sec - 1;
    if(sec <= 0){
        timerdiv.innerHTML = "불꺼!";
    } else {
        timerdiv.innerHTML = sec;
    }
}

window.onload = function(){
    clockdiv=document.getElementById("clock");
    timerdiv=document.getElementById("timer");
    setInterval(x, 1000); 

    // dateInstance = new Date();
    // clockdiv.innerHTML = dateInstance
    // timerdiv.innerHTML = sec;
}