// 문24
// 1 ~ 10 랜덤값 준비		
// 반복문을 1~10 까지 10번 반복하기
// 반복 도중 반복용 변수 값( var i ) 이 랜덤값과 일치하는 경우 해당 반복 회차를 건너뛰고 다음 회차 진행.	
// 일치 하지 않은 경우 i 값을 출력하기

var r = Math.floor(Math.random() * 10) + 1;
//r을 1~10까지 의 랜덤한 숫자로 선정

for(i=1; i<=10; i=i+1){
    if(i == r){ // i와 r의 난수가 같아지는 순간 true가 된다.
        continue; // 현재회차에서 반복문에서 빠져나가 내부에 있는 document.write가 출력되지 않는다.
    }
    document.write(i);
} // r의 난수가 일치하는 숫자가 continue에 의해 반복문 내부에 있는 출력이 되지 않는다.
//해당하는 회차(r의 난수 숫자 순서)를 건너뛰고 싶을때 사용한다.