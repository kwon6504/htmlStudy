var elf; //전역 함수는 이로 몰아두면 보기 편하다.
var dragon;
var t;
var elf_attack;
var dragon_attack;

var str = "";// 빈문자열로 초기화해줌
// common에서 설정한 함수를 전역함수로 지정해서 전체에 대입한다.



window.onload = function(){

	t = document.getElementById("a");

	dragon = new Monster("오크전사",100,20,100,1000);

	elf = new Character();
	elf.name = "엠피사";
	elf.hp = 200;
	elf.max_hp = 200;
	elf.attack = 20;
	elf.exp = 0;
	elf.next_exp = 300;
	elf.gold = 0;
	
	elf.info();
	br();
	dragon.info();
	
	hr();
	dw("전투시작");
	hr();

	while(true){
		proc_battle();
	
		if(elf.hp <= 0 || dragon.hp <= 0){
			break;
		}
	}

	dw("전투종료"); br();
	dw("불쌍한 "+dragon.name+", "+elf.name+"에게 경험치 "+dragon.exp+" 을 주고 죽었습니다.");
	elf.exp = elf.exp + dragon.exp;
	br();
	dw(dragon.gold+" 골드를 얻었습니다.");
	elf.gold = elf.gold + dragon.gold;


	hr();hr();

	elf.info();


}


function proc_battle(){
	elf_attack = r(elf.attack);
	dragon_attack = r(dragon.attack);
	
	hr();
	dw("🏹플레이어 데미지:"+elf_attack);
	hr();
	dw("🪓몬스터 데미지:"+dragon_attack);
	hr();
	
	elf.hp = elf.hp - dragon_attack;		// 1~10 랜덤 뎀
	dragon.hp = dragon.hp - elf_attack;	
	
	elf.info();
	br();
	dragon.info();
}