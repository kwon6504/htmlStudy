var elf;
var orc;
var t;
var elf_attack;
var orc_attack;

var str = "";

function rpcinputbutton(){
	
	orc = new Monster("오크전사",100,20,100,1000);
	
	elf = new Character();
	elf.name = "엠피사"
	elf.currenthp = 200;
	elf.maxhp = 200;
	elf.attack = 20;
	elf.exp = 0;
	elf.nextexp = 300;
	elf.mygold = 0;
	
	elf.info();
	orc.info();
	
	hr();
	dw("전투시작");
	hr();
	
	while(true){
		battle();
		if(elf.currenthp <= 0 || orc.currenthp <= 0){
			break;
		}
	}
	
	dw("전투종료"); br();
	dw("불쌍한" + orc.name + ", " + elf.name + "에게 경험치" + orc.putexp + "을 주고 죽었습니다.");
	elf.exp = elf.exp + orc.exp;
	br();
	dw(orc.gold + "골드르 얻었습니다.");
	elf.gold = elf.mygold + orc.gold;
	
	hr();
	hr();
	
	elf.info();
}

window.onload = function (){
	t = document.getElementById("screen");
}

function battle(){
	elf_attack = r(elf.attack);
	orc_attack = r(orc.attack);

	dw("🏹플레이어 데미지:" + elf_attack);
	hr();
	dw("🪓몬스터 데미지:" + orc_attack);
	hr();

	elf.currenthp = elf.currenthp - orc_attack;
	orc.currenthp = orc.currenthp - elf_attack;

	elf.info();
	br();
	orc.info();
}