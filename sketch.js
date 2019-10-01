function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background('black');
}

function draw() {
  translate(windowWidth/2,windowHeight/2);

    var index = floor(random() * colorList.length);
    var index2 = floor(random() * colorList2.length);
    var index3 = floor(random() * colorList3.length);
    var index4 = floor(random() * colorList4.length);
    var index5 = floor(random() * colorList5.length);

    noFill();
    strokeWeight(0.50);
    var val1 = windowWidth/20;

  for (var y = -windowHeight; y < windowHeight; y+=windowWidth/24){
    for (var x = -windowWidth; x < windowWidth; x+=windowWidth/24){
      for(var i = val1; i<=5*val1; i+=val1){

        if(i == 5*val1){
          noLoop();
        }

        if(i == 1*windowWidth/20){
          stroke(color(colorList[index]));
        }
        else if(i == 2*windowWidth/20){
          stroke(color(colorList2[index2]));
        }
        else if(i == 3*windowWidth/20){
          stroke(color(colorList3[index3]));
        }
        else if(i == 4*windowWidth/20){
          stroke(color(colorList4[index4]));
        }
        else if(i == 5*windowWidth/20){
          stroke(color(colorList5[index5]));
        }

        ellipse(x, y, i);
        //console.log(i/val1);
      }
    }
  }

  if (mouseIsPressed) {
     document.location.reload();
   }

  }
  var colorList = ['orange', 'blue', 'green', 'pink', 'yellow'];
  var colorList2 = ['orange', 'blue', 'green', 'pink', 'yellow'];
  var colorList3 = ['orange', 'blue', 'green', 'pink', 'yellow'];
  var colorList4 = ['orange', 'blue', 'green', 'pink', 'yellow'];
  var colorList5 = ['orange', 'blue', 'green', 'pink', 'yellow'];
