// background Image
var bgIMG;

// Sheilds
var she1, she2, she3, she4;

//Sheild Image
var sheIMG1, sheIMG2, sheIMG3, sheIMG4;

// User Player
var user;

// User Player Images
var userIMG;

// Team Mates
var tea1, tea2, tea3, tea4, tea5, tea6;

//Team Mates Image
var teaIMG;

// Opponents
var op1, op2, op3, op4, op5, op6, op7;

//Opponents Image
var opIMG;

//edges
var edges;

function preload(){

	//bg IMG
	bgIMG = loadImage("images/back.png");

	//Sheild Image
	sheIMG1 = loadImage("images/shei1.png");
	sheIMG2 = loadImage("images/shei2.png");
	sheIMG3 = loadImage("images/shei3.png");
	sheIMG4 = loadImage("images/shei4.png");

}

function setup() {

	createCanvas(displayWidth-20, displayHeight-83);
	
	//sheilds
	she1 = createSprite(300,170,30,250);// left top
	she1.addImage(sheIMG4);
	she1.scale = 0.7;

	she2 = createSprite(1000,470,30,250);//right bottom
	she2.addImage(sheIMG2);
	she2.scale = 0.7;

	she3 = createSprite(400,400,30,250);//left bottom
	she3.addImage(sheIMG1);
	she3.scale = 0.7;

	she4 = createSprite(800,230,30,250);// right top
	she4.addImage(sheIMG3);
	she4.scale = 0.7;

	edges = createEdgeSprites();
	//user
	user = createSprite(150,150,20,20);

	//team Mates
	tea1 = createSprite(150,50,20,20);
	tea2 = createSprite(150,170,20,20);
	tea3 = createSprite(150,240,20,20);
	tea4 = createSprite(150,350,20,20);
	tea5 = createSprite(150,450,20,20);
	tea6 = createSprite(150,550,20,20);
	

	//Opponents
	op1 = createSprite(1100,50,20,20);
	op2 = createSprite(1100,150,20,20);
	op3 = createSprite(1100,250,20,20);
	op4 = createSprite(1100,350,20,20);
	op5 = createSprite(1100,450,20,20);
	op6 = createSprite(1100,550,20,20);
	op7 = createSprite(1100,650,20,20);
	

}


function draw() {
  rectMode(CENTER);
  background(bgIMG);

// controls for user
if(keyDown(LEFT_ARROW)){
	changePosition(-5,0);
}
else if(keyDown(RIGHT_ARROW)){
	changePosition(5,0);
}
else if(keyDown(UP_ARROW)){
	changePosition(0,-5);
}
else if(keyDown(DOWN_ARROW)){
	changePosition(0,+5);
}


user.collide(she1);
user.collide(she2);
user.collide(she3);
user.collide(she4);
user.collide(edges);

tea1.collide(she1);
tea1.collide(she2);
tea1.collide(she3);
tea1.collide(she4);
tea1.collide(edges);

tea2.collide(she1);
tea2.collide(she2);
tea2.collide(she3);
tea2.collide(she4);
tea2.collide(edges);

tea3.collide(she1);
tea3.collide(she2);
tea3.collide(she3);
tea3.collide(she4);
tea3.collide(edges);

tea4.collide(she1);
tea4.collide(she2);
tea4.collide(she3);
tea4.collide(she4);
tea4.collide(edges);

tea5.collide(she1);
tea5.collide(she2);
tea5.collide(she3);
tea5.collide(she4);
tea5.collide(edges);

tea6.collide(she1);
tea6.collide(she2);
tea6.collide(she3);
tea6.collide(she4);
tea6.collide(edges);


op1.collide(she1);
op1.collide(she2);
op1.collide(she3);
op1.collide(she4);
op1.collide(edges);

op2.collide(she1);
op2.collide(she2);
op2.collide(she3);
op2.collide(she4);
op2.collide(edges);

op3.collide(she1);
op3.collide(she2);
op3.collide(she3);
op3.collide(she4);
op3.collide(edges);

op4.collide(she1);
op4.collide(she2);
op4.collide(she3);
op4.collide(she4);
op4.collide(edges);

op5.collide(she1);
op5.collide(she2);
op5.collide(she3);
op5.collide(she4);
op5.collide(edges);

op6.collide(she1);
op6.collide(she2);
op6.collide(she3);
op6.collide(she4);
op6.collide(edges);

op7.collide(she1);
op7.collide(she2);
op7.collide(she3);
op7.collide(she4);
op7.collide(edges);

randVelocityTE(tea1);
randVelocityTE(tea2);
randVelocityTE(tea3);
randVelocityTE(tea4);
randVelocityTE(tea5);
randVelocityTE(tea6);


randVelocityOP(op1);
randVelocityOP(op2);
randVelocityOP(op3);
randVelocityOP(op4);
randVelocityOP(op5);
randVelocityOP(op6);
randVelocityOP(op7);


tea1.collide(tea2);
tea1.collide(tea3);
tea1.collide(tea4);
tea1.collide(tea5);
tea1.collide(tea6);
tea1.collide(op1);
tea1.collide(op2);
tea1.collide(op3);
tea1.collide(op4);
tea1.collide(op5);
tea1.collide(op6);
tea1.collide(op7);
tea1.collide(user);

tea2.collide(tea3);
tea2.collide(tea4);
tea2.collide(tea5);
tea2.collide(tea6);
tea2.collide(op1);
tea2.collide(op2);
tea2.collide(op3);
tea2.collide(op4);
tea2.collide(op5);
tea2.collide(op6);
tea2.collide(op7);
tea2.collide(user);


tea3.collide(tea4);
tea3.collide(tea5);
tea3.collide(tea6);
tea3.collide(op1);
tea3.collide(op2);
tea3.collide(op3);
tea3.collide(op4);
tea3.collide(op5);
tea3.collide(op6);
tea3.collide(op7);
tea3.collide(user);


tea4.collide(tea5);
tea4.collide(tea6);
tea4.collide(op1);
tea4.collide(op2);
tea4.collide(op3);
tea4.collide(op4);
tea4.collide(op5);
tea4.collide(op6);
tea4.collide(op7);
tea4.collide(user);

tea5.collide(tea6);
tea5.collide(op1);
tea5.collide(op2);
tea5.collide(op3);
tea5.collide(op4);
tea5.collide(op5);
tea5.collide(op6);
tea5.collide(op7);
tea5.collide(user);

tea6.collide(op1);
tea6.collide(op2);
tea6.collide(op3);
tea6.collide(op4);
tea6.collide(op5);
tea6.collide(op6);
tea6.collide(op7);
tea6.collide(user);



user.collide(op1);
user.collide(op2);
user.collide(op3);
user.collide(op4);
user.collide(op5);
user.collide(op6);
user.collide(op7);





drawSprites();
  
 
}


function changePosition(x,y){
	user.x  = user.x + x;
	user.y = user.y + y;
}

function randVelocityOP(op){
	op.velocityY = random(-5,5);
	op.velocityX = -5;
	
}

function randVelocityTE(te){
	te.velocityX = 5;
	te.velocityY = random(-5,5);
}
