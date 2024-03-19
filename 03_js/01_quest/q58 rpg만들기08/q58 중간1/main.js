
// - 전투 무한 루프 처리 : 전투 시 플레이어나 적의 현재 체력이 0 이하로 될 때까지(죽을때 까지) 전투 반복 처리

var orc = new Monster("오크전사", 100, 10, 100, 100);

var elf = new Character();
elf.name = "엠피사";
elf.currenthp = 200;
elf.maxhp = 200;
elf.attack = 20;
elf.exp = 0;
elf.nextexp = 300;
elf.mygold = 0;

var inputtext
var resultscreen

window.onload = function(){
	infoscreen = document.getElementById("info_text");
    inputtext = document.getElementById("input_text");
    resultscreen = document.getElementById("input_screen");
}

function infoscreen(){
elf.info();
orc.info();


dw("전투시작");

function proc_battle(){
	var elf_attack = r(elf.attack);
	var orc_attack = r(orc.attack);
	
	dw("플레이어 데미지:"+ "🏹" +elf_attack);
	dw("몬스터 데미지:"+ "🪓" +orc_attack);
	
	elf.currenthp = elf.currenthp - orc_attack;		// 1~10 랜덤 뎀
	orc.currenthp = orc.currenthp - elf_attack;	//this 자리에 elf , orc가 들어간다.
	
	elf.info();
	orc.info();
}

while(true){
	proc_battle();

	if(elf.currenthp <= 0 || orc.currenthp <= 0){
		break;
	}
}


dw("전투종료");
dw("불쌍한 "+orc.name+", "+elf.name+"에게 경험치 "+orc.putexp+" 을 주고 죽었습니다.");
dw(orc.putexp+"골드를 얻었습니다.");
elf.exp = orc.putexp + elf.exp;
elf.mygold = orc.gold + elf.mygold;

elf.info();}