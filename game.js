var buttonColours = ["red","blue","yellow","green"];

var gamePattern = [];

var started = false;
var level=0;

$(document).keypress(function()
{
    if(!started)
    {
        // $("#level-title").html=("Level" +  level);
        newSequence();
        started=true;
    }
});

var userClickedPattern =[];
$(".btn").click(function(){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkanswer(userClickedPattern.length-1);
    
     
});

function checkanswer(currentlevel)
{
   
    if(userClickedPattern[currentlevel] === gamePattern[currentlevel])
    {
        console.log("Success")
        if(userClickedPattern.length === gamePattern.length)
        {
            setTimeout(() =>
            { newSequence()}, 1000);
        }
    }
    else
    {
        console.log("wrong");
        playSound("wrong")
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over"); 
        },2000);
        startover();
        $("#level-title").text("Press Any Key to Start");
    }
}


function newSequence()
{
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomColour = buttonColours[randomNumber];
    gamePattern.push(randomColour);
    $("#" + randomColour).fadeIn(100).fadeOut(100).fadeIn(100);

   playSound(randomColour);
    

}

function startover()
{
    gamePattern=[];
    level=0;
    started=false;
}

function playSound(name)
{
    
        var audio = new Audio("sounds/"+name+".mp3");
        audio.play();
   
}

function animatePress(currentcolour)
{   
    $("#"+currentcolour).addClass("pressed")
    setTimeout(() =>{
    $("#"+currentcolour).removeClass("pressed")},110);
    
}

console.log(currentlevel);