// expose.js

window.addEventListener('DOMContentLoaded', init);

let horn = "none";

function init() {
  let dropdown = document.getElementById("horn-select");
  dropdown.addEventListener('change', drChange); 
  let slider = document.querySelector("div#volume-controls input");
  slider.addEventListener('input', sliderChange);
  let playButton = document.querySelector("button");
  playButton.addEventListener('click', play);
  sliderChange(50);
}

function drChange(event){
  let val = event.target.value;
  horn = val;
  let img = document.querySelector("img");
  img.src = "assets/images/" + val + ".svg";
  let aud = document.querySelector("audio");
  aud.src = "assets/audio/" + val + ".mp3";
}

function sliderChange(event){
  let val;
  if(typeof event == "number"){
    val = event;
  }
  else{
    val = event.target.value;
  }
  let volImg = document.querySelector("div#volume-controls img");
  let aud = document.querySelector("audio");
  aud.volume = val/100.0;
  if(val == 0){
    volImg.src = "assets/icons/volume-level-0.svg";
  }
  else if(val < 33){
    volImg.src = "assets/icons/volume-level-1.svg"
  }
  else if(val < 67){
    volImg.src = "assets/icons/volume-level-2.svg"
  }
  else{
    volImg.src = "assets/icons/volume-level-3.svg"
  }
}

function play(event){
  let aud = document.querySelector("audio");
  aud.play();
  if(horn=="party-horn"){
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      confettiRadius: 6,
    })
  }
}
