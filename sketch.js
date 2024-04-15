/**

  Duplicate this sketch to start your project 🧪
  More info: https://dev.codemotionkids.com/libraries/diorama/docs/
  
  Creative Commons BY-SA

**/
var grass_t; 
var sky_t;
var wood_t;
var leaves_t;


function preload() {
  grass_t = loadImage("grass.webp");
  sky_t = loadImage("sky.jpg");
  wood_t = loadImage("wood.jpg");
  leaves_t = loadImage("leaves.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  environment(sky_t, false);
  hideGrid();
  diffuse("#1E6E1E");
  let lato = 50;
  let grass = image3D(grass_t, 0, 0, 0, 55);
  grass.setRotationX(90);
  let albero = beginGroup();
      diffuse("#1E7F1E");
      diffuseMap(leaves_t);
      sphere(0, 2.8, 0, 1.4);
      diffuse("#5D4A25");
      diffuseMap(wood_t);
      cylinder(0, 1, 0, 0.5, 2);
  endGroup();
  
  for (let i = 0; i <= 100; i++)
  {
      let x = random(-lato/2, lato/2);
      let y = random(-lato/2, lato/2);
      let scala = random(0.8, 1.4);
      let nuovo_albero = clone(albero, x, 0, y);
      nuovo_albero.setScale(scala);
  }
  
  pushFX(BLOOM, 0.1);
}

function draw() {
  // 🔍 Never create objects here, but don't forget to have it in your code:
  // leave empty for the moment
}