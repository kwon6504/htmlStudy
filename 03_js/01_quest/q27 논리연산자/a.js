// 문27	논리연산자	&& ||		
//  (	a 가 b 보다 큼	그리고	c 가 d 보다 작음	)	또는	(	e 가 100과 같음	그리고	f 가 100이 아님	)
// 			위의 긴 조건을 if 조건문으로 만들기											

// 				 * 조건문 작성 시 이 괄호로 묶으세요							 * 조건문 작성 시 이 괄호로 묶으세요			
// 			위 조건을 다 만족(ok, 참, true) 시키게끔 a, b, c, d, e, f 값을 적절히 주기											
// 			조건을 만족하면 고양이 출력	

window.onload = function () {

    var a = 2;
    var b = 1;
    var c = 4;
    var d = 5;
    var e = 100;
    var f = 100;
    if (
        (a > b && c < d) || (e == 100 && f != 100)
        // a b는 true and c d도 true or e는 true and f는 false
        // f가 틀리더라도 or(||)들어가서 앞이 true이기 때문에 true로 성립.
    ) {
        document.write("고양이");
        //위 조건문이 성립한다면 "고양이" 가 출력된다.
    }
}

// || = or 둘중 하나만 true라도 true.
// && = and 둘다 true여야 true.
// ! = not 맞지 않아야 true로 성립합니다. true이면 false가 된다.

// ex)if(true || false) 라면 if(true) 가 된다.
// ex)if(true && false) 라면 if(false) 가 된다.