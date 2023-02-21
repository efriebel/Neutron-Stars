let canvas;
//controls for window position focused on mouse
const controls = {
    view: {x: 0, y: 0, zoom: 1},
    viewPos: {prevX: null, prevY: null, isDragging: false},
}

let objects = [
    {
        color: 'red',
    },
    {
        color: 'yellow',
    },
    {
        color: 'green',
    },
    {
        color: 'blue',
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
        color: 'green',
    },
    {
        color: 'blue',
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
        color: 'green',
    },
    {
        color: 'blue',
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

let img;
function preload() {
    img = loadImage('/img/LP/LP_galaxy_final.svg');
    console.log(img);
    //img.size(200, 200);
}

function setup() {  // called form p5
    canvas = createCanvas(400, 400, SVG);
    canvas.mouseWheel(e => Controls.zoom(controls).worldZoom(e));
    background('rosybrown');
    image(img, 0, 0);
    renderObjects();    //create objects/squares
}

function draw() {
    background('black');
    translate(controls.view.x, controls.view.y);
    scale(controls.view.zoom);

    var r = frameCount % 200 * Math.sqrt(2);

    renderObjects();

    image(img, 0, 0);
    if (controls.view.zoom > 1 && controls.view.zoom < 1.5) {
        fill('yellowgreen');
        rect(75 + 25, 75 + 25, 50, 50);
    }

   // renderObjects();

    //show objects/ squares
}

window.mousePressed = e => Controls.move(controls).mousePressed(e)
window.mouseDragged = e => Controls.move(controls).mouseDragged(e);
window.mouseReleased = e => Controls.move(controls).mouseReleased(e)

class Controls {
    static move(controls) {
        function mousePressed(e) {
            controls.viewPos.isDragging = true;
            controls.viewPos.prevX = e.clientX;
            controls.viewPos.prevY = e.clientY;
        }

        function mouseDragged(e) {
            const {prevX, prevY, isDragging} = controls.viewPos;
            if (!isDragging) return;

            const pos = {x: e.clientX, y: e.clientY};
            const dx = pos.x - prevX;
            const dy = pos.y - prevY;

            if (prevX || prevY) {
                controls.view.x += dx;
                controls.view.y += dy;
                controls.viewPos.prevX = pos.x;
                controls.viewPos.prevY = pos.y;
            }
        }

        function mouseReleased(e) {
            controls.viewPos.isDragging = false;
            controls.viewPos.prevX = null;
            controls.viewPos.prevY = null;
        }

        return {
            mousePressed,
            mouseDragged,
            mouseReleased
        }
    }

    static zoom(controls) {
        function worldZoom(e) {
            const {x, y, deltaY} = e;
            const direction = deltaY > 0 ? -1 : 1;
            const factor = 0.05;
            const zoom = 1 * direction * factor;

            const wx = (x - controls.view.x) / (width * controls.view.zoom);
            const wy = (y - controls.view.y) / (height * controls.view.zoom);

            if (controls.view.zoom + zoom > 2) {
                controls.view.zoom = 2;
            } else if(controls.view.zoom + zoom < 0.5) {
                controls.view.zoom = 0.5;
            } else {
                controls.view.x -= wx * width * zoom;
                controls.view.y -= wy * height * zoom;
                controls.view.zoom += zoom;
            }
        }

        return {worldZoom}
    }
}

function renderObjects() {

    let posX = 0;
    let posY = 0;

    rect(24, 76, 20, 20);

    /*objects.forEach((object) => {
        fill(object.color);
        rect(posX * 75 + 25, posY * 75 + 25, 50, 50);
        posX++;
        if (posX === 5) {
            posY++;
            posX = 0;
        }
    });*/
}