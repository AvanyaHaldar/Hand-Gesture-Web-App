Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_img' src='" + data_uri + "'>";
   speak()
    });
}

console.log("ml5 version = " + ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zq2452G73/model.json", modelLoaded)

function modelLoaded() {
    console.log("Model is Loaded");
}

prediction = "";

function speak() {
    var synth = window.speechSynthesis;
    var speak_data = "The Prediction Is "+prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}