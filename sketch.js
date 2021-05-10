var canvas;
var music;
var s1,s2,s3,s4
var box
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
   box=createSprite(random(20,750),100,40,40)
   box.shapeColor="white"
   box.velocityX=5
   box.velocityY=5
  s1= createSprite(0,580,360,30);  //create 4 different surfaces
  s1.shapeColor="green"
  s2= createSprite(295,580,200,30);
  s2.shapeColor="red"
  s3= createSprite(515,580,200,30);
  s3.shapeColor="blue"
   s4= createSprite(740,580,220,30);
   s4.shapeColor="yellow"
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites()

    box.bounceOff(edges)//create edgeSprite

    if(box.isTouching(s1)  &&  box.bounceOff(s1)){
    box.shapeColor="green"

    }
    if(box.isTouching(s2)  &&  box.bounceOff(s2)){
        box.shapeColor="red"
    
        }
        if(box.isTouching(s3)  ){
            box.shapeColor="blue"
            box.velocityX=0
            box.velocityY=0
            }
            if(box.isTouching(s4)  &&  box.bounceOff(s4)){
                box.shapeColor="yellow"
            
                }
drawSprites();


    //add condition to check if box touching surface and make it box
}
