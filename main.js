// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function (key) {
    notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
const keyPlay = function (event) {
    event.target.style.backgroundColor = "blue";
}; /*the event.target will return the element
where the event occured in this case the keys are the element where the 
event occured because once they are pressed down it will trigger the event .
 so in the keyPlay function to change the color of the keys we will use event.target 
and it will target the key element then .style to access the background color property 
to change the key color.*/


/* Below Line 27 in the anonymous function below we are targeting a event 
that will change  the the background color for the note and the key 
back to its default color once the event is triggered which is the
"onmouseup" event once the  button is released.  We created the 
 keylist function and using note as the parameter and passing the callback
function keyPlay to be run in the body of the function so that once the mouse is 
pressed down on the note ot key the color will change to blue  and once the 
mouse is released the second block of code
 will be executed the keyReturn callback will run which 
will turn the note or key back to its original color*/

const keyReturn = function (event) {
    event.target.style.backgroundColor = "";
}

const keysList = function (note) {
    note.onmousedown = function (event) {
        keyPlay(event);
    }
    note.onmouseup = function (event) {
        keyReturn(event);
    }
};

// Write a named function with event handler properties
notes.forEach(keysList);




/* These variables store the buttons that progress the user through the lyrics*/
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

/*These statements below Line 46-48 are "hiding" all
 the progress buttons, except the first one*/
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

/* Write anonymous event handler property
 and function for the first progress button*/

nextOne.onclick = function () {
    nextTwo.hidden = false;
    nextOne.hidden = true;
    document.getElementById('letter-note-five').innerHTML = "D"
};
/* Line 52- In the function above we are using an anonymous event handler fucntion to reveal the nextTwo 
button with the onlclick property and we do that by changing the.hidden property 
value to false and we want to hide the nextOne button and we do that within 
the function by changing its hidden property value to true. Were also changing
the notes of the above elements to C and D with the innerHtml property.*/

nextTwo.onclick = function () {
    nextThree.hidden = false;
    nextTwo.hidden = true;
    document.getElementById('word-five').innerHTML = "DEAR";
    document.getElementById('word-six').innerHTML = "FRI-";
    lastLyric.style.display = 'inline-block';
    document.getElementById('letter-note-three').innerHTML = "G";
    document.getElementById('letter-note-four').innerHTML = "E";
    document.getElementById('letter-note-five').innerHTML = "C";
    document.getElementById('letter-note-six').innerHTML = "B";
}
/* Line 63 -In the event handler function above were using the onclick 
event property and creating a anonymous event handler function 
targeting the nextTwo button once its clicked it will make the nextThree 
button go from hidden to appearing while also hiding the nextTwo button. 
We are also changing the lyrics of the birthday song once nextTwo 
button is clicked the lyrics will change from happy birthday to you to 
happy birthday dear friend.*/

nextThree.onclick = function () {
    startOver.hidden = false;
    nextThree.hidden = true;
    document.getElementById('word-one').innerHTML = "HAP";
    document.getElementById('word-two').innerHTML = "PY";
    document.getElementById('word-three').innerHTML = "BIRTH";
    document.getElementById('word-four').innerHTML = "DAY";
    document.getElementById('word-five').innerHTML = "TO";
    document.getElementById('word-six').innerHTML = "YOU";
    document.getElementById('letter-note-one').innerHTML = "F";
    document.getElementById('letter-note-two').innerHTML = "F";
    document.getElementById('letter-note-three').innerHTML = "E";
    document.getElementById('letter-note-four').innerHTML = "C";
    document.getElementById('letter-note-five').innerHTML = "D";
    document.getElementById('letter-note-six').innerHTML = "C";
    lastLyric.style.display = 'none';
}

/*Line 82 - In the Code above we have created a event handler
 function using the onclick property that will target the nextThree element. The first line of code in the
  event handler function that will execute when nexThree button is clicked will reveal the start over 
  button and we do that by using the hidden property and giving it a value of false. 
  and in contrast the next line of code will hide the nextThree button by giving it a value of true. 
  The following six lines of code executed we are using the innerHTML property to change the content of 
  each element by targeting  its specific id and changing its inner html text content.*/


// This is the event handler property and function for the startOver button
startOver.onclick = function () {
    nextOne.hidden = false;
    startOver.hidden = true;
    document.getElementById('word-one').innerHTML = 'HAP-';
    document.getElementById('letter-note-one').innerHTML = 'G';
    document.getElementById('word-two').innerHTML = 'PY';
    document.getElementById('letter-note-two').innerHTML = 'G';
    document.getElementById('word-three').innerHTML = 'BIRTH-';
    document.getElementById('letter-note-three').innerHTML = 'A';
    document.getElementById('word-four').innerHTML = 'DAY';
    document.getElementById('letter-note-four').innerHTML = 'G';
    document.getElementById('word-five').innerHTML = 'TO';
    document.getElementById('letter-note-five').innerHTML = 'C';
    document.getElementById('word-six').innerHTML = 'YOU!';
    document.getElementById('letter-note-six').innerHTML = 'B';
}