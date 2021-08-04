var cat,mouse,ground,gImg
var catImage,catLoadImage,mouseImage
var dog,dogImg
var bg
var mouseGrp,dgGrp

function preload(){
    catLoadImage=loadImage("cat image.png")
mouseImage=loadImage("rat.png")
gImg=loadImage("OIP.png")
dogImg=loadImage("dog.png")
}

function setup(){
createCanvas(2000,700)
cat = createSprite(50,500,20,10)
cat.shapeColor="magenta"
cat.addImage(catLoadImage)
cat.scale=0.6
cat.debug=false
cat.setCollider("rectangle",0,70,400,180)
ground=createSprite(100,600,10000,20)
ground.shapeColor="blue"
ground.visible=false
ground.velocityX=-2
bg=createSprite(50,140,1000,1200)
bg.addImage(gImg)
bg.scale=5
mouseGrp= new Group()
dgGrp=new Group()
}



function draw(){
background("lightBlue")
camera.position.x=cat.x
camera.position.y=300
bg.velocityX=-1
 if(bg.x<0){
     bg.x=bg.width/2
 }   
if(keyDown("space")&& cat.y>450){

    cat.velocityY=-15
}
 spwnRts()  
cat.velocityY=cat.velocityY+0.8
cat.collide(ground)
cat.depth=bg.depth
cat.depth=cat.depth+1
if(cat.isTouching(mouseGrp)){
   mouseGrp.destroyEach()
   cat.scale=cat.scale+0.1 
}
if(cat.isTouching(dgGrp)){
    dgGrp.destroyEach()
    cat.scale=cat.scale-0.1
}

if(cat.scale<0.2){
    cat.destroy()
    dgGrp.destroyEach()
    mouseGrp.destroyEach()
    background("white")
    textSize(30)
    text("cat died",450,350)
    bg.visible=false
}
drawSprites()
spwnDgs()
}

function spwnRts(){
if(frameCount%200===0){
mouse= createSprite(1050,Math.round(random(300,550)),20,30)
mouse.velocityX=-3
mouse.addImage(mouseImage)
mouse.scale=0.2
mouseGrp.add(mouse)
}

}

function spwnDgs(){
    if(frameCount%400===0){
   dog= createSprite(1050,Math.round(random(300,550)),20,30)
  dog.velocityX=-3
    dog.addImage(dogImg)
    dog.scale=0.3
    dgGrp.add(dog)
    }
    
    }