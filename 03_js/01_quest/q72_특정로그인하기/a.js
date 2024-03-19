var str_id = "";
var str_pw = "";

var input_id;
var input_pw;

window.onload = function(){ // html 문서가 다 읽어진 후에 실행되는 함수임. 이걸 써야 아래 h1 태그(id=a)에 대한 접근이 가능해짐


    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");

//todo

    // str_id = input_id.value;
    // str_pw = input_pw.value;

    

}

function login(){

    // alert("id:"+str_id+" pw:"+str_pw);
    // alert("id:"+input_id.value+" pw:"+input_pw.value);

    var local_id = input_id.value; //사용자가 "id" 입력 필드에 입력한 값을 가져옵니다.
    var local_pw = input_pw.value; //사용자가 "pw" 입력 필드에 입력한 값을 가져옵니다.


    if(local_id == "cat" && local_pw == "1234"){
        alert("로그인에 성공했습니다.");
    } else {
        alert("로그인에 실패했습니다.");
    }
}