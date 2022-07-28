let colorlist =['gold', 'blue', 'green', 'indigo', 'yellow' ,'red' , 'black']

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(266);
}

function draw(){
    noStroke()
    FileList(random(colorlist));
    ellipse(mouseX, mouseY, 25, 30);
}