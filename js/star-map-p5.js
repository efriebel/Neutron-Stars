let canvas;
//controls for window position focused on mouse
const controls = {
    view: {x: 0, y: 0, zoom: 1},
    viewPos: {prevX: null, prevY: null, isDragging: false},
}

let imgStephenson2;
function preload() {
    imgStephenson2 = loadImage('/img/SMP/SMP_stephenson2.svg');
    /*imgStephenson2.size(200, 200);*/
}

function setup() {  // called form p5
    canvas = createCanvas(360, 203, SVG);   //added for SVG formating
    canvas.mouseWheel(e => Controls.zoom(controls).worldZoom(e));
    background('rosybrown');
}

function draw() {
    background('black');
    translate(controls.view.x, controls.view.y);
    scale(controls.view.zoom);

    var r = frameCount % 200 * Math.sqrt(2);    //added for SVG formating

    /*
    * Set image size and position
    * */
    image(imgStephenson2, 141, 125, 4, 4);

    if (controls.view.zoom > 1 && controls.view.zoom < 1.5) {
        fill('yellowgreen');
        rect(75 + 25, 75 + 25, 50, 50);
    }
    // zoom factor >1 & <1.5 => yellowgreen square is visible
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
                controls.viewPos.prevX = pos.x, controls.viewPos.prevY = pos.y
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
            const zoom = 5 * direction * factor;

            const wx = (x - controls.view.x) / (width * controls.view.zoom);
            const wy = (y - controls.view.y) / (height * controls.view.zoom);

            /*
            * Sets zoom stops (how far you can zoom in&out)
            * */


            /*
            if (controls.view.zoom + zoom > 2) {
                controls.view.zoom = 2;
            } else if(controls.view.zoom + zoom < 0.5) {
                controls.view.zoom = 0.5;
            } else {
                controls.view.x -= wx * width * zoom;
                controls.view.y -= wy * height * zoom;
                controls.view.zoom += zoom;
            }
            */
            if (controls.view.zoom + zoom < 0.5) {
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
