function checkinternet(){
const img = new Image();
var timestamp=Date.now();
  img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6COcVph5YeFgDsIBDdZk0gQ1xIDybsBzZ8A&usqp=CAU?timestamp=${timestamp}";

  img.onload = function () {
document.getElementById("content").style.display="block";
document.getElementById("internet").style.display="none";
  };

  img.onerror = function () {
    document.getElementById("content").style.display="none";
    document.getElementById("internet").style.display="block";
  };}
checkinternet();

var lin=document.getElementById("link")
const inst=document.getElementById("insta")
const fac=document.getElementById("face")
const wha=document.getElementById("whats")

var linktext=document.getElementById("linktext")

function linkrun(){
  console.log("You clicked link");
  inst.style.backgroundColor="white";
  fac.style.backgroundColor="white";
  wha.style.backgroundColor="white";
  lin.style.backgroundColor="#9933ff";
  document.getElementById("forlink").style.display="block";
}
function instrun(){
  console.log("You clicked Instagram")
  lin.style.backgroundColor="white";
  fac.style.backgroundColor="white";
  wha.style.backgroundColor="white";
  inst.style.backgroundColor="#9933ff";
  document.getElementById("forlink").style.display="none";
}
function facrun(){
  console.log("You clicked Facebook")
  inst.style.backgroundColor="white";
  lin.style.backgroundColor="white";
  wha.style.backgroundColor="white";
  fac.style.backgroundColor="#9933ff";
  document.getElementById("forlink").style.display="none";
}
function wharun(){
  console.log("You clicked WhatsApp")
  inst.style.backgroundColor="white";
  fac.style.backgroundColor="white";
  lin.style.backgroundColor="white";
  wha.style.backgroundColor="#9933ff"
  document.getElementById("forlink").style.display="none";
}
function searchit(){
  var a=linktext.value;
}
lin.onclick=linkrun;
inst.onclick=instrun;
fac.onclick=facrun;
wha.onclick=wharun;
document.getElementById("but").onclick=searchit;