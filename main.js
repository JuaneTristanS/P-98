var SpeechRecognition = window.webkitSpeechRecognition;
var recog = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recog.start();
}

recog.onresult = function (event) {
    console.log(event);
    var script = event.results[0][0].transcript;
    console.log(script);
    document.getElementById("textbox").innerHTML = script;
}