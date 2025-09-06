

// Problem One:
const Artist = {
    speak(){
        console.log("I am an artist.");
    }
}

const Painter = {
    artist: new Artist,
    speak(){
        this.artist.speak();
        // I would have just copied the function
        // but I did it this way based off of the phrasing.
    },
    paint(){
        const body = document.getElementsByTagName("body");
        body.setAttribute("background-color", randomColor());
    }
}

// Problem Two:
function blocks(){
    for (let i = 0; i < 20; i++){
        const block = document.createElement("div");
        block.setAttribute("width", '20px');
        block.setAttribute("height", '20px');
        block.setAttribute("background-color", randomColor());
    }
}

// Problem Three:
function inputDisplay(){
    const input = document.createElement("input");
    const button = document.createElement("button");

    input.setAttribute("type", "text");
    input.setAttribute("minlength", '1');
    input.setAttribute("maxlength", '1');
    input.setAttribute("size", '3');
    
    button.setAttribute("value", "Submit");
    button.setAttribute("onClick", outputDisplay(input));
}

function outputDisplay(input){
    const output = document.createElement("h1");
    output.setAttribute("value", input.value);
    input.setAttribute("value", "");
}

// Problem Four:
function buttons(){
    const button = document.createElement("button");
    button.setAttribute("value", randomText());
    button.setAttribute("onClick", refreshButton(button));
}

function refreshButton(button){
    button.remove();
    button()
}

// Helper Functions:
function randomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
    /* Knew the general idea of how to write this and how to use it but I
    didn't remember the exact way to do it in JavaScript so I found it here:
    https://css-tricks.com/snippets/javascript/random-hex-color/ */
}

function randomText(){
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let random = "";
    for (let i = 0; i < 6; i++)
        result += characters.charAt(Math.floor(Math.random() * 26));
    return random;
}

// Group Differences:
/* After talking it seems like we took generally the same approach for each problem
except instead of doing it entirely within the JavaScript file they did it the
normal way, i.e. using an HTML file with CSS and JavaScript within it.
For example, instead of manually setting the attributes for the blocks in problem two
or the buttons in problem three, they created a CSS class.
To be fair, this was my initial thought, but given the phrasing of the instructions
I tried to do everything entirely within the JavaScript, though considering that,
on a second glance, the instructions also mention a ZIP File submission, I imagine
that their approach was the excpected one.
So, rest assured, I understand how I could/would/should have done it the normal way.*/
