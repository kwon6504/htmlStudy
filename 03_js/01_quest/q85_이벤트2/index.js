var imgCat;
var buttonCat;
var iscatimgopened = false; //상태를 표시해서 온오프를 표현하는 변수

window.onload = function (){
    imgCat = document.getElementById("cat");
    buttonCat = document.getElementById("cat2");

    buttonCat.addEventListener("click", catimg);
    // html에 id = cat2에 onclick="catimg();" 함수를 추가해준다.
}

function catimg(){
    // imgCat.style.display = "inline"; //css에 display속성 nono을 inlne로 변경해준다.
    if(iscatimgopened == false){
        imgCat.style.display = "inline";
        iscatimgopened = true;
    } else {
        imgCat.style.display = "none";
        iscatimgopened = false;
    }
}
// catimg();라는함수를 발동시키면 위에변수가 false이기 css의 display를
// 변경시키고 iscatimgopenend를 true 변화시킨다. 그리고 다시 함수를 사용했을때
// 변수가true이기때문에 다시 display를 none로 변경시킨다.
