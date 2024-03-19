var a = new Array();
a = ["개","고양이","너굴맨"];
// 배열은 0부터 시작함으로 "개"는 0 "고양이"는 1 "너굴맨"는 3
var x = a[1];
var xx = a[0];
var sum = x + xx;

alert("합계:" + sum);
// 1. addCatAndInputText 라는 이름의 함수 만들기(선언하기)
addCatAndInputText();
// 2. 이 함수안에서 문자열을 하나를 입력 받아 변수에 저장하고, 
// 이 값을 "고양이" 랑 더해서 화면에 출력하게 하기

function addCatAndInputText(){
    var inputText = prompt("값 입력:");
    document.write("고양이"+inputText);
}