function mymenu(){
    document.getElementById("menu-mob").style.display="block";
    document.getElementById("icon-mob").style.display="block";
    document.getElementById("icon-ham-mob").style.display="none";
}
function cancel(){
    document.getElementById("menu-mob").style.display="none";
    document.getElementById("icon-mob").style.display="none";
    document.getElementById("icon-ham-mob").style.display="block";
}
function validateForm(){
    let sub = document.forms["myForm"]["fletname"].value;
    if(sub==""){
        alert("Please fill the blank input");
    }else{
        alert("Form is successfully submitted. Thank you for visiting.");
    }
}
