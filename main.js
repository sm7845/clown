var noseX = 0;
var noseY = 0;

function preload() {

}

function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    //activa la funció gotPoses
    poseNet.on('pose', gotPoses);
}

function take_snapshot() {
    save('clown.png');
}

function modelLoaded() { console.log('PoseNet está inicializado'); }

function gotPoses() {
    //mientras results.length = largo cadena sea mayor a cero
    if (results.length > 0) {
        console.log(results);
        //obtiene los resultados de la ubicación de la nariz
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nariz x = " + noseX);
         console.log("nariz y = " + noseY);
    }
    }

    function draw() {
        image(video, 0, 0, 500, 400);
        fill(455, 0, 0);
        stroke(455, 0, 0);
        circle(noseX, noseY, 20);
    }