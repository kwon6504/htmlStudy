// 문13	조건문	if - else if - else	prompt 함수를 이용하여 숫자 값을 하나 입력 받기			
// 			이 값이 100 보다 크면		100 보다 큽니다	라고 팝업 출력
// 			이 값이 100 보다 작으면		100 보다 작습니다	라고 팝업 출력
// 			그 외에는		100 입니다.	라고 팝업 출력

var i=prompt();

// if(i>100){
//     alert ("100보다 큽니다.");
// } else if(i<100){
//     alert ("100보다 작습니다.");
// } else {
//     alert("100 입니다.");
// }

// ex
// else if는 여러개가 가능하다.
if(i == "가위"){
    document.write("가위");
} else if(i=="바위"){
    document.write("바위");
} else if(i=="보"){
    document.write("보");
} else {
    document.write("가위바위보합시다.")
}