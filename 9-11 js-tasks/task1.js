
function func(){
let x=document.getElementById('name').value;
localStorage.setItem("Name",x);
let y=document.getElementById('age').value;
localStorage.setItem("Age",y);
let z;
if(document.getElementById("female").checked){
    z=document.getElementById("female").value;

    localStorage.setItem("Gender",z);
} else if(document.getElementById("male").checked) {
    z=document.getElementById("male").value;
    localStorage.setItem("Gender",z);
}
let d=document.getElementById('text').value;
localStorage.setItem("describe",d);
let f=document.getElementById('major').value;
localStorage.setItem("major",f);
let e=document.getElementById('university').value;
localStorage.setItem("university",e);
let h=" ";
if (document.getElementById('HTML').checked){
    h += document.getElementById('HTML').value;
}  if (document.getElementById('CSS').checked){
    h += document.getElementById('CSS').value;
}  if (document.getElementById('JAVASCRIPT').checked){
    h += document.getElementById('JAVASCRIPT').value;
    localStorage.setItem("languages",h);
}
document.getElementById('card').style.display="block";
document.getElementById('card').style.border="2px solid black";
document.getElementById('card').style.background="gray";
document.getElementById('card').style.width="400px";
document.getElementById('card').style.height="300px";
document.getElementById('na').innerHTML = x;
document.getElementById('ag').innerHTML = y;
document.getElementById('gen').innerHTML = z;
document.getElementById('des').innerHTML = d;
document.getElementById('maj').innerHTML = f;
document.getElementById('uni').innerHTML = e;
document.getElementById('pro').innerHTML = h;

}
