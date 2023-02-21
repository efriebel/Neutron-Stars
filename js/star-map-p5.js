let canvas;
let d;

let imgMilkyway;
let imgEasterEggNebula, imgLichSystemNebula, imgMergerSystemNebula, imgPSRJ05406919TarantulaNebula, imgDiamondSystemNebula, imgSagittariusANebula, imgSiriusSystemNebula, imgSolarSystemNebula, imgStephenson2Nebula;
let imgEasterEgg, imgLichSystem, imgMergerSystem, imgPSRJ05406919TN, imgPSRJ17191438DiamondSystem, imgSagittariusA, imgSiriusSystem, imgSolarSystem, imgStephenson2;
let imgBGElements;
let eClientX;

const zoomFactor = 1;
const controls = {
    view: {x: 0, y: 0, zoom: 1},
    viewPos: {prevX: null, prevY: null, isDragging: false},     //controls for window position focused on mouse
}

function preload() {
    imgSagittariusANebula = loadImage('/img/SMP/SMP_sagittariusA_nebula.svg');
    //loads SVGs
    imgBGElements = loadSVG('/img/SMP/SMP_bg_elements.svg');

    imgMilkyway = loadSVG('/img/SMP/SMP_milkyway.svg');

    imgEasterEggNebula = loadSVG('/img/SMP/SMP_EasterEgg_nebula.svg');
    imgLichSystemNebula = loadSVG('/img/SMP/SMP_lich_system_nebula.svg');
    imgMergerSystemNebula = loadSVG('/img/SMP/SMP_merger_system_nebula.svg');
    imgPSRJ05406919TarantulaNebula = loadSVG('/img/SMP/SMP_tarantula_nebula.svg');
    imgDiamondSystemNebula = loadSVG('/img/SMP/SMP_PSRJ1719-1438_diamond_system_nebula.svg');
    //imgSagittariusANebula = loadSVG('/img/SMP/SMP_sagittariusA_nebula.svg');
    imgSiriusSystemNebula = loadSVG('/img/SMP/SMP_sirius_system_nebula.svg');
    imgSolarSystemNebula = loadSVG('/img/SMP/SMP_solar_system_nebula.svg');
    imgStephenson2Nebula = loadSVG('/img/SMP/SMP_stephenson2_nebula.svg');

    imgEasterEgg = loadSVG('/img/SMP/SMP_EasterEgg.svg');
    imgLichSystem = loadSVG('/img/SMP/SMP_lich_system.svg');
    imgMergerSystem = loadSVG('/img/SMP/SMP_merger_system.svg');
    imgPSRJ05406919TN = loadSVG('/img/SMP/SMP_PSRJ0540-6919_TN.svg');
    imgPSRJ17191438DiamondSystem = loadSVG('/img/SMP/SMP_PSRJ1719-1438_diamond_system.svg');
    imgSagittariusA = loadSVG('/img/SMP/SMP_sagittariusA.svg');
    imgSiriusSystem = loadSVG('/img/SMP/SMP_sirius_system.svg');
    imgSolarSystem = loadSVG('/img/SMP/SMP_solar_system.svg');
    imgStephenson2 = loadSVG('/img/SMP/SMP_stephenson2.svg');
}

function setup() {  // called from p5
    canvas = createCanvas(360, 203, SVG);   //added for SVG formating
    canvas.scale(e => Controls.zoom(controls).worldZoom(e));
}

//mouseWheel function rewritten, which erases the error message in the console
function mouseWheel(e) {
    Controls.zoom(controls).worldZoom(e);

    if (e.deltaY > 0) {
        d = d + 1;
    }
    else {
         d = d - 1;
    }

    //mouse x position on document not Canvas!!
    eClientX = e.clientX;
}


/*
* Rough sketch of function that calculates current mouse position and updates svg position accordingly lol
* */
function updateX(initial, xPosition) {
    if(xPosition) {
        return xPosition
    } else {
        return initial;
    }
}

function draw() {
    background(19, 8, 52);
    translate(controls.view.x, controls.view.y);
    scale(controls.view.zoom);

    //console.debug(controls.view);

    image(imgSagittariusANebula, 20, 20, 100, 100);

    //Set image size and position
    image(imgBGElements, 0, 0, 360, 203);

    // LAYER 3 (max zoom state)
    if (controls.view.zoom > 8.9 && controls.view.zoom < 30) {
        renderImages(imgEasterEgg, 251, 74, 3, 3, controls.view);
        renderImages(imgLichSystem, 102, 84, 8, 11, controls.view);
        renderImages(imgMergerSystem, 313, 155, 6, 5, controls.view);
        renderImages(imgPSRJ05406919TN, 69, 49, 5, 5, controls.view);
        renderImages(imgPSRJ17191438DiamondSystem, 275, 121, 7, 7, controls.view);
        renderImages(imgSagittariusA, 169, 90, 22, 14, controls.view);
        renderImages(imgSiriusSystem, 179, 64, 17, 5, controls.view);
        renderImages(imgSolarSystem, 222, 141, 15, 6, controls.view);
        renderImages(imgStephenson2, 141, 125, 4, 4, controls.view);
    }

    // LAYER 2
    if (controls.view.zoom > 4.4 && controls.view.zoom < 9) {
        renderImages(imgEasterEggNebula, 244, 62, 19, 23, controls.view);
        renderImages(imgLichSystemNebula, 96, 78, 17, 21, controls.view);
        renderImages(imgMergerSystemNebula, 301, 145, 25, 19, controls.view);
        renderImages(imgPSRJ05406919TarantulaNebula, 69, 39, 17, 20, controls.view);
        renderImages(imgDiamondSystemNebula, 271, 109, 20, 22, controls.view);
        //renderImages(imgSagittariusANebula, 159, 79, 42, 33, controls.view);
        renderImages(imgSiriusSystemNebula, 179, 50, 18, 23, controls.view);
        renderImages(imgSolarSystemNebula, 218, 131, 23, 25, controls.view);
        renderImages(imgStephenson2Nebula, 129, 116, 22, 26, controls.view);
    }

    // LAYER 1 (min zoom state)
    if (controls.view.zoom >0.9 && controls.view.zoom < 4.5) {
        renderImages(imgMilkyway, updateX(9, eClientX), 19, 344, 167, controls.view);
    }
}

function renderImages(img, x, y, width, height, view) {
    const calculatePosition = (n, viewN, zoom) => (n + viewN) * (zoom * zoomFactor);
    const calculateSize = (size, zoom) => size * (zoom * zoomFactor);

    image(
        img,
        calculatePosition(x, view.x, view.zoom),
        calculatePosition(y, view.y, view.zoom),
        calculateSize(width, view.zoom),
        calculateSize(height, view.zoom)
    );
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
                controls.viewPos.prevX = pos.x;
                controls.viewPos.prevY = pos.y;
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



            //const calculatePosition = (n, viewN, zoom) => (n + viewN) * (zoom * zoomFactor);
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