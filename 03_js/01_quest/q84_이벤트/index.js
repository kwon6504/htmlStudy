var imgCat;
var buttonCat;

window.onload = function (){
    imgCat = document.getElementById("cat");
    buttonCat = document.getElementById("cat2");

    buttonCat.addEventListener("click", catimg);
    // html에 id = cat2에 onclick="catimg();" 함수를 추가해준다.
    // 이벤트함수로 행해야하는 동작을 말한다.
    // catimg에 ()는 뺀다.
}

function catimg(){
    imgCat.style.display = "inline"; //css에 display속성 nono을 inlne로 변경해준다.
}
// style로 css에 접근하고 뒤에 display 함수에 개입가능해진다.
//ex) <a href="#" onclick="alert('야옹')">고양이</a>
// on 뒤에 click같은 마우스로 가능한 동작을 넣어 발동한다.
//ex) button.addEventListener("click", handleClick);
// 위에 예시와 같이 js를 통해서 행동을 함수로 지정해주는 방법
// !!주의!! 이름만 써야함.()괄호는 뺀다.