function func1(){
    let x=document.getElementById('subject').value;
    sessionStorage.setItem("subject",x);
    let y=document.getElementById('describe').value;
    sessionStorage.setItem("describe",y);
    let d=document.getElementById('user').value;
    sessionStorage.setItem("user",d);
    let f=document.getElementById('Tech').value;
    sessionStorage.setItem("Tech",f);
    
    document.getElementById('card').style.display="block";
    document.getElementById('card').style.border="2px solid black";
    document.getElementById('card').style.background="gray";
    document.getElementById('card').style.width="400px";
    document.getElementById('card').style.height="300px";
    document.getElementById('su').innerHTML = x;
    document.getElementById('desc').innerHTML = y;
    document.getElementById('us').innerHTML = d;
    document.getElementById('t').innerHTML = f;

    }