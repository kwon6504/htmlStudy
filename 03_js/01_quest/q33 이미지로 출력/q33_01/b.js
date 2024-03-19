// 선언
var userRpc = "";
var comRpc = "";

var rpcinputtext;
var rpcResultScreen;

var resultString = "";

// 이미지 놓일 div들
var divrpcimguser;
var divrpcimgcom;
var divrpccssvs;

// 중요하다.
window.onload = function(){
    rpcinputtext = document.getElementById("rpc_input_text"); // 연결
    //. (~의)!!!!! 함수의 행위를 해라. ()// 매개변수 id를 집어 넣는다.
    rpcResultScreen = document.getElementById("rpc_result_screen"); // 연결
    divRpcImguser = document.getElementById("rpc_user"); // 연결
    divRpcImgcom = document.getElementById("rpc_com"); // 연결
    divrpccssvs = document.getElementById("rpc_vs"); //연결
}

function rpcInputButtonClick(){ //지역변수
    // while(true){
        userRpc = rpcinputtext.value; // value(입력되어있는 text 가져옴)
        if(userRpc == "가위" || userRpc == "바위" || userRpc == "보"){
            // break; // while 루프를 빠져나간다.
        } else { // 3가지 조건이 아닐경우
            alert("장난치지마세요."); // 팝업창으로 띄운다.
            // break;
        }
    // }

    comRpc = Math.floor(Math.random()*3+1);
    // 컴퓨터 난수 발생 시키기 1~3중 랜덤으로 나온다
    if(comRpc==1){
        comRpc = "가위";
    }
    if(comRpc==2){
        comRpc = "바위";
    }
    if(comRpc==3){
        comRpc = "보";
    } // 조건문으로 1~3에 결고가 나왔을때의 선택지

    resultString = "유저:" + userRpc
    //* 주의 * 다시 게임을 할 경우 이 명령줄로 인해 기존 누적된 내용이 초기화
    // 선언된 resultstring에 유저가 선택한 가위바위보
    resultString = resultString + "\n"; //"\n"은 줄바꿈
    resultString = resultString + "컴:" + comRpc;
    // 선언된 resultstring의 컴퓨터가 선택된 가위바위보
    resultString = resultString + "\n"; //"\n"은 줄바꿈

    // 가위바위보의 이미지 추가
    switch(userRpc){
        case "가위" :
            divRpcImguser.innerHTML = "<img src='sc.png'>"
            //선언된 divrpcimguser에서 innerhtml으로 html의 내용으로 취급
            break;
        case "바위" :
            divRpcImguser.innerHTML = "<img src='ro.png'>"
            break;
        case "보" :
            divRpcImguser.innerHTML = "<img src='pa.png'>"
            break;
    }
    switch(comRpc){
        case "가위" :
            divRpcImgcom.innerHTML = "<img src='c_sc.png'>"
            break;
        case "바위" :
            divRpcImgcom.innerHTML = "<img src='c_ro.png'>"
            break;
        case "보" :
            divRpcImgcom.innerHTML = "<img src='c_pa.png'>"
            break;
    } // 선언된 앞에 문장의 내용을 innerhtml으로 b.html 내용으로 변화시킨다.

    divrpccssvs.innerHTML = "<img src = 'vs.jpg'>"
    var windrawlose = ""; // 승부의 결과를 선언하고 아래 조건문으로 승부의 결과를 출력한다.
    switch(userRpc){ //양쪽 가위바위보의 결과에 따른 text를 출력
        case "가위":
            switch(comRpc){
                case "가위":
                    windrawlose = "DRAW";
                    break;
                case "바위":
                    windrawlose = "패배";
                    break;
                case "보":
                    windrawlose = "승리";
                    break;
            }
            break;

        case "바위":
            switch(comRpc){
                case "가위":
                    windrawlose = "승리";
                    break;
                case "바위":
                    windrawlose = "DRAW";
                    break;
                case "보":
                    windrawlose = "패배";
                    break;
            }
            break;

        case "보":
            switch(comRpc){
                case "가위":
                    windrawlose = "패배";
                    break;
                case "바위":
                    windrawlose = "승리";
                    break;
                case "보":
                    windrawlose = "DRAW";
                    break;
            }
            break;
    }

    resultString = resultString + "결과:" + windrawlose;

rpcResultScreen.value = resultString
// rpcResultScreen.valu 에 의해서 window.onload에 작성된 id "rpc_result_screen"에
// 표시되어지는데 = resultString으로 앞에서 적어진 resultString까지 포함하여 id에 표시된다.
}

