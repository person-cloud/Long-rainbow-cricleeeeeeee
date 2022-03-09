function Preload() {
}

function setup() {
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,540,380);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(550, 30, 75);
    fill(0, 255, 0);
    stroke(0, 255, 0);
    circle(550, 80, 75);
    fill(0, 0, 255);
    stroke(0, 0, 255);
    circle(550, 130, 75);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(550, 180, 75);
    fill(0, 255, 0);
    stroke(0, 255, 0);
    circle(550, 230, 75);
    fill(0, 0, 255);
    stroke(0, 0, 255);
    circle(550, 280, 75);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(550, 330, 75);
    fill(0, 255, 0);
    stroke(0, 255, 0);
    circle(550, 380, 75);
    fill(0, 0, 255);
    stroke(0, 0, 255);
    circle(500, 380, 75);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(450, 380, 75);
    fill(0, 255, 0);
    stroke(0, 255, 0);
    circle(400, 380, 75);
    fill(0, 0, 255);
    stroke(0, 0, 255);
    circle(350, 380, 75);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(300, 380, 75);
    fill(0, 255, 0);
    stroke(0, 255, 0);
    circle(250, 380, 75);
    fill(0, 0, 255);
    stroke(0, 0, 255);
    circle(200, 380, 75);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(150, 380, 75);
    fill(0, 255, 0);
    stroke(0, 255, 0);
    circle(100, 380, 75);
    fill(0, 0, 255);
    stroke(0, 0, 255);
    circle(50, 380, 75);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(0, 380, 75);
}

function take_snapshot() {
    save('piiiiiccccctuuurrreeeeeee.png');
}
