// 가위바위보
var r = prompt();
var i = Math.floor(Math.random() * 3) + 1;

if(r=="바위"){
    if(i=1){
        document.write("무승부");
    }
    if(i=2){
        document.write("승리");
    }
    if(i=3);{
        document.write("패배");
    }
} else if(r=="가위"){
    if(i=1){
        document.write("패배");
    } else if(i=2){
        document.write("무승부");
    } else if(i=3){
        document.write("승리");
    }
} else if(r=="보"){
    if(i=1){
        document.write("승리");
    } else if(i=2){
        document.write("패배");
    } else if(i=3){
        document.write("무승부");
    }
} else {
    document.write("장난치지 마세요.");
}