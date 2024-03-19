function br(){
    document.write("<br>");
}
// var now = new Date();
// document.write("현재 시간은 :" + now.toLocaleTimeString()); br();
// document.write("현재 시간은 :" + now.toLocaleString()); br();
// document.write("getDate :" + now.getDate() );   br();
// document.write("getDay :" + now.getDay() );   br(); // 요일. 0-일, 1-월, 2-화, 3-수, 4-목, 5-금, 6-토
// document.write("getFullYear :" + now.getFullYear() );   br();
// document.write("getHours :" + now.getHours() );   br();
// document.write("getMilliseconds :" + now.getMilliseconds() );   br(); //1000분의 1초
// document.write("getMinutes :" + now.getMinutes() );   br();
// document.write("getMonth :" + now.getMonth() );   br(); // 달 데이터는 0부터시작이라 +1 해야 현재달이 나옴.
// document.write("getSeconds :" + now.getSeconds() );   br();
// document.write("getTime :" + now.getTime() );   br();
// document.write("getTimezoneOffset :" + now.getTimezoneOffset() );   br();
// document.write("getUTCDate :" + now.getUTCDate() );   br();
// document.write("getUTCDay :" + now.getUTCDay() );   br();
// document.write("getUTCFullYear :" + now.getUTCFullYear() );   br();
// document.write("getUTCHours :" + now.getUTCHours() );   br();
// document.write("getUTCMilliseconds :" + now.getUTCMilliseconds() );   br();
// document.write("getUTCMinutes :" + now.getUTCMinutes() );   br();
// document.write("getUTCMonth :" + now.getUTCMonth() );   br();
// document.write("getUTCSeconds :" + now.getUTCSeconds() );   br();
// document.write("getVarDate :" + now.getVarDate() );   br();
var clock;

window.onload = function(){
    clock=document.getElementById("clock");
    setInterval(x, 1000);  // 타이머 시작 1초마다  함수를 실행한다.
} //실시간 변화를 감지하게 해준다.

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
    clock.innerHTML = result;
}