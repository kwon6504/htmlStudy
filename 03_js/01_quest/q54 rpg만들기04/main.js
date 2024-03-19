var orc = new Monster("오크전사", 100, 10); //몬스터 프로퍼티
var elf = new Character("엠피스", 200, 30); //캐릭터 프로퍼티

displayCharactersinfo(); //아래 function함수 출력

hr();
dw("전투 시작"); //공용함수 출력
hr();

var monsterdamage = getRandomAttackValue(orc.attack); //아래 function함수 출력
var playerdamage = getRandomAttackValue(elf.attack); //아래 function함수 출력

orc.currenthp = orc.currenthp - playerdamage;
dw(elf.name + "가" + orc.name + "에게 데미지를" + playerdamage + "입혔습니다.<br>")
elf.currenthp = elf.currenthp - monsterdamage;
dw(orc.name + "가" + elf.name + "에게 데미지를" + monsterdamage + "입혔습니다.<br>")
//몬스터와 캐릭터에 공격력에 랜덤만큼 데미지를 입었다는 출력글

displayCharactersinfo(); //아래 function함수 출력 

function getRandomAttackValue(attack){ //위에 출력할 함수 내용
	// attack = attack + 1; 
	var random = Math.floor(Math.random()*attack)+1; 
	return random; // atttack에 수치가 선언된 random의 수식에 들어간 결과값이 return을 통해서 getRandomAttackValue에 출력된다.
}

function displayCharactersinfo(){ //위에 출력할 함수 내용
	hr();
	elf.info(); //캐릭터 자바스크립트에서가져온 출력
	orc.info(); //몬스터 자바스트립트에서가져온 출력
	hr()
}
