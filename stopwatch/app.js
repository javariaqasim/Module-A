 var displayHours= document.getElementById("displayHours")
 var displayMinutes= document.getElementById("displayMinutes")
 var displaySeconds= document.getElementById("displaySeconds")
 var hours=0;
 var minutes=0;
 var seconds=0;
 var startBtn= document.getElementById("startBtn")
 var resetBtn= document.getElementById("resetBtn")
 var pauseBtn= document.getElementById("pauseBtn")
 resetBtn.disabled=true;
 pauseBtn.disabled=true;
var interval;
 function start(){
    resetBtn.disabled=false;
    pauseBtn.disabled=false;  
startBtn.disabled=true;
interval=setInterval(function(){
    seconds++
    if(seconds==60){
        seconds=0;
        minutes++
        
    }
    else if(minutes==59)
    {
        hours++
        minutes=0;
      
    }
    displaySeconds.innerHTML=seconds;
    displayMinutes.innerHTML=minutes;
    displayHours.innerHTML=hours
},1000)

 }


 function pause(){
    clearInterval(interval)
    pauseBtn.disabled=true;
    startBtn.disabled=false;
 }

 function reset()
 {
     clearInterval(interval)
     resetBtn.disabled=true;
     pauseBtn.disabled=true;
     startBtn.disabled=false;
     seconds=0;
     hours=0;
     minutes=0;
     displaySeconds.innerHTML=seconds;
     displayMinutes.innerHTML=minutes;
     displayHours.innerHTML=hours
 }