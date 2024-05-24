//this part detect the button pressed
var numberofdrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofdrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttoninnerHTML = this.innerHTML;
        makesound(buttoninnerHTML);

        buttonAnimation(buttoninnerHTML);
        
    })
}

//this part detects the key pressed
document.addEventListener("keypress",function(event){
    makesound(event.key);
    
    buttonAnimation(event.key);
})


function makesound(key){
    switch (key) {
        case "w":
            tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "a":
            tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;
        case "s":
            tom_3 = new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;
        case "d":
            tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;
        case "j":
            crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        case "l":
            snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default: console.log("");
    }

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");

    },100)
}

