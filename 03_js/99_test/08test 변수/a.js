// 전역 bts
// 지역 aaa
var k = 1;
// 지역변수 = 이 지역에서만 가능한 변수
function x(){
    var kim = "고양이";
    document.write(kim);
}

function y(){
    var kim = "강아지";
    document.write(kim);
}

y();

document.write(k);

// 전역변수 = 글로벌하게 가능한 변수

x();

document.write(k);

// {}안에 있는 k는 함수안에서만 적용되는 케이스
// {}안이 아닌 밖에로 나오면 전체 k에 적용되는 케이스