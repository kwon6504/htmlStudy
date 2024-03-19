var p = [1, 2, 3, 4, 5, 6];
var r = [0, 0, 0, 0, 0, 0];

r[0] = Math.floor(Math.random() * 45)+1;
document.write(r[0]);
br();

while(true){
    r[1] = Math.floor(Math.random() * 45)+1;
    if(r[1] != r[0]){
        document.write(r[1]);
        br();
        break;
    }
}

while(true){
    r[2] = Math.floor(Math.random() * 45)+1;
    if(r[2] != r[0] && r[2] != r[1]){
        document.write(r[2]);
        br();
        break;
    }
}

while(true){
    r[3] = Math.floor(Math.random() * 45)+1;
    if(r[3] != r[0] && r[3] != r[1] && r[3] != r[2]){
        document.write(r[3]);
        br();
        break;
    }
}

while(true){
    r[4] = Math.floor(Math.random() * 45)+1;
    if(r[4] != r[0] && r[4] != r[1] && r[4] != r[2] && r[4] != r[3]){
        document.write(r[4]);
        br();
        break;
    }
}

while(true){
    r[5] = Math.floor(Math.random() * 45)+1;
    if(r[5] != r[0] && r[5] != r[1] && r[5] != r[2] && r[5] != r[3] && r[5] != r[4] ){
        document.write(r[5]);
        br();
        break;
    }
}

var b = 0;

while(true){
    b = Math.floor(Math.random()*45)+1;
    if(b != r[0] && b != r[1] && b != r[2] && b != r[3] && b != r[4] && b != r[5]){
        document.write(b + "보너스");
        br();
        break;
    }
}

var win =0;

for(i=0; i<=5; i=i+1){
    for(j=0; j<=5; j=j+1){
        if(p[i]==r[j]){
            win = win + 1;
        }
    }
}

document.write("맞은 번호 갯수" + win);
br();

var str = "";
switch(win){
    case 0 : 
    case 1 : 
    case 2 :
        str = "낙첨되셨습니다."
        break;
    case 3 :
        str = "5등에 당첨되셨습니다." 
        break;
    case 4 :
        str = "4등에 당첨되셨습니다." 
        break;
    case 5 :
        str = "3등에 당첨되셨습니다."
        for(i=0; i<=5; i=i+1){
            if(b==p[i]){
                str = "2등에 당첨되셨습니다."
            }
        }
        break; 
    case 6 :
        str = "1등에 당첨되셨습니다."
        break;
}

document.write(str);