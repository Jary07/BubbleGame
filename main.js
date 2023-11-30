var hitNum=0;
var s;
var hScore=0;

function makeBubble(){
var bubbles =""; 
for(i=1;i<=77;i++){
  bubbles +=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
  }
document.querySelector(".bubble-c").innerHTML = bubbles;
}



function timeInterval(){ 
time=30;
let timer = document.querySelector("#timer")

 timer.innerHTML=time
var t = setInterval(function(){
  timer.innerHTML=time
  if (time!=0) {
  time--
  }
  else
  {
    clearInterval(t);
    bubbleContainer = document.querySelector(".bubble-c")
    bubbleContainer.innerHTML = `<div class="gameOver"><br><br><br><h class="gameScore" >GAME OVER<h/> <br>
    <h class="gameScore" > SCORE: ${s}<h/> <br><h>Highest Score: ${hScore}<h/><div/> <button id="btn" >Play Again<button/>`
    var btn=document.getElementById("btn")
    btn.onclick = function(a){
      makeBubble()
      timeInterval()
      newhit()
      raiseScore()
    }
  }
 },1000)
 }
 
 
 
 function newhit(){
let  hit = document.getElementById("hit")
 hit.innerHTML=Math.floor(Math.random()*10)
 hitNum=Number(hit.textContent)
 }
 
 
 
 function raiseScore(){
  s=0
  let score=document.getElementById("score")
  let bubble=document.querySelector(".bubble-c")
 bubble.addEventListener("click",function(dets) {
  var bubNum = Number(dets.target.textContent);
 if (hitNum==bubNum) {
    s+= 5
    makeBubble()
    newhit()
}
if (s>hScore) {
  hScore = s;
}
score.innerHTML=s;
 })
 }
 
 makeBubble();
 timeInterval();
 newhit();
 raiseScore();
 
 