var user = "";
while(true){ //반복문
    user = prompt("가위, 바위, 보 중에 하나를 입력하세요.");
    if(user == "가위" || user == "바위" || user == "보"){
        break; // while의 무한루프를 나가게 해준다.
    } else {
        alert("장난치지마세요.");
    }
}
var com = Math.floor(Math.random()*3+1);
if(com == 1){
    com = "가위"
}
if(com == 2){
    com = "바위"
}
if(com == 3){
    com = "보"
}

document.write("유저:" + user);
document.write("<br>");
document.write("컴:" + com);
document.write("<br>");

var windrawlose = "";
switch(user){
    case "가위" :
        switch(com){
            case "가위":
                windrawlose = "무승부";
                break;
            case "바위":
                windrawlose = "패배";
                break;
            case "보":
                windrawlose = "승리";
                break;
        }
}
switch(user){
    case "바위" :
        switch(com){
            case "가위":
                windrawlose = "승리";
                break;
            case "바위":
                windrawlose = "무승부";
                break;
            case "보":
                windrawlose = "패배";
                break;
        }
}
switch(user){
    case "보" :
        switch(com){
            case "가위":
                windrawlose = "패배";
                break;
            case "바위":
                windrawlose = "승리";
                break;
            case "보":
                windrawlose = "무승부";
                break;
        }
        break;
}

document.write("결과:" + windrawlose);