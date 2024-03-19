// 문20	반복문 - 별찍기

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

for(i=1; i<=10; i=i+1){
    for(k=1; k<=i-1; k=k+1){
        document.write("_");
    }
    for(j=10; j>=i; j=j-1){
        document.write("*");
    }

    document.write("<br>");
}

// for(i=1; i<=10; i=i+1){
//     for(j=1; j<=i-1; j=j+1){
//         document.write("_");
//     }
    
//     for(k=10; k>=i; k=k-1){
//         document.write("*");
//     }

//     document.write("<br>");
// }