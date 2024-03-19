var p = [1,2,3,4,5,6];
var r = [0,0,0,0,0,0];

r[0] = Math.floor(Math.random()*45)+1;
document.write(p[0]+":"+ r[0]);
document.write("<hr>");

while(true){
    r[1] = Math.floor(Math.random()*45)+1;
    if(r[1] != r[0]){
        document.write(p[1]+":"+r[1]);
        document.write("<hr>");
        break;
    }
}

while(true){
    r[2] = Math.floor(Math.random()*45)+1;
    if(r[2] != r[0] && r[2] != r[1]){
        document.write(p[2]+":"+ r[2]);
        document.write("<hr>");
        break;
    }
}

while(true){
    r[3] = Math.floor(Math.random()*45)+1;
    if(r[3] != r[0] && r[3] != r[1] && r[3] != r[2]){
        document.write(p[3]+":"+r[3]);
        document.write("<hr>");
        break;
    }
}

while(true){
    r[4] = Math.floor(Math.random()*45)+1;
    if(r[4] != r[0] && r[4] != r[1] && r[4] != r[2] && r[4] != r[3]){
        document.write(p[4]+":"+r[4]);
        document.write("<hr>");
        break;
    }
}

while(true){
    r[5] = Math.floor(Math.random()*45)+1;
    if(r[5] != r[0] && r[5] != r[1] && r[5] != r[2] && r[5] != r[3] && r[5] != r[4]){
        document.write(p[5]+":"+r[5]);
        document.write("<hr>");
        break;
    }
}

var b = 0;

while(true){
    b = Math.floor(Math.random()*45)+1;
    if(b != r[0] && b != r[1] && b != r[2] && b != r[3] && b != r[4] && b != r[5]){
       document.write(b + "--> 보너스 숫자");
       document.write("<hr>");
       break;
    }
}

var win = 0;

for(i=0; i<=5; i=i+1){
    for(j=0; j<=5; j=j+1){
        if(p[i] == r[j]){
            win = win + 1;
        }
        break;
    }
}

document.write("맞은 갯수:" + win);
document.write("<br>");

var str = "";

switch(win){
    case 0:
    case 1:
    case 2:
        str = "낙첨입니다.";
        break;
    case 3:
        str = "5등입니다.";
        break;
    case 4:
        str = "4등입니다.";
        break;
    case 5:
        str = "3등입니다.";
        for(i=0; i<=5; i=i+1){
            if(b == p[i]){
                str = "2등입니다."
                break;
            }
        }
    case 6:
        str = "1등입니다.";
        break;
}

document.write(str);