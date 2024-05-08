// explore.js

window.addEventListener('DOMContentLoaded', init);
let voiceMap = new Map();
let selectedVoice = null;
const synth = window.speechSynthesis;

function init() {
  window.speechSynthesis.onvoiceschanged = function() {
    let voices = synth.getVoices();
    for(let i = 0; i < voices.length; i++){
      console.log("yay")
      let voice = voices[i];
      let option = document.createElement("option");
      let optext = document.createTextNode(voice.name);
      option.value = voice.name
      option.appendChild(optext);
      let parent = document.getElementById("voice-select");
      parent.appendChild(option);

      voiceMap.set(voice.name, voice);
    }
  }

  let playButton = document.querySelector("button");
  playButton.addEventListener('click', play);

  let dropdown = document.getElementById("voice-select");
  dropdown.addEventListener('change', drChange);

}

function play(event){
  let textar = document.getElementById("text-to-speak")
  let utterance = new SpeechSynthesisUtterance(textar.value);
  utterance.voice = selectedVoice;
  synth.speak(utterance);
}

function drChange(event){
  let val = event.target.value;
  selectedVoice = voiceMap.get(val);
}