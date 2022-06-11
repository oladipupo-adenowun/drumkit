var buttons = document.querySelectorAll(".drum");

for(var a=0;a<buttons.length;a++){
    buttons[a].addEventListener("click",function(){
        animateButton(this.textContent);
        playSound(this.textContent);
    });
}

// Add Support for KeyBoard Press
document.addEventListener("keydown",function(event){
    animateButton(event.key);
    playSound(event.key);
});


function playSound(key){
    var sound = "sounds/";
    
    switch(key){
        case "w":
            sound += "tom-1.mp3";
        break;
        case "a":
            sound += "tom-2.mp3";
        break;
        case "s":
            sound += "tom-3.mp3";
        break;
        case "d":
            sound += "tom-4.mp3";
        break;
        case "j":
            sound += "snare.mp3";
        break;
        case "k":
            sound += "crash.mp3";
        break;
        case "l":
            sound += "kick-bass.mp3";
        break;
        default:
            console.log(key);
        break;
    }

    var audio = new Audio(sound);
    audio.play();
}

function animateButton(key){
    var btn = document.querySelector("."+key);
    btn.classList.add("pressed");
    setTimeout(function(){
        btn.classList.remove("pressed");
    },500);
}