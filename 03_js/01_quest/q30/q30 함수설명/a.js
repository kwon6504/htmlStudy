function x(){ 
    // document.write("고양이");
    return "고양이"; //return 뒤에 있는 명령어를 밖으로 전달한다.
} // return을 만나면 함수가 바로 종려되어버린다.
// 뒤에 var x=100;이 나와도 선언으로 취급되지 않는다.

var cat = x() + x() + x(); //return에 의해서 x();에 "고양이";로 변한다.

document.write(cat); // 이런 방식으로 선언후 가져와서 쓰기 가능
// 순서 x();를 보고 function으로가 출력을 x();가져와 출력

document.write("<br>");

function z(n){ // n이 1~3중 하나일 조건문으로 가위바위보중 선택
    if(n == 1){
        return "가위";
    }
    if(n == 2){
        return "바위";
    }
    if(n == 3){
        return "보";
    }
}

var zpc = z(Math.floor(Math.random()* 3+1));
// z의 함수를 1~3의 랜덤한 숫자로 부여
document.write(zpc);
// zpc로 선언한 funtiom z();의 값을 출력.