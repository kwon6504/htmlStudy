function Monster(name, hp, attack){
    this.name = name;
    this.currenthp = hp;
    this.maxhp = hp;
    this.attack = attack;
    this.info = function(){
        dw("["+ this.name +"("+this.currenthp+"/"+ this.maxhp +")]");
    }
}