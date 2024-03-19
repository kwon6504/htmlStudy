var user = prompt("가위, 바위, 보 중에 하나를 입력하세요.");
// 입력창 (prompt) 유저가 내기
if(user == 1){
    user = "가위";
}
if(user == 2){
    user = "바위";
}
if(user == 3){
    user = "보";
}

var com = Math.floor(Math.random()*3+1); //컴퓨터가 낸 것중 하나 텍스트로 저장할 변수
if(com == 1){
    com = "가위"
}
if(com == 2){
    com = "바위"
}
if(com == 3){
    com = "보"
} //1~3 랜덤값 골라서 지정

document.write("유저:" + user);//유저가 제출한 내용
document.write("<br>"); // 한칸 내리기
document.write("컴:" + com); //컴퓨터가 선택한 내용
document.write("<br>");

var windrawlose = ""; // 판정
switch(user){ //판정결과의 가지수가 9가지 그것을 조건문으로 표현하기
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

document.write("결과:" + windrawlose);// 결과를 알려주는 문장