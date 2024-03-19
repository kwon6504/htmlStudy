//개별로 해도 가능하지만 편하게 보기위해 여러가지 변수들을 모아두는 종합변수(class)
//종합변수는 자바도 동일하다.
//object(객체)
//ex) 자동차 설계도
// function car(){
// 	차체
// 	바퀴
// 	엔진
// }

// rule) new 클래스명();
// this = 속성 또는 프로퍼티(property)

function Cat(){ //밑에 함수들을 보고 이렇게 설게가 되어있구나 라는 표현	
	/* 속성 또는 프로퍼티들 */
	this.name = "";  // 이름
	this.age = 0;    // 나이
	this.weight = 0; // 몸무게
	this.family = "";    // 종류 (ex. 코리안숏헤어, 페르시아고양이)
	this.color = "";     // 털색 //(.) 은 ~의 라는 뜻.
}

var kittiy = new Cat(); //변수에 대입해야지만 사용가능하다.
// cat이라는 종합변수를 한마리의 고양이를 변수 kittiy로 만든다. 

var yaongi = new Cat(); //위에 kitty와 다른 변수이다. 서로 다른 객체

yaongi.name = "야옹이"; //종합클래스 안의 이름(name)에 "야옹이"가 들어간다.

document.write(yaongi.name); //화면에 야옹이라는 글이 나온다.

