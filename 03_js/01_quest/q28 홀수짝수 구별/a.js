for(i=1; i<=10; i=i+1){
        if(i % 2 == 1){
            document.write(i+"홀수입니다.");
        } else if(i % 2 != 1) {
            document.write(i+"짝수입니다.");
        }
        document.write("<hr>");
    } 

// i % 2 == 1 이 true면 홀수
// i % 2 != 1 이 true면 짝수
// 5 / 2 = 2 ... 1 나머지가 있으면 홀수 나머지가 없으면 짝수 
// 5 % 2 = 1