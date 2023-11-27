// An Array is decalred for the game Sequence
let gameSequence = [];

// We make an array for the player too.
// This is going to store what buttons the player will click throughout the game.    
let playerSequence = [];

/*adding a level variable which i think i was subsituting using by index but it adds overall asthetic to it so its good.*/
var level = 0;
    
// It indicates the state of the game 
var started = false;
  
/* IF A BUTTON IS PRESSED THE FOLLOWING CODES GET EXECUTED.*/
document.addEventListener("keydown",()=>{
    if(!started){
        document.querySelector("h1").innerText = "Level " + level ;// After Messing up the messages need to be changed.
        runGame(); // this call the run game *it has its literate meaning*
        started = true; // if it hadnt started yet now the state is now true and the game is runnin'
    }
});


// Below the FOR...LOOP will add event listeners to every button we have placed in the document using HTML_CSS.        
for (var i= 0; i < 4; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", clicked);
    /*If a Button gets clicked the function next to the action definer |^^^^| calls the function "clicked".*/
}
     
// this function is to log the click sequence to the playerSequence Array
function clicked() {
    
    let clicked_button = this.getAttribute("value"); // this LOC retirves the value  which the user clicked "this." maps to the button which was clicked
    playerSequence.push(clicked_button);
   
    flashingButton(clicked_button); // this flashes the button which the user clicked
    playSound(clicked_button);      // this plays the sound of button which the user clicked

    Checker(playerSequence.length-1); // playerSequence's length is calculated and -1 is cause the length starts from 1 as the user has inputed something but the arrays indexing starts from 0.
        
}
    

// Animation:Glowing_button Function
function buttonAnimate(btn) {

    var glowingButton = document.querySelector("." + btn);// i have been using every buttons "value" instead of the literal name & as we are working with classes here i thought it was kind of hard to getAttrib and i didnt bother looking into it much

    glowingButton.classList.add("blink"); // adds blink class to the selected button

    setTimeout(() => { // setTimeout function gets executed after the specific time that we choose 
    glowingButton.classList.remove("blink") // removes the blinkk class to the selected button
    }, 100); // after 100ms the class gets removed / the function inside this gets executed ^LOC:53
}

// Animation:Glowing_button Implementation Function
function flashingButton(button_value){
//taking value as a parameter from the line its gets called
    
    switch(button_value){ // simple switch case function inorder to animate a button(sort of)
        
        case "0":
            buttonAnimate("red_btn");
            break;

        case "1":
            buttonAnimate("blue_btn")
            break;

        case "2":
            buttonAnimate("yellow_btn")
            break;

        case "3":
            buttonAnimate("green_btn")
            break;

        default:
            console.log(event);
    }
}

// To Check the Clicked Value and the  Sequence Value 
function Checker(level){ // this level parameter takes the playerSequence.length 
    
    if(gameSequence[level] === playerSequence[level]){ // checks the recently pressed button values 
        
        //IF TRUE then this 
            if(gameSequence.length === playerSequence.length){ // checks if the length value fulfills 
            
            setTimeout(() => { 
                runGame(); // this is just to make the UX better as the playes focus can get time to readjust
            }, 1000);

        }
    }
    else{
        //IF NOT TRUE

        playSound("wrong");

       document.querySelector("h1").innerText = " GAME OVER !!!  Press Any Key to Restart"; // Displays gameover 
       document.body.classList.add("gameOver") // A red background is displayed

       setTimeout(()=>{
        document.body.classList.remove("gameOver") // remmoves really fast (sort of ) animating it like a error move to do
       },100);
       
       startOver() // this function gets called 
        
       //if you still start pressing ur mouse to click the buttons it will go ahead and call clicked() function. and this process repeats it checks if you did click the correct matching button and it finds out you havent so it will keep on looping 
    }
}

function runGame(){
    playerSequence = []; // clears the previously made playerSequence as the player requires to click every button in the same order as before (whole point of the game)

    level++; // increments the level by 1

    document.querySelector("h1").innerText = "Level " + level // displays the level you are currently in {1000 UX move}

    var randomNumber = (Math.floor(Math.random() * 4)).toString(); // generates a random number ( 0 < range > 1) and do the math :) & toString(); cus i had a problem checking the values in the CHECKER FUNCTION for arrays.

    gameSequence.push(randomNumber); //logs the randomly generatted number-string into gameSequence Array.

    flashingButton(randomNumber); //same - flashes the button
    playSound(randomNumber);  // same - plays the button sound 
    // BUT THIS time it does these two things as per the generated randomNumber.
}

// Sound Playing Function
 function playSound(sound_name) {
    var audio = new Audio("/sounds/"+ sound_name +".mp3") // audio is a variable which stores a new Audio from the url inside it
    audio.play(); // this loc plays the audio if the func gets called
    
 }

 // Restart Function
function startOver() { 
    level = 0 ; // resets the level count
    gameSequence = []; // empties the previously generated gameSequence
    started = false; // changes the state to false 

    //now if you press a keyboard button it jumps to the (!started) conditional previously it wouldnt work because even if you did press some button it would go and check (!started) and the result will be "baahhh why even press in the middle of the game" and it would ignore

}   