var userrpc = "";
var comrpc = "";

var rpcinputtext;
var rpcresultscreen;

var resultstring = "";

var divrpcimguser;
var divrpcimgcom;

window.onload = function(){
    rpcinputtext = document.getElementById("rpc_input_text");
    rpcresultscreen = document.getElementById("rpc_input_screen");
    divrpcimguser = document.getElementById("rpc_user");
    divrpcimgcom = document.getElementById("rpc_com");
}

function rpcinputbutton() {
    while(true) {
        userRpc = rpcinputtext.value;
        if(userRpc == "가위" || userRpc == "바위" || userRpc == "보") {
            break;
        } else {
            alert ("장난치지마세요.")
        } break;
    }

    comRpc = Math.floor(Math.random()*3+1);
    if(comRpc == 1 ) {
        comRpc = "가위";
    }
    if(comRpc == 2 ) {
        comRpc = "바위";
    }
    if(comRpc == 3 ) {
        comRpc = "보";
    }
    
    resultString = "유저:" + userRpc
    resultstring = resultstring + "\n"
    resultstring = "컴" + comRpc
    resultstring = resultstring + "\n"

    switch(userRpc){
        case "가위" : 
        divrpcimguser.innerhtml="<img src='sc.png'>"
        break;
        case "바위" : 
        divrpcimguser.innerhtml="<img src='ro.png'>"
        break;
        case "보" : 
        divrpcimguser.innerhtml="<img src='pa.png'>"
        break;
    }
    switch(comRpc){
        case "가위" : 
        divrpcimgcom.innerhtml="<img src='c_sc.png'>"
        break;
        case "바위" : 
        divrpcimgcom.innerhtml="<img src='c_ro.png'>"
        break;
        case "보" : 
        divrpcimgcom.innerhtml="<img src='c_pa.png'>"
        break;
    }
}