// 문12	문10, 11을	o!!!	로 깨신분들은..	(안보고 칠 수 있을 때 까지 하시라는것임)						
// 	조건문	if - else	prompt 함수를 이용하여 숫자 값을 하나 입력 받기							
// 			이 값이 100 보다 크면		100보다 큽니다	라고 팝업 출력				
// 			그 외에는		100 이하 입니다.	라고 팝업 출력				
										
// 				참고:	값 입력받기	팝업 형태	prompt("값을 입력하세요 :");			var s = prompt("값을 입력하세요 :");
// 										document.write(s);

var i=prompt();

// var i = "7";

// if(i>100){
//     alert ("100보다 큽니다.");
// } else {
//     alert ("100 이하 입니다.");
// }

switch(i){
    case "1":
        document.write("1입니다.");
        break;
    
    case "2":
        document.write("2입니다.");
        break;
    
    default: 
        document.write("오답입니다.");
        break;
}