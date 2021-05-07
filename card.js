class Card {
    constructor(x,y){
       this.card = createSprite(x,y,100,200);
       this.c1 = null;
       this.c2 = null;
       this.c3 = null;
       this.c4 = null;
       this.c5 = null;
       this.c6 = null;
       this.c7 = null;
       this.c8 = null;
       this.rand = null;

    }
    display (){
        this.card.addImage(coverImg);
        
        //this.card.depth = paw.depth;
       // paw.depth++;
    //drawSprites();

    }
    clicked(){ 
        if (mousePressedOver(this.card)){
            this.rand = Math.round(random(1,4));
            switch(this.rand){
              case 1 : this.card.addImage(img1);
              this.c1 = this.rand;
              break;
              case 2 : this.card.addImage(img2); 
              this.c2 =this.rand;
              break;
              case 3 : this.card.addImage(img3); 
              this.c3 = this.rand;
              break;
              case 4 : this.card.addImage(img4); 
              this.c4 = this.rand;
              break;
              /*case 5 : this.card.addImage(img5); 
              this.c5 = this.rand;
              break;
              case 6 : this.card.addImage(img6); 
              this.c6 = this.rand;
              break;
              case 7 : this.card.addImage(img7); 
              this.c7 = this.rand;
              break;
              case 8 : this.card.addImage(img8); 
              this.c8 = this.rand;*/
              break;
              default : break;
            }
          }
    }
}