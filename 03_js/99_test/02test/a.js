// 문15	반복문	while	참고탭 참고	prompt 함수를 이용하여 숫자 값을 하나 입력 받기	
// 				숫자가 100이 아니면 숫자를 화면에 (팝업말고) 출력	
// 				숫자가 100이면 while 반복문을 끝내도록 처리	
// 원래 순서는 html에서 위에서 아래로 내려오다 a.js칸에서 js 도입하고나서 나머지 html로 넘어가나
// window.onload=function()가 있다면 html을 다 그린후에 아래 코드를 도입한다.

window.onload = function(){
// html 화면이 다그려지고 나서 아래 코드를 적용하라는 의미

    var t = document.getElementById("a");
    // getelenmetbyid는 해당되는 태크에서 가져오는 명령어
    // t는 div의 a로 지정함
    t.innerHTML = "고양이";
    // .은 ~의 {ex)t의} innerhtml은 =뒤에 입력값을 html div안으로 들어간다.
}

document.write("강아지")
// window.onload=function()에 의해서 강아지가 고양이보다 위로간다.
