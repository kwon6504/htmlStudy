// 문19	반복문 - 별찍기

/*

**********
*********
********
*******
******
*****
****
***
**
*

이런 모양 나오게

*/
// i=i+1과 i++은 같다.

// for(var i=1; i<=10; i=i+1){
//     for(var j=10; j>=i; j=j-1){
//         document.write("☆");
//     }
//     document.write("<br>");
// }

for(i=1; i<=10; i=i+1){
    for(j=10; j>=i; j=j-1){
        document.write("*");
    }
    document.write("<br>");
}