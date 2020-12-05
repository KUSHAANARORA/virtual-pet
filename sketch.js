var database;
var dog1, dog2;
var dog;
var fd;

function preload() {
  dog1 = loadImage("images/dogImg.png")
  dog2 = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()
  dog = createSprite(250, 300, 150, 150)
  dog.scale = 0.15
  dog.addImage(dog1)
  var foodref = database.ref("Food")
  foodref.on("value", function (data) {
    fd = data.val()
  })

}


function draw() {
  background("green")
  drawSprites();
  text("Food remaing:"+ fd,170,200)
  if(keyWentDown(UP_ARROW)) {
    if(fd === 0) {
      fd = 0
    }
    else{
      fd = fd-1
    }
    database.ref("/").update({Food:fd})
  }
}




