function setup() {
    canvas = createCanvas(270 , 270);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4IadLGOKf/model.json" , modelLoaded);
}

function modelLoaded() {
    console.log("Modal is loaded!");
}

function draw() {
    image(video , 0 , 0 , 270 , 270);
    classifier.classify(video , gotResult);
}

function gotResult(error,results) {
    if (error) {
        console.log("Error");
        console.error("Error");
        window.alert("Error");
    }

    else {
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}