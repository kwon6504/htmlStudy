function tv(str){
    var screenString = screenMessageBox.value;
    screenString = screenString + str;
    screenMessageBox.value = screenString;
}
function tvPlayerInfo(str){
    var screenString = screenPlayerInfo.value;
    screenString = screenString + str;
    screenPlayerInfo.value = screenString;
    screenPlayerInfo.value = str;
}
function br(){
    document.write("<br>");
}
function hr(){
    document.write("<hr>");
}