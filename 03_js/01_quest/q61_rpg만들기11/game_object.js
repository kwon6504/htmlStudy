function Monster(name,hp,attack,exp,gold){
	this.name = name;	// 이름
	this.hp = hp;	// 현재 체력. 생명력
	this.maxhp = hp;	// 최대 체력. 생명력
	this.attack = attack;	// 공격력
	this.exp = exp;	// 얘를 잡으면 얻는 경험치
	this.gold = gold;	// 얘 잡으면 주는 골드

	this.info = function(){		
		tv("["+this.name+"("+this.hp+ " / "+this.maxhp+")]");
	}
}

function Character(){
	this.name;	// 이름
	this.hp;	// 체력. 생명력
	this.maxhp;	// 체력. 생명력
	this.attack;	// 공격력
	this.exp;	// 경험치
	this.next_exp;	// 필요 경험치
	this.gold;	// 보유금
	this.info = function(){
		tv("["+this.name+"(💖"+this.hp+ " / "+this.maxhp+")]"+"(exp: "+this.exp+"/"+this.next_exp+")"
			+"🍁:"+this.gold);
	}
}
