
function changeFont(){
    let x = document.getElementById("font").value;
    if(x=="Arial"){
        document.getElementById("div1").style.fontFamily="Arial";
    }
    else if(x=="Verdana"){
        document.getElementById("div1").style.fontFamily="Verdana";
    }
    else if(x=="Impact"){
        document.getElementById("div1").style.fontFamily="Impact";
    }
    else{
        document.getElementById("div1").style.fontFamily="Ms comic sans";
    }
}

function changeFontsize(){
    let x = document.getElementById("size").value;
    if(x=="20px"){
        document.getElementById("div1").style.fontSize="20px";
    }
    else if(x=="30px"){
        document.getElementById("div1").style.fontSize="30px";
    }
    else if(x=="10px"){
        document.getElementById("div1").style.fontSize="10px";
    }
    else{
        document.getElementById("div1").style.fontSize="16px";
    }
}


function italic(){
    let checkbox= document.getElementById("italic");
    if(checkbox.checked==true){
        document.getElementById("div1").style.fontStyle="italic";
    }
    else{
        document.getElementById("div1").style.fontStyle="normal";
    }
    
}

function bold(){
    let checkbox= document.getElementById("bold");
    if(checkbox.checked==true){
        document.getElementById("div1").style.fontWeight="bold";
    }
    else{
        document.getElementById("div1").style.fontWeight="normal";
    }
}

function underline(){
    let checkbox= document.getElementById("underline");
    if(checkbox.checked==true){
        document.getElementById("div1").style.textDecoration="underline";
    }
    else{
        document.getElementById("div1").style.textDecoration="none";
    }
}