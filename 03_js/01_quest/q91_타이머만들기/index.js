var sec = 10;
var clockdiv
function x(){
    sec = sec - 1;
    if(sec <= 0){
        clockdiv.innerHTML = "불꺼!";
    } else {
        clockdiv.innerHTML = sec;
    }
}

window.onload = function(){
    clockdiv=document.getElementById("clock");
    setInterval(x, 1000); //1초마다 x함수 실행
}