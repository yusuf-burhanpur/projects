var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

var level = 0;

function nextSequence () {

    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChoosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChoosenColour);
    choosenButton(randomChoosenColour);
    animatePress(randomChoosenColour);

    level = level + 1;
        $("h1").text("level " + level);
   

    }



 $('.btn').on("click", function () {
    var userChoosenColour = this.id;
    var clickedPattern = userClickedPattern.push(userChoosenColour);
    choosenButton(userChoosenColour);
    animatePress(userChoosenColour);

    
     checkAnswer(userClickedPattern.length - 1);
});
  



function choosenButton (evt) {
    switch (evt) {
        case "red" :
            var red = new Audio ("sounds/red.mp3");
                red.play();
             $("#" + evt).fadeOut(100).fadeIn(100);
        break;
        
        case "blue"  :
            var blue = new Audio("sounds/blue.mp3");
                blue.play();
                $("#" + evt).fadeOut(100).fadeIn(100);    
        break;

        case "green"  :
            var green = new Audio ("sounds/green.mp3");
                green.play();
                $("#" + evt).fadeOut(100).fadeIn(100);
        break;
        
        case "yellow"  :
            var yellow = new Audio ("sounds/yellow.mp3");
                yellow.play();
                $("#" + evt).fadeOut(100).fadeIn(100); 
        break;
        
}

}
function animatePress (currentColour) {
    $("." + currentColour).addClass("pressed");
    setTimeout(function (){
        $("." + currentColour).removeClass("pressed");
    }, 100);
}




var started = false;

    $(document).on( "keypress", function () {

        if (!started) {
        $("h1").text("level " + level);
        nextSequence();
        started = true;
        }
    })

    function checkAnswer (currentLevel) {
    
        if (gamePattern[currentLevel] === userClickedPattern[currentLevel] ) {
            console.log("success");
                if (userClickedPattern.length === gamePattern.length ){
                    setTimeout(function() {
                        nextSequence();
                    }, 1000);
        
                }
            }

        else {
            var wrong = new Audio ("sounds/wrong.mp3");
                wrong.play();

                $("body").addClass("game-over");
                setTimeout (function () {
                    $("body").removeClass("game-over");
                }, 200);

                $("h1").text("Game Over, Press any Key to Start");
                    ButtonPress();
        }
    }


function ButtonPress () {
    level = 0;
    gamePattern = [];
    started = false;
    
}