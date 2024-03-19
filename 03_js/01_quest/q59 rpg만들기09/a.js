var elf;
var orc;
var t;	// 첫번째 스크린
var t2;	// 중앙
var t3;	// 하단

var str = "";	// 상단에 들어갈 텍스트
var str2 = "";	// 중앙에 들어갈 텍스트
var str3 = "";	// 하단에 들어갈 텍스트


window.onload = function(){

	t = document.getElementById("a");
	t2 = document.getElementById("b");
	t3 = document.getElementById("c");

	orc = new Monster("오크전사",100,20,100,1000);

	elf = new Character();
	elf.name = "엠피스";
	elf.hp = 200;
	elf.max_hp = 200;
	elf.attack = 20;
	elf.exp = 0;
	elf.next_exp = 300;
	elf.gold = 0;
	
	elf.info();
	orc.info();
	
	hr();
	tv("전투시작");
	hr();

	while(true){
		proc_battle();
	
		if(elf.hp <= 0 || orc.hp <= 0){
			break;
		}
	}

	tv("전투종료"); br();
	tv("불쌍한 "+orc.name+", "+elf.name+"에게 경험치 "+orc.exp+" 을 주고 죽었습니다.");
	elf.exp = elf.exp + orc.exp;
	br();
	tv(orc.gold+" 골드를 얻었습니다.");
	elf.gold = elf.gold + orc.gold;


	hr();hr();

	elf.info();


}

var elf_attack;
var orc_attack;

function proc_battle(){
	elf_attack = r(elf.attack);
	orc_attack = r(orc.attack);
	
	hr();
	tv("🏹플레이어 데미지:"+elf_attack);
	hr();
	tv("🪓몬스터 데미지:"+orc_attack);
	hr();
	
	elf.hp = elf.hp - orc_attack;		// 1~10 랜덤 뎀
	orc.hp = orc.hp - elf_attack;	
	
	elf.info();
	orc.info();
}