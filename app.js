
// Getting user input of Timer 
var enetertimer=prompt("Enter your timer in minutes",60);
var minHead = document.getElementById('min')
var btndis = document.getElementById('disabled')
var textfield=document.getElementById('texthere');
var min = 00;


var interval;

function timer(){
minHead.innerHTML=min
if(enetertimer==0){
    
    min= 00;
    
    minHead.innerHTML= min;
    clearInterval(interval)
    btndis.disabled = false
    
}
else if(enetertimer>=0){
    
    enetertimer--
    minHead.innerHTML=enetertimer
    
}    
}

// To Start Timer
function start(){
  interval =  setInterval(timer,1000)
  btndis.disabled = true
  
}

// To Pause Timer
function pause(){
    clearInterval(interval)
    btndis.disabled = false
}
// To Reset timer
function reset(){
    min= 00;
    minHead.innerHTML= min;
    clearInterval(interval)
    btndis.disabled = false

}
