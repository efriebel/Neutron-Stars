let canvas;
let d;
let imgLichSystem, imgMergerSystem, imgMilkyway, imgPSRJ05406919TN, imgPSRJ17191438DiamondSystem, imgSagittariusA, imgSiriusSystem, imgSolarSystem, imgStephenson2, imgTarantulaNebula;

const controls = {
    view: {x: 0, y: 0, zoom: 1},
    viewPos: {prevX: null, prevY: null, isDragging: false},     //controls for window position focused on mouse
}

function preload() {
    //SVG

    //imgLichSystem = loadSVG('/img/SMP/SMP_lich_system.svg');
    imgMergerSystem = loadSVG('/img/SMP/SMP_merger_system.svg');
    imgMilkyway = loadSVG('/img/SMP/SMP_milkyway.svg');
    imgPSRJ05406919TN = loadSVG('/img/SMP/SMP_PSRJ0540-6919_TN.svg');
    imgPSRJ17191438DiamondSystem = loadSVG('/img/SMP/SMP_PSRJ1719-1438_diamond_system.svg');
    imgSagittariusA = loadSVG('/img/SMP/SMP_sagittariusA.svg');
    imgSiriusSystem = loadSVG('/img/SMP/SMP_sirius_system.svg');
    imgSolarSystem = loadSVG('/img/SMP/SMP_solar_system.svg');
    imgStephenson2 = loadSVG('/img/SMP/SMP_stephenson2.svg');
    imgTarantulaNebula = loadSVG('/img/SMP/SMP_tarantula_nebula.svg');
    //Image
    imgLichSystem = loadImage('/img/SMP/SMP_lich_system.svg');
    /*
    imgMergerSystem = loadImage('/img/SMP/SMP_merger_system.svg');
    imgMilkyway = loadImage('/img/SMP/SMP_milkyway.svg');
    imgPSRJ05406919TN = loadImage('/img/SMP/SMP_PSRJ0540-6919_TN.svg');
    imgPSRJ17191438DiamondSystem = loadImage('/img/SMP/SMP_PSRJ1719-1438_diamond_system.svg');
    imgSagittariusA = loadImage('/img/SMP/SMP_sagittariusA.svg');
    imgSiriusSystem = loadImage('/img/SMP/SMP_sirius_system.svg');
    imgSolarSystem = loadImage('/img/SMP/SMP_solar_system.svg');
    imgStephenson2 = loadImage('/img/SMP/SMP_stephenson2.svg');
    imgTarantulaNebula = loadImage('/img/SMP/SMP_tarantula_nebula.svg');
    */
}

function setup() {  // called from p5
    canvas = createCanvas(360, 203, SVG);   //added for SVG formating
    //canvas.mouseWheel(e => Controls.zoom(controls).worldZoom(e));
}

function mouseWheel(e) {
    Controls.zoom(controls).worldZoom(e);
    if (e.deltaY > 0) {
        d = d + 10;
    }
    else {
         d = d - 10;
    }
  }

function draw() {
    clear();
    background(19, 8, 52);
    translate(controls.view.x, controls.view.y);
    scale(controls.view.zoom);

    //Set image size and position
    image(imgLichSystem, 102, 84, 8, 11);
    image(imgMergerSystem, 313, 155, 6, 5);
    //image(imgMilkyway, );
    image(imgPSRJ05406919TN, 69, 49, 5, 5);
    image(imgPSRJ17191438DiamondSystem, 275, 121, 7, 7);
    image(imgSagittariusA, 153, 81, 54, 35);
    image(imgSiriusSystem, 179, 64, 17, 5);
    image(imgSolarSystem, 222, 141, 15, 6);
    image(imgStephenson2, 141, 125, 4, 4);
    //image(imgTarantulaNebula, );

    if (controls.view.zoom > 1 && controls.view.zoom < 1.5) {
        fill('yellowgreen');
        rect(75 + 25, 75 + 25, 50, 50);
    }       // zoom factor >1 & <1.5 => yellowgreen square is visible
}

window.mousePressed = e => Controls.move(controls).mousePressed(e)
window.mouseDragged = e => Controls.move(controls).mouseDragged(e);
window.mouseReleased = e => Controls.move(controls).mouseReleased(e)
    //add functions for mouse in pressed, dragged & released state

class Controls {
    static move(controls) {
        function mousePressed(e) {      //if mouse is pressed, mouse position is accurate to zoom factor & canvas is "attached" to mouse
            controls.viewPos.isDragging = true;
            controls.viewPos.prevX = e.clientX;
            controls.viewPos.prevY = e.clientY;
        }

        function mouseDragged(e) {      //if mouse is dragged, zoom factor multiplies with mouse position & canvas is "draggable"
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

        function mouseReleased(e) {     //if mouse is released, zoom factor equals stopping point & canvas is "released" from mouse
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
        function worldZoom(e) {     //creates zooming function
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
            if (controls.view.zoom + zoom < 1) {
                controls.view.zoom = 1;         //creates zoom stop if zoom < 1
            } else {
                controls.view.x -= wx * width * zoom;
                controls.view.y -= wy * height * zoom;
                controls.view.zoom += zoom;     //if zoom ≠< 1, zoom >∞ 1
            }
        }

        return {worldZoom}
    }
}
