var lin=document.getElementById("link")
const inst=document.getElementById("insta")
const fac=document.getElementById("face")
const wha=document.getElementById("whats")

var linktext=document.getElementById("linktext")

function linkrun(){
  
  inst.style.backgroundColor="white";
  fac.style.backgroundColor="white";
  wha.style.backgroundColor="white";
  lin.style.backgroundColor="#9933ff";
  
}
function instrun(){
  
  lin.style.backgroundColor="white";
  fac.style.backgroundColor="white";
  wha.style.backgroundColor="white";
  inst.style.backgroundColor="#9933ff";

}
function facrun(){
  
  inst.style.backgroundColor="white";
  lin.style.backgroundColor="white";
  wha.style.backgroundColor="white";
  fac.style.backgroundColor="#9933ff";
  
}
function wharun(){
  inst.style.backgroundColor="white";
  fac.style.backgroundColor="white";
  lin.style.backgroundColor="white";
  wha.style.backgroundColor="#9933ff"
}
function searchit(){
  var a=linktext.value;
}
lin.onclick=linkrun;
inst.onclick=instrun;
fac.onclick=facrun;
wha.onclick=wharun;
document.getElementById("but").onclick=searchit;
