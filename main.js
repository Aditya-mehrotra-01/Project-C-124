function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,gotResults);
    poseNet.on('poses',gotPoses);
}
function draw() {
    background("white");
}

function gotResults() {
    console.log("poseNet is initalized");
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
    }
}