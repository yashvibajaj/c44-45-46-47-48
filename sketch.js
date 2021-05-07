//creating 10 cards
//creating a player
var gameState = "play";
var win = 0;
var img1, img2, img3, img4, img5, img6, img7, img8, coverImg;
var card1, card2, card3, card4, card5, card6, card7, card8 ;
var pawImg,paw;
var rand;

function preload(){
  img1 = loadImage("1.jpeg");
  img2 = loadImage("2.jpeg");
  img3 = loadImage("3.jpeg");
  img4 = loadImage("4.jpeg");
  img5 = loadImage("5.jpeg");
  img6 = loadImage("6.jpeg");
  img7 = loadImage("7.jpeg");
  img8 = loadImage("8.jpeg");
  coverImg = loadImage("9.jpeg");
  pawImg = loadImage("sprite.jpeg");
}


function setup() {
  createCanvas(1100,800);
 // paw = createSprite(900,700,40,40);
  //paw.addImage(pawImg);
  //paw.scale = 0.2;
  card1 = new Card(200,150);
  card2 = new Card(400,150);
  card3 = new Card(600,150);
  card4 = new Card(800,150);
  card5 = new Card(200,450);
  card6 = new Card(400,450);
  card7 = new Card(600,450);
  card8 = new Card(800,450);

  card1.display();
  card2.display();
  card3.display();
  card4.display();
  card5.display();
  card6.display();
  card7.display();
  card8.display();

}

function draw() {
  background(0,0,0);  
  card1.clicked();
    card2.clicked();
    card3.clicked();
    card4.clicked();
    card5.clicked();
    card6.clicked();
    card7.clicked();
    card8.clicked();
  if(gameState==="play"){
    win = 0;
    console.log("play");
    
  }
  
   else if(gameState==="end"){
    textSize(20);
    text("YOU WON THE GAME !!!",500,400);
    //console.log("end");
  }
  /*if (card1.rand===card2.rand ||  card1.rand===card3.rand || card1.rand===card4.rand ||
    card1.rand===card5.rand || card1.rand===card6.rand ||  card1.rand===card7.rand || 
    card1.rand===card8.rand ){

     
     win++;
      console.log(win);
     console.log("if end");
 }*/
 if (card1.c1 && card2.c1 || 
  card1.c1 && card3.c1 ||
  card1.c1 && card4.c1 ||
  card1.c1 && card5.c1 ||
  card1.c1 && card6.c1 ||
  card1.c1 && card7.c1 ||
  card1.c1 && card8.c1 ||

  card1.c2 && card2.c2 ||
  card1.c2 && card3.c2 ||
  card1.c2 && card4.c2 ||
  card1.c2 && card5.c2 ||
  card1.c2 && card6.c2 ||
  card1.c2 && card7.c2 ||
  card1.c2 && card8.c2 ||
  
  card1.c3 && card2.c3 ||
  card1.c3 && card3.c3 ||
  card1.c3 && card4.c3 ||
  card1.c3 && card5.c3 ||
  card1.c3 && card6.c3 ||
  card1.c3 && card7.c3 ||
  card1.c3 && card8.c3 || 
  
  card1.c4 && card2.c4||
  card1.c4 && card3.c4 ||
  card1.c4 && card4.c4 ||
  card1.c4 && card5.c4 ||
  card1.c4 && card6.c4 ||
  card1.c4 && card7.c4 ||
  card1.c4 && card8.c4 
  
  ){

   
   win++;
    console.log(win);
   console.log("if end");
}
else if(card2.c1 && card3.c1 ||
  card2.c1 && card4.c1 ||
  card2.c1 && card5.c1 ||
  card2.c1 && card6.c1 ||
  card2.c1 && card7.c1 ||
  card2.c1 && card8.c1 ||
  
  card2.c2 && card3.c2 ||
  card2.c2 && card4.c2 ||
  card2.c2 && card5.c2 ||
  card2.c2 && card6.c2 ||
  card2.c2 && card7.c2 ||
  card2.c2 && card8.c2 || 
  
  card2.c3 && card3.c3 ||
  card2.c3 && card4.c3 ||
  card2.c3 && card5.c3 ||
  card2.c3 && card6.c3 ||
  card2.c3 && card7.c3 ||
  card2.c3 && card8.c3 ||
  
  card2.c4 && card3.c4 ||
  card2.c4 && card4.c4 ||
  card2.c4 && card5.c4 ||
  card2.c4 && card6.c4 ||
  card2.c4 && card7.c4 ||
  card2.c4 && card8.c4 ){

    win++;
    console.log(win);
   console.log("card2");

}
else if(card3.c1 && card4.c1 ||
  card3.c1 && card5.c1 ||
  card3.c1 && card6.c1 ||
  card3.c1 && card7.c1 ||
  card3.c1 && card8.c1 ||
  
  card3.c2 && card4.c2 ||
  card3.c2 && card5.c2 ||
  card3.c2 && card6.c2 ||
  card3.c2 && card7.c2 ||
  card3.c2 && card8.c2 || 
  
  card3.c3 && card4.c3 ||
  card3.c3 && card5.c3 ||
  card3.c3 && card6.c3 ||
  card3.c3 && card7.c3 ||
  card3.c3 && card8.c3 ||
  
  card3.c4 && card4.c4 ||
  card3.c4 && card5.c4 ||
  card3.c4 && card6.c4 ||
  card3.c4 && card7.c4 ||
  card3.c4 && card8.c4 ){

    win++;
    console.log(win);
   console.log("card3");

}
else if (card4.c1 && card5.c1 ||
  card4.c1 && card6.c1 ||
  card4.c1 && card7.c1 ||
  card4.c1 && card8.c1 ||
  
  card4.c2 && card5.c2 ||
  card4.c2 && card6.c2 ||
  card4.c2 && card7.c2 ||
  card4.c2 && card8.c2 || 
  
  card4.c3 && card5.c3 ||
  card4.c3 && card6.c3 ||
  card4.c3 && card7.c3 ||
  card4.c3 && card8.c3 ||
  
  card4.c4 && card5.c4 ||
  card4.c4 && card6.c4 ||
  card4.c4 && card7.c4 ||
  card4.c4 && card8.c4 ){

    win++;
    console.log(win);
   console.log("card4");

}
else if(card5.c1 && card6.c1 ||
  card5.c1 && card7.c1 ||
  card5.c1 && card8.c1 ||
  
  card5.c2 && card6.c2 ||
  card5.c2 && card7.c2 ||
  card5.c2 && card8.c2 || 
  
  card5.c3 && card6.c3 ||
  card5.c3 && card7.c3 ||
  card5.c3 && card8.c3 ||
  
  card5.c4 && card6.c4 ||
  card5.c4 && card7.c4 ||
  card5.c4 && card8.c4 ){

    win++;
    console.log(win);
   console.log("card5");

}
else if (card6.c1 && card7.c1 ||
  card6.c1 && card8.c1 ||
  
  card6.c2 && card7.c2 ||
  card6.c2 && card8.c2 || 
  
  card6.c3 && card7.c3 ||
  card6.c3 && card8.c3 ||
  
  card6.c4 && card7.c4 ||
  card6.c4 && card8.c4 ){

    win++;
    console.log(win);
   console.log("card6");

}
else if(card7.c1 && card8.c1 ||
 
  card7.c2 && card8.c2 || 
  
  card7.c3 && card8.c3 ||
  
  card7.c4 && card8.c4 ){

    win++;
    console.log(win);
   console.log("card7");

}
 if(win!==0){
  gameState = "end";

 }
 // paw.x = World.mouseX;
  //paw.y = World.mouseY;

  drawSprites();
  
  
  
} 

