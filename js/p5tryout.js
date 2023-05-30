const refreshPage = () =>{
    window.location.reload();
}

let d;
let canvas;
let buttonToLayer1;
let buttonFocusEasterEgg, buttonFocusLichSystem, buttonFocusMergerSystem, buttonFocusPSRJ05406919TN, buttonFocusDiamondSystem, buttonFocusSagittariusA, buttonFocusSiriusSystem, buttonFocusSolarSystem, buttonFocusStephenson2;
let wasClicked = false;

let imgMilkyway;
let imgEasterEggNebula, imgLichSystemNebula, imgMergerSystemNebula, imgPSRJ05406919TarantulaNebula, imgDiamondSystemNebula, imgSagittariusANebula, imgSiriusSystemNebula, imgSolarSystemNebula, imgStephenson2Nebula;
let imgEasterEgg, imgLichSystem, imgMergerSystem, imgPSRJ05406919TN, imgPSRJ17191438DiamondSystem, imgSagittariusA, imgSiriusSystem, imgSolarSystem, imgStephenson2;
let imgBGElements;
let eClientX;

let mqls = [ // list of window.matchMedia() queries
    window.matchMedia("(max-width: 767px)"),    //mqls[0]
    window.matchMedia("(max-width: 1439px)"),    //mqls[1]
    window.matchMedia("(max-width: 2559px)"),   //mqls[2]
    window.matchMedia("(min-width: 2560px)")   //mqls[3]
]

const zoomFactor = 1;
const controls = {
    view: {x: 0, y: 0, zoom: 1},
    viewPos: {prevX: null, prevY: null, isDragging: false},     //controls for window position focused on mouse
}

function preload() {
    //loads SVGs
    imgBGElements = loadSVG('/img/SMP/SMP_bg_elements.svg');

        imgMilkyway = loadSVG('/img/SMP/SMP_milkyway.svg');

        imgEasterEggNebula = loadSVG('/img/SMP/SMP_EasterEgg_nebula.svg');
        imgLichSystemNebula = loadSVG('/img/SMP/SMP_lich_system_nebula.svg');
        imgMergerSystemNebula = loadSVG('/img/SMP/SMP_merger_system_nebula.svg');
        imgPSRJ05406919TarantulaNebula = loadSVG('/img/SMP/SMP_tarantula_nebula.svg');
        imgDiamondSystemNebula = loadSVG('/img/SMP/SMP_PSRJ1719-1438_diamond_system_nebula.svg');
        imgSagittariusANebula = loadSVG('/img/SMP/SMP_sagittariusA_nebula.svg');
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
    canvas = createCanvas(360, 203, SVG);

    if (mqls[0].matches){
        resizeCanvas(360, 203, SVG);
    }
    if (mqls[1].matches){
        resizeCanvas(768, 433, SVG);
    }
    if (mqls[2].matches){
        resizeCanvas(1108, 625, SVG);
    }
    if (mqls[3].matches){
        resizeCanvas(1968, 1110, SVG);
    }

    canvas.scale(e => Controls.zoom(controls).worldZoom(e));
    canvas.onmousemove = e => getMousePos(canvas, e);

    buttonToLayer1 = createButton('<<');
    buttonToLayer1.parent('defaultCanvas0');
    buttonToLayer1.position(0, 0);
    buttonToLayer1.mousePressed(goToLayer1, refreshPage);
    buttonToLayer1.style("font-family", "Comic Sans MS");
    buttonToLayer1.style("font-size", "16px");
    const clsButtonToLayer1 = "button-to-layer1";
    buttonToLayer1.class(clsButtonToLayer1);

    const clsFocus = "focus";
    const clsFocusEasterEgg = "focus-easteregg";

    buttonFocusEasterEgg = createButton('');
    buttonFocusEasterEgg.parent('defaultCanvas0');
    buttonFocusEasterEgg.position(246, 72);
    buttonFocusEasterEgg.size(10, 10);

    if (mqls[0].matches){
        buttonFocusEasterEgg.position(246, 72);
        buttonFocusEasterEgg.size(10, 10);
    }
    if (mqls[1].matches){
        buttonFocusEasterEgg.position(524, 154);
        buttonFocusEasterEgg.size(20, 20);
    }
    if (mqls[2].matches){
        buttonFocusEasterEgg.position(756, 222);
        buttonFocusEasterEgg.size(30, 30);
    }
    if (mqls[3].matches){
        buttonFocusEasterEgg.position(1344, 134);
        buttonFocusEasterEgg.size(52, 52);
    }

    buttonFocusEasterEgg.class(clsFocusEasterEgg);
    buttonFocusEasterEgg.id('easterEggLayer1');

    buttonFocusLichSystem = createButton('');
    buttonFocusLichSystem.parent('defaultCanvas0');
    buttonFocusLichSystem.position(103, 85);
    buttonFocusLichSystem.size(10, 10);

    if (mqls[0].matches){
        buttonFocusLichSystem.position(103, 85);
        buttonFocusLichSystem.size(10, 10);
    }
    if (mqls[1].matches){
        buttonFocusLichSystem.position(220, 181);
        buttonFocusLichSystem.size(20, 20);
    }
    if (mqls[2].matches){
        buttonFocusLichSystem.position(317, 262);
        buttonFocusLichSystem.size(30, 30);
    }
    if (mqls[3].matches){
        buttonFocusLichSystem.position(563, 465);
        buttonFocusLichSystem.size(52, 52);
    }

    buttonFocusLichSystem.class(clsFocus);
    buttonFocusLichSystem.id('lichLayer1');

    buttonFocusMergerSystem = createButton('');
    buttonFocusMergerSystem.parent('defaultCanvas0');
    buttonFocusMergerSystem.position(309, 152);
    buttonFocusMergerSystem.size(10, 10);

    if (mqls[0].matches){
        buttonFocusMergerSystem.position(309, 152);
        buttonFocusMergerSystem.size(10, 10);
    }
    if (mqls[1].matches){
        buttonFocusMergerSystem.position(659, 324);
        buttonFocusMergerSystem.size(20, 20);
    }
    if (mqls[2].matches){
        buttonFocusMergerSystem.position(951, 468);
        buttonFocusMergerSystem.size(30, 30);
    }
    if (mqls[3].matches){
        buttonFocusMergerSystem.position(1689, 831);
        buttonFocusMergerSystem.size(52, 52);
    }

    buttonFocusMergerSystem.class(clsFocus);
    buttonFocusMergerSystem.id('mergerLayer1');

    buttonFocusPSRJ05406919TN = createButton('');
    buttonFocusPSRJ05406919TN.parent('defaultCanvas0');
    buttonFocusPSRJ05406919TN.position(71, 46);
    buttonFocusPSRJ05406919TN.size(10, 10);

    if (mqls[0].matches){
        buttonFocusPSRJ05406919TN.position(71, 46);
        buttonFocusPSRJ05406919TN.size(10, 10);
    }
    if (mqls[1].matches){
        buttonFocusPSRJ05406919TN.position(151, 98);
        buttonFocusPSRJ05406919TN.size(20, 20);
    }
    if (mqls[2].matches){
        buttonFocusPSRJ05406919TN.position(218, 142);
        buttonFocusPSRJ05406919TN.size(30, 30);
    }
    if (mqls[3].matches){
        buttonFocusPSRJ05406919TN.position(388, 251);
        buttonFocusPSRJ05406919TN.size(52, 52);
    }

    buttonFocusPSRJ05406919TN.class(clsFocus);
    buttonFocusPSRJ05406919TN.id('tarantulaLayer1');

    buttonFocusDiamondSystem = createButton('');
    buttonFocusDiamondSystem.parent('defaultCanvas0');
    buttonFocusDiamondSystem.position(274, 120);
    buttonFocusDiamondSystem.size(10, 10);

    if (mqls[0].matches){
        buttonFocusDiamondSystem.position(274, 120);
        buttonFocusDiamondSystem.size(10, 10);
    }
    if (mqls[1].matches){
        buttonFocusDiamondSystem.position(585, 256);
        buttonFocusDiamondSystem.size(20, 20);
    }
    if (mqls[2].matches){
        buttonFocusDiamondSystem.position(843, 369);
        buttonFocusDiamondSystem.size(30, 30);
    }
    if (mqls[3].matches){
        buttonFocusDiamondSystem.position(1498, 656);
        buttonFocusDiamondSystem.size(52, 52);
    }

    buttonFocusDiamondSystem.class(clsFocus);
    buttonFocusDiamondSystem.id('diamondLayer1');

    buttonFocusSagittariusA = createButton('');
    buttonFocusSagittariusA.parent('defaultCanvas0');
    buttonFocusSagittariusA.position(176, 91);
    buttonFocusSagittariusA.size(10, 10);

    if (mqls[0].matches){
        buttonFocusSagittariusA.position(176, 91);
        buttonFocusSagittariusA.size(10, 10);
    }
    if (mqls[1].matches){
        buttonFocusSagittariusA.position(375, 194);
        buttonFocusSagittariusA.size(20, 20);
    }
    if (mqls[2].matches){
        buttonFocusSagittariusA.position(542, 280);
        buttonFocusSagittariusA.size(30, 30);
    }
    if (mqls[3].matches){
        buttonFocusSagittariusA.position(962, 498);
        buttonFocusSagittariusA.size(52, 52);
    }

    buttonFocusSagittariusA.class(clsFocus);
    buttonFocusSagittariusA.id('sagittariusALayer1');

    buttonFocusSiriusSystem = createButton('');
    buttonFocusSiriusSystem.parent('defaultCanvas0');
    buttonFocusSiriusSystem.position(180, 60);
    buttonFocusSiriusSystem.size(10, 10);

    if (mqls[0].matches){
        buttonFocusSiriusSystem.position(180, 60);
        buttonFocusSiriusSystem.size(10, 10);
    }
    if (mqls[1].matches){
        buttonFocusSiriusSystem.position(384, 128);
        buttonFocusSiriusSystem.size(20, 20);
    }
    if (mqls[2].matches){
        buttonFocusSiriusSystem.position(554, 185);
        buttonFocusSiriusSystem.size(30, 30);
    }
    if (mqls[3].matches){
        buttonFocusSiriusSystem.position(984, 328);
        buttonFocusSiriusSystem.size(52, 52);
    }

    buttonFocusSiriusSystem.class(clsFocus);
    buttonFocusSiriusSystem.id('siriusLayer1');

    buttonFocusSolarSystem = createButton('');
    buttonFocusSolarSystem.parent('defaultCanvas0');
    buttonFocusSolarSystem.position(224, 139);
    buttonFocusSolarSystem.size(10, 10);

    if (mqls[0].matches){
        buttonFocusSolarSystem.position(224, 139);
        buttonFocusSolarSystem.size(10, 10);
    }
    if (mqls[1].matches){
        buttonFocusSolarSystem.position(478, 297);
        buttonFocusSolarSystem.size(20, 20);
    }
    if (mqls[2].matches){
        buttonFocusSolarSystem.position(689, 428);
        buttonFocusSolarSystem.size(30, 30);
    }
    if (mqls[3].matches){
        buttonFocusSolarSystem.position(1225, 760);
        buttonFocusSolarSystem.size(52, 52);
    }

    buttonFocusSolarSystem.class(clsFocus);
    buttonFocusSolarSystem.id('solarLayer1');

    buttonFocusStephenson2 = createButton('');
    buttonFocusStephenson2.parent('defaultCanvas0');
    buttonFocusStephenson2.position(135, 122);
    buttonFocusStephenson2.size(10, 10);

    if (mqls[0].matches){
        buttonFocusStephenson2.position(135, 122);
        buttonFocusStephenson2.size(10, 10);
    }
    if (mqls[1].matches){
        buttonFocusStephenson2.position(288, 260);
        buttonFocusStephenson2.size(20, 20);
    }
    if (mqls[2].matches){
        buttonFocusStephenson2.position(416, 375);
        buttonFocusStephenson2.size(30, 30);
    }
    if (mqls[3].matches){
        buttonFocusStephenson2.position(738, 667);
        buttonFocusStephenson2.size(52, 52);
    }

    buttonFocusStephenson2.class(clsFocus);
    buttonFocusStephenson2.id('stephenson2Layer1');

    buttonToLayer1.hide();

    imgEasterEggNebula.hide();
    imgEasterEgg.hide();
    imgLichSystemNebula.hide();
    imgLichSystem.hide();
    imgMergerSystemNebula.hide();
    imgMergerSystem.hide();
    imgPSRJ05406919TarantulaNebula.hide();
    imgPSRJ05406919TN.hide();
    imgDiamondSystemNebula.hide();
    imgPSRJ17191438DiamondSystem.hide();
    imgSagittariusA.hide();
    imgSagittariusANebula.hide();
    imgSiriusSystemNebula.hide();
    imgSiriusSystem.hide();
    imgSolarSystemNebula.hide();
    imgSolarSystem.hide();
    imgStephenson2Nebula.hide();
    imgStephenson2.hide();
}

function goToLayer1(){
        wasClicked = false;
        controls.view.zoom = 1;
        imgMilkyway.position (9, 19);
        console.log(imgMilkyway.position, 'scam')
        buttonToLayer1.hide();

        buttonFocusEasterEgg.show();
        buttonFocusLichSystem.show();
        buttonFocusMergerSystem.show();
        buttonFocusPSRJ05406919TN.show();
        buttonFocusDiamondSystem.show();
        buttonFocusSagittariusA.show();
        buttonFocusSiriusSystem.show();
        buttonFocusSolarSystem.show();
        buttonFocusStephenson2.show();

        imgMilkyway.show();
        imgEasterEggNebula.hide();
        imgEasterEgg.hide();
        imgLichSystemNebula.hide();
        imgLichSystem.hide();
        imgMergerSystemNebula.hide();
        imgMergerSystem.hide();
        imgPSRJ05406919TarantulaNebula.hide();
        imgPSRJ05406919TN.hide();
        imgDiamondSystemNebula.hide();
        imgPSRJ17191438DiamondSystem.hide();
        imgSagittariusA.hide();
        imgSagittariusANebula.hide();
        imgSiriusSystemNebula.hide();
        imgSiriusSystem.hide();
        imgSolarSystemNebula.hide();
        imgSolarSystem.hide();
        imgStephenson2Nebula.hide();
        imgStephenson2.hide();
}
function mouseWheel(e) {
    Controls.zoom(controls).worldZoom(e);
    if (e.deltaY > 0) {
        d = d + 1;
    }
    else {
        d = d - 1;
    }
    eClientX = e.clientX;   //mouse x position on document not Canvas!!
    //mouseWheel function rewritten, which erases the error message in the console
    /*
    * Rough sketch of function that calculates current mouse position and updates svg position accordingly lol
    * */
}
function updateX(initial, xPosition) {
    if(xPosition) {
        return xPosition
    } else {
        return initial;
    }
}

function getMousePos(canvas, e) {
    const rect = canvas.canvas.getBoundingClientRect();
    let x = (e.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
    let y = (e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    console.log(x, y);
    return {
        x: (e.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}

function draw() {
    background(19, 8, 52);
    translate(controls.view.x, controls.view.y);
    scale(controls.view.zoom);
    image(imgBGElements, 0, 0, 360, 203);

    if (mqls[0].matches){
        image(imgBGElements, 0, 0, 360, 203);
    }
    else if (mqls[1].matches){
        image(imgBGElements, 0, 0, 768, 433);
    }
    else if (mqls[2].matches){
        image(imgBGElements, 0, 0, 1108, 625);
    }
    else if (mqls[3].matches){
        image(imgBGElements, 0, 0, 1968, 1110);
    }

    buttonFocusEasterEgg.hide();
    buttonFocusLichSystem.hide();
    buttonFocusMergerSystem.hide();
    buttonFocusPSRJ05406919TN.hide();
    buttonFocusDiamondSystem.hide();
    buttonFocusSagittariusA.hide();
    buttonFocusSiriusSystem.hide();
    buttonFocusSolarSystem.hide();
    buttonFocusStephenson2.hide();

    if (controls.view.zoom === 1) {
        buttonFocusEasterEgg.show();
        buttonFocusLichSystem.show();
        buttonFocusMergerSystem.show();
        buttonFocusPSRJ05406919TN.show();
        buttonFocusDiamondSystem.show();
        buttonFocusSagittariusA.show();
        buttonFocusSiriusSystem.show();
        buttonFocusSolarSystem.show();
        buttonFocusStephenson2.show();
        renderImages(imgMilkyway, 9, 19, 344, 167, controls.view);

        if (mqls[0].matches) {
            renderImages(imgMilkyway, 9, 19, 344, 167, controls.view);
        }
        else if (mqls[1].matches) {
            renderImages(imgMilkyway, 41, 40, 686, 356, controls.view);
        }
        else if (mqls[2].matches) {
            renderImages(imgMilkyway, 60, 58, 988, 514, controls.view);
        }
        else if (mqls[3].matches) {
            renderImages(imgMilkyway, 106, 103, 1756, 912, controls.view);
        }

    }
    if (wasClicked === true){
        if (controls.view.zoom > 2.4 && controls.view.zoom < 15.1){

            if (mqls[0].matches){
                renderImages(imgEasterEgg, 166, 103, 13, 16, controls.view);
            }
            else if (mqls[1].matches){
                renderImages(imgEasterEgg, 355, 220, 28, 35, controls.view);
            }
            else if (mqls[2].matches){
                renderImages(imgEasterEgg, 512, 317, 41, 51, controls.view);
            }
            else if (mqls[3].matches){
                renderImages(imgEasterEgg, 910, 563, 73, 90, controls.view);
            }
            if (mqls[0].matches){
                renderImages(imgLichSystem, 168, 77, 44, 60, controls.view);
            }
            else if (mqls[1].matches){
            }
            else if (mqls[2].matches){
            }
            else if (mqls[3].matches){
            }
            if (mqls[0].matches){
                renderImages(imgMergerSystem, 177, 103, 35, 30, controls.view);
            }
            else if (mqls[1].matches){
            }
            else if (mqls[2].matches){
            }
            else if (mqls[3].matches){
            }
            if (mqls[0].matches){
                renderImages(imgPSRJ05406919TN, 130, 101, 29, 29, controls.view);
            }
            else if (mqls[1].matches){
            }
            else if (mqls[2].matches){
            }
            else if (mqls[3].matches){
            }
            if (mqls[0].matches){
                renderImages(imgPSRJ17191438DiamondSystem, 149, 107, 36, 37, controls.view);
            }
            else if (mqls[1].matches){
            }
            else if (mqls[2].matches){
            }
            else if (mqls[3].matches){
            }
            if (mqls[0].matches){
                renderImages(imgSagittariusA, 217, 82, 75, 49, controls.view);
            }
            else if (mqls[1].matches){
            }
            else if (mqls[2].matches){
            }
            else if (mqls[3].matches){
            }
            if (mqls[0].matches){
                renderImages(imgSiriusSystem, 134, 115, 86, 24, controls.view);
            }
            else if (mqls[1].matches){
            }
            else if (mqls[2].matches){
            }
            else if (mqls[3].matches){
            }
            if (mqls[0].matches){
                renderImages(imgSolarSystem, 146, 91, 70, 30, controls.view);
            }
            else if (mqls[1].matches){
            }
            else if (mqls[2].matches){
            }
            else if (mqls[3].matches){
            }
            if (mqls[0].matches){
                renderImages(imgStephenson2, 185, 84, 18, 18, controls.view);
            }
            else if (mqls[1].matches){
            }
            else if (mqls[2].matches){
            }
            else if (mqls[3].matches){
            }

            renderImages(imgEasterEgg, 166, 103, 13, 16, controls.view);
            renderImages(imgLichSystem, 168, 77, 44, 60, controls.view);
            renderImages(imgMergerSystem, 177, 103, 35, 30, controls.view);
            renderImages(imgPSRJ05406919TN, 130, 101, 29, 29, controls.view);
            renderImages(imgPSRJ17191438DiamondSystem, 149, 107, 36, 37, controls.view);
            renderImages(imgSagittariusA, 217, 82, 75, 49, controls.view);
            renderImages(imgSiriusSystem, 134, 115, 86, 24, controls.view);
            renderImages(imgSolarSystem, 146, 91, 70, 30, controls.view);
            renderImages(imgStephenson2, 185, 84, 18, 18, controls.view);
        }
        if (controls.view.zoom > 0.9 && controls.view.zoom < 4){

            if (mqls[0].matches){
                renderImages(imgEasterEggNebula, 132, 44, 95, 115, controls.view);
            }
            else if (mqls[1].matches){
                renderImages(imgEasterEggNebula, 282, 94, 203, 245, controls.view);
            }
            else if (mqls[2].matches){
                renderImages(imgEasterEggNebula, 406, 135, 293, 354, controls.view);
            }
            else if (mqls[3].matches){
                renderImages(imgEasterEggNebula, 722, 241, 520, 629, controls.view);
            }
            if (mqls[0].matches){
                renderImages(imgLichSystemNebula, 135, 44, 90, 115, controls.view);
            }
            else if (mqls[1].matches){
                renderImages(imgLichSystemNebula, 288, 94, 192, 245, controls.view);
            }
            else if (mqls[2].matches){
                renderImages(imgLichSystemNebula, 416, 135, 277, 354, controls.view);
            }
            else if (mqls[3].matches){
                renderImages(imgLichSystemNebula, 738, 241, 493, 629, controls.view);
            }
            if (mqls[0].matches) {
                renderImages(imgMergerSystemNebula, 106, 44, 148, 115, controls.view);
            }
            else if (mqls[1].matches){
                renderImages(imgMergerSystemNebula, 226, 94, 316, 245, controls.view);
            }
            else if (mqls[2].matches){
                renderImages(imgMergerSystemNebula, 326, 135, 456, 354, controls.view);
            }
            else if (mqls[3].matches){
                renderImages(imgMergerSystemNebula, 579, 241, 810, 629, controls.view);
            }
            if (mqls[0].matches){
                renderImages(imgPSRJ05406919TarantulaNebula, 130, 44, 100, 115, controls.view);
            }
            else if (mqls[1].matches){
                renderImages(imgPSRJ05406919TarantulaNebula, 277, 94, 214, 245, controls.view);
            }
            else if (mqls[2].matches){
                renderImages(imgPSRJ05406919TarantulaNebula, 400, 135, 308, 354, controls.view);
            }
            else if (mqls[3].matches){
                renderImages(imgPSRJ05406919TarantulaNebula, 710, 241, 547, 629, controls.view);
            }
            if (mqls[0].matches){
                renderImages(imgDiamondSystemNebula, 128, 44, 104, 115, controls.view);
            }
            else if (mqls[1].matches){
                renderImages(imgDiamondSystemNebula, 273, 94, 222, 245, controls.view);
            }
            else if (mqls[2].matches){
                renderImages(imgDiamondSystemNebula, 394, 135, 321, 354, controls.view);
            }
            else if (mqls[3].matches){
                renderImages(imgDiamondSystemNebula, 700, 241, 570, 629, controls.view);
            }
            if (mqls[0].matches){
                renderImages(imgSagittariusANebula, 107, 44, 147, 115, controls.view);
            }
            else if (mqls[1].matches){
                renderImages(imgSagittariusANebula, 228, 94, 313, 245, controls.view);
            }
            else if (mqls[2].matches){
                renderImages(imgSagittariusANebula, 329, 135, 452, 354, controls.view);
            }
            else if (mqls[3].matches){
                renderImages(imgSagittariusANebula, 585, 241, 803, 629, controls.view);
            }
            if (mqls[0].matches){
                renderImages(imgSiriusSystemNebula, 134, 44, 92, 115, controls.view);
            }
            else if (mqls[1].matches){
                renderImages(imgSiriusSystemNebula, 286, 94, 197, 245, controls.view);
            }
            else if (mqls[2].matches){
                renderImages(imgSiriusSystemNebula, 412, 135, 284, 354, controls.view);
            }
            else if (mqls[3].matches){
                renderImages(imgSiriusSystemNebula, 733, 241, 504, 629, controls.view);
            }
            if (mqls[0].matches){
                renderImages(imgSolarSystemNebula, 127, 44, 105, 115, controls.view);
            }
            else if (mqls[1].matches){
                renderImages(imgSolarSystemNebula, 271, 94, 224, 245, controls.view);
            }
            else if (mqls[2].matches){
                renderImages(imgSolarSystemNebula, 391, 135, 323, 354, controls.view);
            }
            else if (mqls[3].matches){
                renderImages(imgSolarSystemNebula, 694, 241, 574, 629, controls.view);
            }
            if (mqls[0].matches){
                renderImages(imgStephenson2Nebula, 131, 44, 97, 115, controls.view);
            }
            else if (mqls[1].matches){
                renderImages(imgStephenson2Nebula, 279, 94, 208, 245, controls.view);
            }
            else if (mqls[2].matches){
                renderImages(imgStephenson2Nebula, 403, 135, 300, 354, controls.view);
            }
            else if (mqls[3].matches){
                renderImages(imgStephenson2Nebula, 716, 241, 532, 629, controls.view);
            }

            renderImages(imgEasterEggNebula, 132, 44, 95, 115, controls.view);
            renderImages(imgLichSystemNebula, 135, 44, 90, 115, controls.view);
            renderImages(imgMergerSystemNebula, 106, 44, 148, 115, controls.view);
            renderImages(imgPSRJ05406919TarantulaNebula, 130, 44, 100, 115, controls.view);
            renderImages(imgDiamondSystemNebula, 128, 44, 104, 115, controls.view);
            renderImages(imgSagittariusANebula, 107, 44, 147, 115, controls.view);
            renderImages(imgSiriusSystemNebula, 134, 44, 92, 115, controls.view);
            renderImages(imgSolarSystemNebula, 127, 44, 105, 115, controls.view);
            renderImages(imgStephenson2Nebula, 131, 44, 97, 115, controls.view);
        }
        imgMilkyway.hide();
        buttonFocusEasterEgg.hide();
        buttonFocusLichSystem.hide();
        buttonFocusMergerSystem.hide();
        buttonFocusPSRJ05406919TN.hide();
        buttonFocusDiamondSystem.hide();
        buttonFocusSagittariusA.hide();
        buttonFocusSiriusSystem.hide();
        buttonFocusSolarSystem.hide();
        buttonFocusStephenson2.hide();
    }
}

function mouseClicked(event){

    //const number = parseInt(event.target.id.match(/\d+$/)) + 1;
    //const nextLayer = event.target.id.replace(/\d+/, number.toString());
    /*let array = [imgEasterEggNebula];
        array.forEach(element => {

            if(element.elt.id !== nextLayer) {
                return;
            }
            element.show();
        });*/

    if (event.target.id === buttonFocusEasterEgg.elt.id && buttonFocusEasterEgg.mouseReleased) {
        wasClicked = true;
        buttonToLayer1.show();
        imgEasterEggNebula.show();
        imgEasterEgg.show();
    }
    else if (event.target.id === buttonFocusLichSystem.elt.id && buttonFocusLichSystem.mouseReleased) {
        wasClicked = true;
        buttonToLayer1.show();
        imgLichSystemNebula.show();
        imgLichSystem.show();
    }
    else if (event.target.id === buttonFocusMergerSystem.elt.id && buttonFocusMergerSystem.mouseReleased) {
        wasClicked = true;
        buttonToLayer1.show();
        imgMergerSystemNebula.show();
        imgMergerSystem.show();
    }
    else if (event.target.id === buttonFocusPSRJ05406919TN.elt.id && buttonFocusPSRJ05406919TN.mouseReleased) {
        wasClicked = true;
        buttonToLayer1.show();
        imgPSRJ05406919TarantulaNebula.show();
        imgPSRJ05406919TN.show();
    }
    else if (event.target.id === buttonFocusDiamondSystem.elt.id && buttonFocusDiamondSystem.mouseReleased) {
        wasClicked = true;
        buttonToLayer1.show();
        imgDiamondSystemNebula.show();
        imgPSRJ17191438DiamondSystem.show();
    }
    else if (event.target.id === buttonFocusSagittariusA.elt.id && buttonFocusSagittariusA.mouseReleased) {
        wasClicked = true;
        buttonToLayer1.show();
        imgSagittariusA.show();
        imgSagittariusANebula.show();
    }
    else if (event.target.id === buttonFocusSiriusSystem.elt.id && buttonFocusSiriusSystem.mouseReleased) {
        wasClicked = true;
        buttonToLayer1.show();
        imgSiriusSystemNebula.show();
        imgSiriusSystem.show();
    }
    else if (event.target.id === buttonFocusSolarSystem.elt.id && buttonFocusSolarSystem.mouseReleased) {
        wasClicked = true;
        buttonToLayer1.show();
        imgSolarSystemNebula.show();
        imgSolarSystem.show();
    }
    else if (event.target.id === buttonFocusStephenson2.elt.id && buttonFocusStephenson2.mouseReleased) {
        wasClicked = true;
        buttonToLayer1.show();
        imgStephenson2Nebula.show();
        imgStephenson2.show();
    }
    else{
        wasClicked = false;
    }
}

/*
this function controls the zooming of the svgs, as they are separated from the canvas:
    with each zoomFactor the svgs calculate accordingly a new size and position
*/
function renderImages(img, x, y, width, height, view) {
    //const calculatePosition = (n, viewN, zoom) => (n + viewN) * (zoom * zoomFactor);
    const calculatePosition = (n, viewN, zoom) => (n + viewN) + (zoom * zoomFactor);
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
            if (controls.view.zoom > 1 && controls.view.zoom < 15.1) {   //if zoomFactor equals 1 mouseDragged cannot run
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
            const zoom = 2 * direction * factor;
            //const calculatePosition = (n, viewN, zoom) => (n + viewN) * (zoom * zoomFactor);
            const wx = (x - controls.view.x) / (width * controls.view.zoom);
            const wy = (y - controls.view.y) / (height * controls.view.zoom);
            /*
            * Sets zoom stops (how far you can zoom in&out)
            * */
            if (controls.view.zoom + zoom < 1.1) {
                controls.view.zoom = 1.1;         //creates zoom stop if zoom < 1 it equals to zoomFactor 1
            } else {
                controls.view.x -= wx * width * zoom;
                controls.view.y -= wy * height * zoom;
                controls.view.zoom += zoom;     //if zoom ≠< 1, zoom >∞ 1
            }

            if (controls.view.zoom + zoom > 15) {
                controls.view.zoom = 15;         //creates zoom stop if zoom < 1
            } else {
                controls.view.x -= wx * width * zoom;
                controls.view.y -= wy * height * zoom;
                controls.view.zoom += zoom;     //if zoom ≠< 1, zoom >∞ 1
            }
            console.log(controls.view.zoom);
        }
        return {worldZoom}
    }
}
//have user zoom to zoomFactor2.5 THEN enable layer3 THEN have layer 2 fade out at zoomFactor 3.5
/*
canvas.mouseOver(Controls);
canvas.mouseOut();
*/




















