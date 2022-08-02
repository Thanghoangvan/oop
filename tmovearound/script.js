class hero1{

constructor(image, top, left,right, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.right=right;}

 getHeroElement(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }
moveRight(){
  this.left+=100
}
movedown(){
this.top+=100
}
moveLeft(){
this.left-=100
}
moveup(){
  this.top-=100
}}
;
var hero = new hero1('messi.jpg', 20, 30,40, 200);
let flag=1
function start(){
  debugger;
  if((hero.left < window.innerWidth - hero.size) && (flag==1)){
    hero.moveRight()
    if(hero.left >= window.innerWidth - hero.size){
      flag=2
    }
  }
   else if((flag==2) && (hero.top< window.innerHeight-hero.size)){   
    hero.movedown()
    if(hero.top>=window.innerHeight-hero.size){
      flag=3
    }
 }
   else if((flag==3)&& (hero.left>30)) {
  hero.moveLeft()
  console.log("thang")
  if(hero.left<=30){
    flag=4
  }
}
  else if((flag==4)&&(hero.top>20)){
    hero.moveup()
    if(this.hero.top<=20){
      flag=1
    }
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}


start();