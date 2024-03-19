var t1
var t2
var t3
var str1 = "";
var str2 = "";
var str3 = "";
var orc = new Monster("오크전사", 100, 10, 100, 1000);
var elf = new Character();
	elf.name = "엠피사";
	elf.hp = 200;
	elf.maxhp = 200;
	elf.attack = 20;
	elf.exp = 0;
	elf.next_exp = 300;
    elf.gold = 0;
var turncount = 0;
var itturn

window.onload = function(){
	t1 = document.getElementById("a");
	t2 = document.getElementById("b");
	t3 = document.getElementById("c");
	itturn = document.getElementById("input_turn");

	charatersinfo();

	  //todo 출력 전환    
	  tv2("전투 시작\n");

	  //전투 무한 루프 처리
	  var loop = true;
	  while (loop) {
		  loop = procBattleTurn();
	  }

}


function charatersinfo(){
	elf.info();
	orc.info();
	tv("\n");
}

// 보상 회득 처리
function getgold(){
	elf.gold = elf.gold + orc.gold;
	tv3(orc.gold + "골드를 얻었습니다.");
}

function randomattack(attack){
	// attack = attack + 1;
	var random = Math.floor(Math.random()*attack)+1;
	return random;
}

function endbattle(){
	tv3("전투 종료\n");
	elf.exp = elf.exp + orc.exp;
	tv3("불쌍한" + orc.name + "," + elf.name + "에게 경험치" + orc.exp + "을 주고 죽었습니다.\n");
	getgold();
}

function procbattleturn() {
	var monsterdamage = randomattack(orc.attack);
	var Characterdamage = randomattack(elf.attack);

	orc.hp = orc.hp - Characterdamage;
    tv2(elf.name + "가 " + orc.name + "에게 데미지를 " + Characterdamage + " 입혔습니다.");
    elf.hp = elf.hp - monsterdamage;
    tv2(orc.name + "가 " + elf.name + "에게 데미지를 " + monsterdamage + " 입혔습니다.");
	tv2("\n");
	

	if(elf.hp <= 0 || orc.hp <= 0){
		endbattle();
		charatersinfo();
		return false;
	} else {
		charatersinfo();
		return true;

	}
}

	function turn(){
		procbattleturn();
		turncount = turncount + 1;
		itturn.value = turncount;
		console.log("현재 턴:" + turncount);
	}

