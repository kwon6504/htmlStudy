function Character(){
    this.name //main.js에서 클래스함수를 출력하거라면 여기서는 = name이 없어야 한다.
    this.currenthp
    this.maxhp
    this.attack
    this.exp //경험치
    this.nextexp //필요한경험치
    this.mygold //소지금
    this.info = function(){
        dw("["+this.name+"(💖"+this.currenthp+ " / "+this.maxhp+")]"+
        "(exp: "+this.exp+"/"+this.nextexp+")"+"<br>"+"(💰gold: "+this.mygold+")")
    }
}

function Monster(name, hp, attack, putexp, gold){
    this.name = name;
    this.currenthp = hp;
    this.maxhp = hp;
    this.attack = attack;
    this.putexp = putexp; //잡으면 주는 경험치
    this.gold = gold;
    this.info = function(){
        dw("["+ this.name +"(💖"+this.currenthp+"/"+ this.maxhp +")]");
    }// dw안에는 this를 넣어야한다. hp를 넣는다면 고정값으로 되어 전투시 hp가 깍이지 않는다.
}