function onTapOfBtn(param){
    document.getElementById("equation").value +=param;
}

function clearTextField(){
    document.getElementById("equation").value ="";

}
 function evaluation(){
    var e= document.getElementById("equation").value;
    document.getElementById("equation").value=eval(e);

 }