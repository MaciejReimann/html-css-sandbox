let speech;
function setup() {
  noCanvas();
  let voice = new p5.Speech();
  voice.setLang('en-UK');
  voice.speak("Hi Franek");
  speech =  voice;
}
console.log(speech);
