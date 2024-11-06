function fontSizeChange(input){
    var message = document.getElementById("message");   
    message.style.fontSize= input.value +"px";
}


function makeBold(){
    var message = document.getElementById("message");   
    message.style.fontWeight= "bold";
}


function makeItalic(){
    var message = document.getElementById("message");   
    message.style.fontStyle= "italic";
}   


function changeColor(ele){
    var message = document.getElementById("message");   
    message.style.color= ele.value;
}   


function underLineText(){
    var message = document.getElementById("message");   
    message.style.textDecoration= "underLine";
}


function alignLeft(){
    var message = document.getElementById("message");   
    message.style.textAlign= "left";
}

function alignCenter(){
    var message = document.getElementById("message");   
    message.style.textAlign= "center";
}

function alignRight(){
    var message = document.getElementById("message");   
    message.style.textAlign= "right";
}


function alignJustify(){
    var message = document.getElementById("message");   
    message.style.textAlign= "justify";
}

function resetChanges(){
    var message = document.getElementById("message");   
    message.style.fontSize= "16px";
    message.style.fontWeight= "normal";
    message.style.fontStyle= "normal";
    message.style.color= "black";   
    message.style.textDecoration= "none";
}