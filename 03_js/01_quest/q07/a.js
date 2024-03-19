var random=Math.floor(Math.random()*100)+1;

// for( var i=1;  i <= random;  i=i+1  ) {
//     // 같다는 표시는 ==
//     if(i == 7){
//         // document.write(i);
//         document.write("<img id='goldcat' src='cat.jpg'>");
//         // 비어있는 곳에 미이 세팅해둔것을 출력할수 있다(html별개로)
//         // var gold_cat_img = document.getElementById("goldcat");        

//         // gold_cat_img.style.borderColor = "yellow";

//         // gold_cat_img.style.borderStyle = "solid";

//         // gold_cat_img.style.borderWidth = "230px";

//     } else {    // 생 고양이 출력
//         document.write("<img src='cat.jpg'>");
//     }
// }

for(i=1; i<=random; i=i+1){
    if(i==7){
        document.write ("<img id='goldcat' src='cat.jpg'>");
    } else {
        document.write ("<img src='cat.jpg'>");
    }
}