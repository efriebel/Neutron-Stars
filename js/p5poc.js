let zoomFactor = 1.0;
let currentPosition = {
    x: 0,
    y: 0
}

const objects = [
    {
        color: 'red',
    },
    {
        color: 'yellow',
    },
    {
        color:'green',
    },
    {
        color:'blue',
    },
    {
        color: 'orange',
    },
    {
        color: 'purple',
    },
    {
        color: 'green',
    },
    {
        color: 'teal',
    },
    {
        color: 'pink',
    },
    {
        color: 'red',
    },
    {
        color: 'yellow',
    },
    {
        color:'green',
    },
    {
        color:'blue',
    },
    {
        color: 'orange',
    },
    {
        color: 'purple',
    },
    {
        color: 'green',
    },
    {
        color: 'teal',
    },
    {
        color: 'pink',
    },
    {
        color:'green',
    },
    {
        color:'blue',
    },
    {
        color: 'orange',
    },
    {
        color: 'purple',
    },
    {
        color: 'green',
    },
    {
        color: 'teal',
    },
    {
        color: 'pink',
    },


]


function setup() { // called form p5
    createCanvas(400, 400);
    background('rosybrown');

    renderObjects();
}

function renderObjects() {
    let posX = 0;
    let posY = 0;

    objects.forEach((object) => {
        fill(object.color);
        rect(posX * 75 + 25, posY * 75 + 25, 50, 50);
        posX++;
        if (posX === 5) {
            posY++;
            posX = 0;
        }
    });
}


function draw() { // called form p5
    let mY = mouseY;
    let mX = mouseX;

    clear();
    background('rosybrown');

    translate(mX, mY);
    scale(zoomFactor);
    translate(-mX, -mY);

    if (mouseIsPressed) {
        calculatePosition(movedX, movedY)
    }

    translate(currentPosition.x, currentPosition.y);
    renderObjects();
}

function calculatePosition(mouseX, mouseY) {
    currentPosition.x +=mouseX;
    currentPosition.y +=mouseY;
}

function mouseWheel(e) { // called form p5
    if (e.deltaY > 0) {
        zoomFactor *= 1.05;
    } else {
        zoomFactor *= 0.95;

    }

    redraw();
}