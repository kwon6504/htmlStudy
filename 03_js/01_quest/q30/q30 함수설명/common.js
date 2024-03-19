// "function 함수명(이름>영어 소문자로 해야한다!)() 선언한다고 표현한다.
// { 명령 }
function xxx() { //링크에서 넘어와서 확인만 하고 넘어간다.
    document.write("고양이");
    document.write("고양이");
    document.write("고양이");
} // 만들어도 써먹기위해서는 호출해서 사용해야한다.

xxx(); // 함수를 호출하는 명령키
// 명령키에서 다시 function으로 올라가서 사용된다.

// xxx();
// xxx();
// 함수의 목적 중 하나는 코드를 모아둬서 고양이 100번찍을 코드의 수를 줄여준다.

function xx() {
    document.write("<br>");
}

xx();

// 반복문으로도 사용가능 고양이 백번찍기
// for(var i=1; i<100; i=i+1){
//     xxx();
// }

xx();

// 입력 > 처리 > 출력 순서

function aPlusB(a,b) { // 매개변수 a 랑 b를 더해주는 함수 (매개변수)
    // var a; var b; 라는 박스를 만들었다는 가정이 들어간다.
    // a b 두개 말고도 3개 이상도 가능 ex) (a,b,c)
    var sum = a+b; //함수 축가 ex)
    // document.write("두수를 더한 결과는?"+a+b);
    document.write("두수를 더한 결과는?"+sum); // 두수를 더한 결과
}

aPlusB(1,2); // a를 1이라하고 b를 2로 전달한다.
aPlusB(3,5); // a를 3이라하고 b를 5로 전달한다.

// 지역변수, 전역변수

var bts=100; // 전역변수글로벌

//지역변수 ex)내수 한국만
function x(){ 
    var z = 1; //지역변수 선언
    document.write(bts);
    bts = bts + z ; //위에 bts에 z를 더한값만 표현
}

x();

document.write(bts); // 전역변수