// standard global variables
var container, scene, scene2, backgroundScene, backgroundCamera, camera,cameraLeft,cameraRight, renderer, controls,controls1;
var keyboard = new KeyboardState();


// custom global variables
//objects.destroy();
var targetList = [],targetListX = [],targetListY = [],targetListXY = [],savedFiles = [],userLocalName = [],userLocalPass = [];
var numSavedFiles = 0, current = ["NONE", ""],currentFile;
var activeFiles = [];
activeFiles[0] = ". ";
var numUserL = 0;
var numUsers = 1;
var possiX=[], possiY=[], possiZ=[],possiXX=[], possiYX=[], possiZX=[],possiXY=[], possiYY=[], possiZY=[],possiXXY=[], possiYXY=[], possiZXY=[];//positions
var TFlagNum=[],TFlagNumX=[], TFlagNumY=[], TFlagNumXY=[], TColour=[], TColourX=[], TColourY=[], TColourXY=[];
var rotX=[], rotY=[], rotZ=[], rotXX=[], rotYX=[], rotZX=[], rotXY=[], rotYY=[], rotZY=[], rotXXY=[], rotYXY=[], rotZXY=[], DesT=[];//rotations
var vv0x=[], vv0y=[], vv0z=[], vv1x=[], vv1y=[], vv1z=[], vv2x=[], vv2y=[], vv2z=[], vv3x=[], vv3y=[], vv3z=[];//?
var count = 0;		
var mirX=[],mirY=[],mirXY=[];
var targetOBJ = [];
var objects = []; 
var objectsL = []; //loaded objects
var objectXxx =[];
var objectX;
var lightsP = [];
var particleLight;
var projector, raycaster, mouse = { x: 0, y: 0 },INTERSECTED, isShiftDown = false;
var separation=0.1;
var selectedFaces = [];
var floorSide=1000;
var faceColorMaterial, baseColor=new THREE.Color( 0xeedd66 );
var highlightedColor=new THREE.Color( 0xddaa00 );
var selectedColor=new THREE.Color( 0x4466dd );
var mouseSphereCoords = null;
var mouseSphere=[];
var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors, overdraw: 0.1 } );
var light1, light2, light3; 
var iR, li=2, i, iiL, xi, yi, zi, si, sy, sz, ci = 1, cii = 1, ciiX=0, ciiY=0, ciiXY=0; //xi is sum of vx values to determine symetry
var materials = [];
var shininess = 50, specular = 0x333333, bumpScale = 1, shading = THREE.SmoothShading;
var keyCode, KeyCodeUp;
var xposi1 = 3.3003030003033003330; //sort of random starting position x. May replace with more random number in final version?
var yposi1 = 2.2200202020020220002; //sort of random starting position y
var zposi1 = 5.5005505005055050055; //sort of random starting position z
var Xsym, Ysym, Zsym;
var Doption = "OFF", Rainbow = "Random",addTetraName = "Original",addTetraName2 = "",addTetraName2R = "";
var xxpo = xposi1/(Math.PI/3)*(Math.floor(xposi1/Math.floor(xposi1)+yposi1+zposi1-Math.floor(yposi1+zposi1)))/Math.PI/Math.floor(xposi1/3) ; //Another random pos based on x1, y1 and z1
var yypo = 5*Math.PI*(Math.floor(yposi1/Math.floor(yposi1)+xposi1+zposi1-Math.floor(xposi1+zposi1)))/Math.PI/Math.floor(yposi1/10);  //Another random pos based on x1, y1 and z1
var zzpo = 2*Math.PI*(Math.floor(zposi1/Math.floor(zposi1)+xposi1+yposi1-Math.floor(yposi1+xposi1)))/Math.PI/Math.floor(zposi1/2.5);  //Another random pos based on x1, y1 and z1
var object3, object4, object2;
var rotSelect2 = [];
var rotSelect = [];
var material11 = new THREE.MeshLambertMaterial({color: 0xffffff, transparent: true, opacity: 0});   //0 is glass 1 is brick
var material999 = new THREE.MeshLambertMaterial({color: 0x00ff00, transparent: true, opacity: 0.3});   //0 is glass 1 is brick
var material12 = new THREE.MeshLambertMaterial({color: 0xffff00, transparent: true, opacity: 1});
var material13 = new THREE.MeshLambertMaterial({color: 0xeeff00});
var material14 = new THREE.MeshLambertMaterial({color: 0xeeff00});
var material15 = new THREE.MeshLambertMaterial({color: 0xffffff,  transparent: true, opacity: 1});
var octa, octaX, octaY,octaZ;
var cubeColor, texture2, backgroundMesh;
var folder1;
var addTetraFlag = 0, addTetraFlag2 = 0, Load2 = 0, addDesignFlag = 0, TexFlag =0;
texFlag = 0;
var designs =[];
var textures = [];
var Tadd;
var TransparentBlock = "False"
var saveOBJ1 = "SavedOBJ";
var colcol = "0x2222cc";
var colcol2 = "0x2222cc";
// myFolder = "home\\theuns\\Downloads\\TetraGeniusUserFiles\\"; // add extra escape slash Not required!!! saved local storage
var musicC = [];
var playingNow;
var audio;
var loaded;
var retrievedObjectA = [];
var sentObjectA = {};
var userObject = [];
var USERS = {};
var retrievedObject;

const tetrasL = [];
var angleObx = 0;
var angleOby = 0;
var angleObz = 0;
var angleOb = Math.PI;
var ciiB = 0, ciiA = 0;
var tetNames = [" ","Original", "Geometric","Single Magnet","Slide","FlatPack", //0-5
" ","Torus", "Clipped", "TetraFrame","TetraMag","ThickStar", "ThinStar","Flower","Abstract", //6-14
" ","Triangles","Magnet Ball", "Pipes","Cubic","Spiral","Half-Pipe", //15-21
" ","Modern","Dragon", "Heart-shape", "Heart-logo","Leaf","DNA segment","Oval", //22-29
" ","Sphere0", "Sphere1","Sphere2","Sphere3", "Sphere4", //30-35
" ","Organic1","Organic2","Organic3", //36-39
" ","Globe1", "Globe2","Globe3","Globe4", "Globe5", "Globe6"," "]; //40-47
var tNames = tetNames.slice(0,6);
var tNames2 = tetNames.slice(6,15);
var tNames3 = tetNames.slice(15,22);
var tNames4 = tetNames.slice(22,30);
var tNames5 = tetNames.slice(30,36);
var tNames6 = tetNames.slice(36,43);
var tetraName = "Original";
var loadingF = 0;
var texNames = [ "Gradient", "Central Africa","Antartica","Eurasia","Australia","Canada","Americas","EsherStair","GoldCopper",
"BlueIce","Silver","Glass","Green","Sandstone","Leaf", "Heart","Flowers"];
textures = ['textures/jaguar.jpg','textures/hieroglyph1.jpg','textures/stars5.jpg','textures/Inspire6.jpg','textures/inspire.jpg',
'textures/tomb.jpg','textures/stars9.jpg','textures/curl.jpg','textures/rust.jpg','textures/hightech4.jpg','textures/silverMetal.jpg',
'textures/skyScr4.jpg','textures/greenMetal.jpg','textures/greenMetal.jpg','textures/leaf09.jpg','textures/heart.jpg','textures/leaf2.jpg'];
// 'models/obj/surf4.obj' sfere cover pipe2018d Tetra12=original and geometric.obj and 'models/obj/spiral.obj', 'models/obj/pipe2.obj'   UV_Grid_Sm8 UV_Grid_Sm7 UV_Grid_Sm1
//  'models/obj/roboFeet.obj','models/obj/roboHead.obj','models/obj/cat1.obj',RonX2.obj,,'models/obj/spiral.obj'models/obj/Original.obj models/obj/oval1.obj 'models/obj/Karton.obj'
designs = ['models/obj/centreFrame2.obj','models/obj/centreFrame2R.obj', 'models/obj/spacebrickGeom.obj', 'models/obj/singleMag.obj','models/obj/solid4.obj','models/obj/Flatpacka.obj',   //0-5
' ','models/obj/Tetratorus.obj', 'models/obj/clipped.obj','models/obj/Tetraframe1.obj','models/obj/magnetic1.obj','models/obj/thick.obj','models/obj/thin.obj', 'models/obj/flower3.obj','models/obj/Abstract.obj',//6-13
' ','models/obj/Triangle.obj', 'models/obj/magneticball.obj','models/obj/pipe2.obj','models/obj/dice.obj','models/obj/spiral.obj','models/obj/halfpipe2.obj', //14-19
' ','models/obj/modern.obj','models/obj/dragon2.obj','models/obj/heart.obj','models/obj/heart3.obj', 'models/obj/leaf.obj','models/obj/DNA3.obj','models/obj/pipe2018d.obj', //20-27
' ','models/obj/sphere0.obj','models/obj/sphere1.obj','models/obj/sphere2.obj','models/obj/sphere3.obj','models/obj/sphere4.obj', //30-34
' ','models/obj/cubic.obj','models/obj/organic2.obj','models/obj/organic3.obj', //28-29  //31-35
'models/obj/leaf.obj','models/obj/heart.obj','models/obj/spiral.obj']; //36-38
musicC = ['sounds/ogg//1.ogg','sounds/2.mp3','sounds/3.mp3','sounds/4.mp3','sounds/5.mp3','sounds/6.mp3','sounds/7.mp3','sounds/8.mp3','sounds/9.mp3','sounds/10.mp3'];  //source.src = '/home/theuns/Music/SHD.mp3';

