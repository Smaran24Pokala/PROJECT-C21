var canvas;
var music;
var fixedRect1;
var fixedRect2;
var fixedRect3;
var fixedRect4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    fixedRect1 = createSprite(750, 570, 160, 20);
    fixedRect2 = createSprite(550, 570, 160, 20);
    fixedRect3 = createSprite(350, 570, 160, 20);
    fixedRect4 = createSprite(150, 570, 160, 20);
    box= createSprite(400, 300, 50, 50);




}

function draw() {

    box.x = World.mouseX;
    box.y = World.mouseY; 

    background(rgb(169,169,169));
    fixedRect1.shapeColor= "magenta";
    fixedRect2.shapeColor= "yellow";
    fixedRect3.shapeColor= "red";
    fixedRect4.shapeColor= "green";
    box.shapeColor= "white"

    function istouching(object1, object2) {
        if(abs(object1.x - object2.x) < object1.width/2 + object2.width/2 && 
        abs(object1.y - object2.y) < object1.height/2 + object2.height/2){
          return true;
        }
        else {
            return false;
        }
      }

      if(istouching(box, fixedRect1)){
         box.shapeColor= "magenta";
         fixedRect1.shapeColor= "magenta";
      }

      if(istouching(box, fixedRect2)){
        box.shapeColor= "yellow";
        fixedRect2.shapeColor= "yellow";
     }
     if(istouching(box, fixedRect3)){
        box.shapeColor= "red";
        fixedRect3.shapeColor= "red";
     }
     if(istouching(box, fixedRect4)){
        box.shapeColor= "green";
        fixedRect4.shapeColor= "green";
     }
      

      

    drawSprites();
}
