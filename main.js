var x = 0;
var y = 0;
var draw_circle = "";
var draw_rect = "";
var what_i_said = window.webkitSpeechRecognition;
var recog = new what_i_said();

function start() {
    document.getElementById("status").innerHTML = "I am listening, please speak";
    recog.start();
}

recog.onresult = function(event) {
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "the word you have said has been recognised as - " + content;
    if (content == "circle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "started drawing circle";
        draw_circle = "set";
    }
    if (content == "rectangle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "started drawing rectangle";
        draw_rect = "set";
    }
}

function setup() {
    var canvas = createCanvas(900, 600);
}

function draw() {
    if (draw_circle == "set") {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "circle is drawn";
        draw_circle = "";
    }
    if (draw_rect == "set") {
        length = Math.floor(Math.random() * 55);
        width = Math.floor(Math.random() * 25);
        rect(x, y, length, width);
        document.getElementById("status").innerHTML = "rectangle is drawn";
        draw_rect = "";
    }
}