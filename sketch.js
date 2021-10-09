const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground, bridge;
var leftWall, rightWall;
var jointPoint;
var jointLink;
var zombie;
var zombie1, zombie2, zombie3, zombie4;
var breakButton;
var backgroundImage;
var stones = [];
var stick,stickImg;
var bgm;

function preload() {
  zombie1 = loadImage("./assets/Chick.png");
  zombie2 = loadImage("./assets/Chick2.png");

  zombie3 = loadImage("./assets/chick4.png");
  zombie4 = loadImage("./assets/Chick3.png");
    
  stickImg=loadImage("./assets/stick.png");
    
  backgroundImage = loadImage("./assets/background.gif");

 // bgm = loadSound("/assets/kid-s-game-—-children-s-music-instrumental-music-for-kids.mp3");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);


  
//  bgm.play();
 // bgm.setVolume(0.23);
  

  stick = createSprite(100,140);
  stick.addImage(stickImg);
  stick.scale=0.18;
  stick.depth=-2;

  stick = createSprite(width-100,220);
  stick.addImage(stickImg);
  stick.scale=0.18;
  stick.depth=-2;

  ground = new Base(0, height - 10, width * 2, 20);
  leftWall = new Base(100, height - 300, 200, height / 2 + 100);
  rightWall = new Base(width - 100, height - 300, 200, height / 2 + 100);


  bridge = new Bridge(30, { x: 50, y: height / 2 - 140 });
  jointPoint = new Base(width - 250, height / 2 - 100, 40, 20);

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);



  for (var i = 0; i < 1; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-100, 100);
    var stone = new Stone(x, y, 50,80);
    var stone2 = new Stone2 (x, y, 50,80);
    var stone3 = new Stone3 (x, y, 50,80);
    var stone4 = new Stone4(x, y, 50,80);
    var stone5 = new Stone5(x, y, 50,80);
    var stone6 = new Stone6(x, y, 50,80);
    var stone7 = new Stone7(x, y, 50,80);
    var stone8 = new Stone8(x, y, 50,80);
    var stone9 = new Stone9(x, y, 50,80);
    var stone10 = new Stone10(x, y, 50,80);
    var stone11 = new Stone11(x, y, 50,80);
    var stone12 = new Stone12 (x, y, 50,80);
    var stone13 = new Stone13 (x, y, 50,80);
    var stone14 = new Stone14(x, y, 50,80);
    var stone15 = new Stone15(x, y, 50,80);
    var stone16 = new Stone16(x, y, 50,80);
    var stone17 = new Stone17(x, y, 50,80);
    stones.push(stone);
    stones.push(stone2);
    stones.push(stone3);
    stones.push(stone4);
    stones.push(stone5);
    stones.push(stone6);
    stones.push(stone7);
    stones.push(stone8);
    stones.push(stone9);
    stones.push(stone10);
    stones.push(stone11);
    stones.push(stone12);
    stones.push(stone13);
    stones.push(stone14);
    stones.push(stone15);
    stones.push(stone16);
    stones.push(stone17);
  }

  zombie = createSprite(width / 2, height - 110);
  zombie.addAnimation("lefttoright", zombie1, zombie2, zombie1);
  zombie.addAnimation("righttoleft", zombie3, zombie4, zombie3);
  zombie.scale = 0.3;
  zombie.velocityX = 2;

  
    
  breakButton = createButton("");
  breakButton.position(width - 200, height / 2 - 50);
  breakButton.class("breakbutton");

  breakButton.mouseClicked(handleButtonPress);

 
  //breakButton.mousePressed(handleButtonPress);
  //breakButton.mouse(handleButtonPress);
  //breakButton.mousePressed(ButtonPress);


}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

  bridge.show();

  
  for (var stone of stones) {
    stone.show();
  }

  if (zombie.position.x >= width - 300) {
    zombie.velocityX = -4;
    zombie.changeAnimation("righttoleft");
  }

  if (zombie.position.x <= 300) {
    zombie.velocityX = 4;
    zombie.changeAnimation("lefttoright");
  }

  drawSprites();
}

function handleButtonPress() {
  /* jointLink=dettach();
  setTimeout(() => {
    bridge.break();
  }, 1500); */

  /* jointLink.dettach();
  setTimeout(() => {
    break();
  }, 1500); */

  /* jointLink.dettach();
  setTimeout(() => {
    bridge.break();
  }, 5); */

   jointLink.dettach();
  setTimeout(() => {
    bridge.break();
  }, 1500); 
}
