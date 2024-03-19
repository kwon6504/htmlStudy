
// - 전투 무한 루프 처리 : 전투 시 플레이어나 적의 현재 체력이 0 이하로 될 때까지(죽을때 까지) 전투 반복 처리

var orc = new Monster("오크전사",100,10);

var elf = new Character("엠피스",200,20);

elf.info();
orc.info();

hr();
dw("전투시작");
hr();


function proc_battle(){
	var elf_attack = r(elf.attack);
	var orc_attack = r(orc.attack);
	
	hr();
	dw("플레이어 데미지:"+elf_attack);
	hr();
	dw("몬스터 데미지:"+orc_attack);
	hr();
	
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