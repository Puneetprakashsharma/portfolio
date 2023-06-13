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
    let arr = document.forms["myForm"]["fletname"];
    let mess = document.getElementById("mess-area").value;
    let err = false;

    for(let i=0;i<arr.length;i++){
        if(arr[i].value == ''){
            err = true;
        }
        
    }

    if(err){
        alert("Please fill the blank input");
     }
     else {
        alert("Form is successfully submitted. Thank you for visiting.");
    }
}

