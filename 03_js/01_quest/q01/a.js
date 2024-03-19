// 이거 주석임. 한줄 주석.

/*
    참고: 여러줄 주석은 이렇게
*/
 
// <script src="a.js"> </script> 에 의해
// 프로그램 해석기가 여기로 와서 아래로 한줄 한줄 읽으면서 우변부터
// 처리하게 됨.

// alert 함수라고 하고 얘는 팝업을 띄워줌.
// ( 안에 쓴 내용을 찍음)
//명령문. 문. 마지막에 마침표를 찍어야함. ; 이 js의 명령문의 마침표임.   

/*
alert("헬로월드!!!");   
alert(1000);   
alert(1+7);   

*/

// alert("헬로월드!!!");   
// alert(1000);   
// alert(1+7);   
// confirm ( "헬로 월드" );
// prompt ( "헬로 월드", 111 );
// document.write("헬로 월드");

// // 콘솔창에 뜨는 로그
// console.log( "헬로 월드" );

// var 변수(박스)를 만들겠다는 선언
// var cat = 1;
// var dog = 1 + 2;
// var sum = cat + dog;

// alert(sum);
// // 문자끼리 더하면 키티멜론이 된다.
// // 묹자와 숫자의 합은 숫자(100)가 문자("100")로 적용된다.
// var test = "키티" + "멜론" + 100;
// alert(test);

// var r = Math.floor(Math.random() * 6) + 1; 

// document.write(r);

// document.write("<hr>");
// 조건문(if)은 true/fales가 나온다. true가 나온면 {}실행, fales면 {}를 넘어간다.
// {}에는 ;불가능
// if(r > 2){
//     document.write("성공");  
// }else{
//     document.write("실패");
// }

// document.write("<hr>");

// else는 조건을 여러개로 분할이 가능
// if(r == 1){
//     document.write("대실패");

// }else if(r == 2){
//     document.write("실패");
// }else if(r == 3){
//     document.write("성공");
// }else{
//     document.write("대성공");
// }

// document.write("<hr>");

// if보다 많은 조건을 걸때 편하다.
// switch (r) {
//     case 1 :
//         document.write("대실패");
//         break;
//     case 2 :
//         document.write("실패");
//         break;     
//     case 3 :
//         document.write("성공");
//         break;
//     default :
//         document.write("대성공");
//         break;
// }

// switch (player) {
//     case "가위": a = 1;
//         break;
//     case "바위": a = 2;
//         break;
//     case "보":  a = 3;
//         break;
// }

// 반복문

// var cat = 7;
// var dog;
// cat에 1더해서 결과를 다시 cat에 대입함
// cat 변수 값을 1증가시킴
// cat = cat + 1;

// i앞에 var이 이미(박스가) 존재한다 가정.
for(var i = 1; i < 3; i = i + 1){
    document.write("고양이"+i);

    for(var j = 1; j < 3; j= j + 1){
        document.write("강아지"+j);
    }
}

