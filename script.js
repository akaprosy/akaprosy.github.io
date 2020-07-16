/*Father and Son*/
var images = [
    "fatherandson.jpg",
    "graduation.jpg",
    "cuttingwood.jpg"
];

var num = 0;

function next() {
    var slider =
    document.getElementById("fatherandson");
    num++;
    if(num>=images.length) {
        num = 0;        
    }
    slider.src = images[num];
}

function prev() {
    var slider = 
    document.getElementById("fatherandson");
    num--;
    if(num <0) {
        num = images.length-1;
    }
    slider.src = images[num];
}
/*Wife*/
var images = [
    "thailand.jpg",
    "cooking.jpg",
    "love.jpg"
];

var num = 0;

function next2() {
    var slider =
    document.getElementById("wife");
    num++;
    if(num>=images.length) {
        num = 0;        
    }
    slider.src = images[num];
}

function prev2() {
    var slider = 
    document.getElementById("wife");
    num--;
    if(num <0) {
        num = images.length-1;
    }
    slider.src = images[num];
}

