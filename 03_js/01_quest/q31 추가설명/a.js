/**********************************************************************
가위 바위 보 게임 (v0.3.0)

[기존 기능]
- 가위바위보 기능
- 유저 가위바위보 입력 시 예외처리 추가
v0.3.0 에서 추가 된 기능
- 유저 가위바위보 입력을 입력창에서 받도록 수정



todo:
- 가위바위보 게임을 단판이 아닌 무한으로 가능하게 변경
**********************************************************************/
// t1.addEventListener('click', btn_listener);

// 선언 (박스만들기)
var userRpc = "";
var comRpc = "";

var rpcInputText;


// ***** 중요 ******
window.onload = function(){ // 지정함수? > 화면에 html이 모두 실행되고 나서 {}안을 실행한다.

    rpcInputText = document.getElementById("rpc_input_text");       // 연결 
    //rpc_input_text는 전부 소문자로 하고 단어사이에 _로 표기되어 있다. 이것을 "스네이크표기법" 이라 한다.
// 전역변수 : 앞에 태그(rpcInputText)를 가르키게된다.
} //getElementById는 ()의 id를 가져와서 rpcInputText(변수)에 지정한다. ??
// window.onload가 없다면 변수에 지정된 id는 <body>에 있고 a.js는 <head>에 있어서 오류를 발생시킨다.

function rpcInputButtonClick(){ //함수 실행됐을때 (이벤트!!
    // 중간 대문자는 단어구별을 위한것 = 낙타표기법
    while(true){    // while 무한루프 걸기는 이렇게 하면 됩니다
        // userRpc = prompt("가위,바위,보 중에 하나를 입력하세요:");
        userRpc = rpcInputText.value; //value는 앞의 rpcInputText안의 입력을 자바스크립트에서 가져온다.
        if(userRpc == "가위" || userRpc == "바위" || userRpc == "보"){
            break;  // while 무한루프를 빠져나감
        } else {
            alert("장난치지마세요");
        } break;
    }
 
    
    comRpc = Math.floor(Math.random()*3+1); // 컴퓨터 난수 발생 시키기 (1~3)
    if(comRpc == 1){
        comRpc = "가위";
    }
    if(comRpc == 2){
        comRpc = "바위";
    }
    if(comRpc == 3){
        comRpc = "보";
    }
    dw("유저:"+userRpc);
    br();
    dw("컴:"+comRpc);
    br();

    // document.write("유저"+userrpc);
    // document.write("<br>");
    // document.write("컴"+comRpc);
    // document.write("<br>");
   
    var winDrawLose = "";
    switch(userRpc){
        case "가위":
            switch(comRpc){
                case "가위":
                    winDrawLose = "DRAW";
                    break;
                case "바위":
                    winDrawLose = "패배";
                    break;
                case "보":
                    winDrawLose = "승리";
                    break;
            }
            break;
        case "바위":
            switch(comRpc){
                case "가위":
                    winDrawLose = "승리";
                    break;
                case "바위":
                    winDrawLose = "DRAW";
                    break;
                case "보":
                    winDrawLose = "패배";
                    break;
            }        
            break;
        case "보":
            switch(comRpc){
                case "가위":
                    winDrawLose = "패배";
                    break;
                case "바위":
                    winDrawLose = "승리";
                    break;
                case "보":
                    winDrawLose = "DW";
                    break;
            }        
            break;
    }
    // document.write(winDrawLose);
    dw(winDrawLose);  
}