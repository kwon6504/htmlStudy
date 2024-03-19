function Character(name, hp, attack){
    this.name = name;
    this.currenthp = hp;
    this.maxhp = hp;
    this.attack = attack;
    
    this.info = function(){
        dw("["+ this.name +"("+this.currenthp+"/"+ this.maxhp +")]");
    }  // dw = [엠피스(200/200)]
}