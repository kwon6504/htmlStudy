var ipid;
var ippw;
var ippw_re;
var ipuser_name;
var ipemail;
var ipbirth_y;
var ipbirth_m;
var ipbirth_d;
var ipsex;
var iptel_1;
var iptel_2;
var iptel_3;

var id;
var pw;
var pw_re;
var username;
var email;
var birth_y;
var birth_m;
var birth_d;
var sex;
var tel_1;
var tel_2;
var tel_3;

window.onload = function(){
    ipid = document.getElementById("id");
    ippw = document.getElementById("pw");
    ippw_re = document.getElementById("pw_re");
    ipuser_name = document.getElementById("user_name");
    ipemail = document.getElementById("email");
    ipbirth_y = document.getElementById("birth_y");
    ipbirth_m = document.getElementById("birth_m");
    ipbirth_d = document.getElementById("birth_d");
    ipsex = document.getElementById("sex");
    iptel_1 = document.getElementById("tel_1");
    iptel_2 = document.getElementById("tel_2");
    iptel_3 = document.getElementById("tel_3");
}

function check(){
    id = ipid.value;
    pw = ippw.value;
    pw_re = ippw_re.value;
    username = ipuser_name.value;
    email = ipemail.value;
    birth_y = ipbirth_y.value;
    birth_m = ipbirth_m.value;
    birth_d = ipbirth_d.value;
    sex = ipsex.value;
    tel_1 = iptel_1.value;
    tel_2 = iptel_2.value;
    tel_3 = iptel_3.value;

    if(checkid() && checkpw() && checkpw_re() && checkusername() && checkemail()){
        alert("회원가입 완료");
    } else {
        alert("회원가입 실패");
    }
}

function checkid(){
    if(id.length>=4 && id.length<=12){ //length는 요소의 수를알려주는 함수.
        log("ok id");
        return true;
    } else {
        log("no id");
        return false;
    }
}

function checkpw(){
    if(pw.length>=4 && pw.length<=12){
        log("ok pw");
        return true;
    } else {
        log("no pw");
        return false;
    }
}

function checkpw_re(){
    if(pw_re.length>=4 && pw_re.length<=12){
        log("ok pwre");
        return true;
    } else {
        log("no pwre");
        return false;
    }
}

function checkusername(){
    if(username.length>=4 && username.length<=12){
        log("ok username");
        return true;
    } else {
        log("no username");
        return false;
    }
}

function checkemail(){
    if(email.length>=4 && email.length<=12){
        log("ok email");
        return true;
    } else {
        log("no email");
        return false;
    }
}