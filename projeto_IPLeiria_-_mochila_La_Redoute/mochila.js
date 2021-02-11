//scene
var scene = new THREE.Scene()

//scene.background = new THREE.Color(0xf2f2f2)
scene.background = new THREE.Color(0xffffff)

//camera
var camera = new THREE.PerspectiveCamera(80, 800/600, 0.1, 500)
//fatia do view = 60
//tamanho da visao = 800/600
//maior proximidade = 0.1
//menor proximidade = 500

//usando un canvas de html
var meuCanvas = document.getElementById('meuCanvas') 
var renderer = new THREE.WebGLRenderer({canvas: meuCanvas})
//renderer.setSize(730,537.5);
renderer.setSize(730,530);
//innerWidth = 730
//innerHeight = 530

//sombra
renderer.shadowMap.enabled = true

//axes de referencia
var axes = new THREE.AxesHelper()
//scene.add(axes)

//position camera
camera.position.x = -4
camera.position.y = 5
camera.position.z = 8
camera.lookAt(0,0,0)
//grid de referencia

var grid = new THREE.GridHelper()
//scene.add(grid)

//controls
var controls = new THREE.OrbitControls(camera,renderer.domElement)

//criar luz de ambiente de trabalho
//var luzAmbiente = new THREE.AmbientLight(0x404040,100);
//scene.add(luzAmbiente);

var lightPoint1 = new THREE.PointLight("white")
lightPoint1.position.set(10, 10, 15)
lightPoint1.castShadow = true;
scene.add(lightPoint1)

var lightPoint2 = new THREE.PointLight("white")
lightPoint2.position.set(10,10,-30)
lightPoint2.castShadow = true;
scene.add(lightPoint2)

var lightPoint3 = new THREE.PointLight("white")
lightPoint3.position.set(-10,5,0)
lightPoint3.castShadow = true;
scene.add(lightPoint3)

var lightPoint4 = new THREE.PointLight("white")
lightPoint4.position.set(0,-20,0)
lightPoint4.castShadow = true;
scene.add(lightPoint4)

var piece1,piece2,piece3,piece4,piece5,piece6,piece7,piece8,piece9;

//funcion glft cria todos os objetos
var loader = new THREE.GLTFLoader()
loader.load("Backpack_v36.gltf", function (gltf) {

        scene.add(gltf.scene)

       /*piece1 = scene.getObjectByName('Back_Straps');
        piece2 = scene.getObjectByName('Backpack_Body');
        piece3 = scene.getObjectByName('Front_Lower_Pocket');
        piece4 = scene.getObjectByName('Front_Upper_Pocket');
        piece5 = scene.getObjectByName('Small_Back_Strap_R');
        piece6 = scene.getObjectByName('Small_Back_Straps_L');
        piece7 = scene.getObjectByName('Upper_Strap');


        materialInicial1 = piece1.material
        materialInicial2 = piece2.material
        materialInicial3 = piece3.material
        materialInicial4 = piece4.material
        materialInicial5 = piece5.material
        materialInicial6 = piece6.material
        materialInicial7 = piece7.material 
*/

		piece1 = scene.getObjectByName('Backpack');
        piece2 = scene.getObjectByName('Zipper');
        piece3 = scene.getObjectByName('Strap_Ajustment001');
        piece4 = scene.getObjectByName('Strap_Top001');//tem children Plane.003_0 e Plane.003_1
        piece5 = scene.getObjectByName('Strap_Back001');//tem children Plane.005_0 e Plane.005_1
        //piece6 = scene.getObjectByName('');
        //piece7 = scene.getObjectByName('');
 

       materialInicial1 = piece1.material
        materialInicial2 = piece2.material
        materialInicial3 = piece3.material
        materialInicial4 = piece4.material
        materialInicial5 = piece5.material
        //materialInicial6 = piece6.material
        //materialInicial7 = piece7.material


        scene.traverse(function (element) {
            if (element.isMesh) {
                element.castShadow = true;
                element.receiveShadow = true;
                
            }
        })
    }
)

var fov = camera.fov, zoom = 1.0;

// function renderizar
function renderizar() {
    renderer.render(scene, camera)
}
animar()

//function animar
function animar() {
    requestAnimationFrame(animar)
    camera.fov = fov * zoom;
    camera.updateProjectionMatrix();
    
    document.getElementById('mais').onclick = function (){
        zoom -= 0.05;
    }
    document.getElementById('menos').onclick = function (){
        zoom += 0.05;
    }

    renderizar()
}

var novo_Material1 = new THREE.MeshNormalMaterial();

var color_1 = new THREE.Color(0xff4040);
var color_2 = new THREE.Color(0x7b68ee);
var color_3 = new THREE.Color(0x228b22);
var color_4 = new THREE.Color(0xffffff);

var material1 = new THREE.MeshPhongMaterial({
    opacity: 0.5,
    transparent: true
});

var material2 = new THREE.MeshPhongMaterial ({ 
    opacity: 0.8,
    transparent: true
});


/* BOTAO DE COR */
var i=1;   
var quadrado = document.getElementById('square');
document.getElementById('btn_cor').onclick = function (){
        if (i==1){
			quadrado.style.backgroundColor = 'red';
			console.log('mudar cor');
            piece1.material.color = color_1;
            piece2.material.color = color_1;
            piece3.material.color = color_1;
            piece4.material.color = color_1;
            piece5.material.color = color_1;
            piece6.material.color = color_1;
            piece7.material.color = color_1;
            console.log('depois de mudar cor');

         
        
        }
        if (i==2){
        	quadrado.style.backgroundColor = 'blue';
            piece1.material.color = color_2;
            piece2.material.color = color_2;
            piece3.material.color = color_2;
            piece4.material.color = color_2;
            piece5.material.color = color_2;
            piece6.material.color = color_2;
            piece7.material.color = color_2;

   
        }
        if (i==3){
        	quadrado.style.backgroundColor = 'green';
            piece1.material.color = color_3;
            piece2.material.color = color_3;
            piece3.material.color = color_3;
            piece4.material.color = color_3;
            piece5.material.color = color_3;
            piece6.material.color = color_3;
            piece7.material.color = color_3;

      
        }
        if (i==4){
        	quadrado.style.backgroundColor = 'white';
            piece1.material.color = color_4;
            piece2.material.color = color_4;
            piece3.material.color = color_4;
            piece4.material.color = color_4;
            piece5.material.color = color_4;
            piece6.material.color = color_4;
            piece7.material.color = color_4;


     
        }

        i++;
        if(i==5){i=1;}                
}
/* FINAL BOTAO DE COR */

/* BOTAO DE MATERIAL */
var m=1;
document.getElementById('btn_material').onclick = function () {
    
    if (m==1){
        piece1.material = material1;
        piece2.material = material1;
        piece3.material = material1;
        piece4.material = material1;
        piece5.material = material1;
        piece6.material = material1;
        piece7.material = material1;

    }
    if (m==3){
        piece1.material = materialInicial1;
        piece2.material = materialInicial2;
        piece3.material = materialInicial3;
        piece4.material = materialInicial4;
        piece5.material = materialInicial5;
        piece6.material = materialInicial6;
        piece7.material = materialInicial7;

    }
    if (m==2){
        piece1.material = novo_Material1;
        piece2.material = novo_Material1;
        piece3.material = novo_Material1;
        piece4.material = novo_Material1;
        piece5.material = novo_Material1;
        piece6.material = novo_Material1;
        piece7.material = novo_Material1;

    }
    m++;
    if (m==4){m=1;}
}
/* FINAL BOTAO DE MATERIAL */


/* BOTAO DE ACAO */
var a=1;
document.getElementById('btn_bolso_cima').onclick = function () {
    if (a==1){
        
        piece1.position.x += 2;
        
        piece2.position.x += 4;
       
        piece3.position.x += 6;
      
        piece4.position.x += 8;
        
        //piece5.position.x += 50;*/
        
        //piece6.position.x += 10;

        //piece7.position.x += 70;
   

      
    }
    if (a==2){
        piece1.position.x -= 10;
        piece2.position.x -= 10;
        piece3.position.x -= 10;
        piece4.position.x -= 10;
        piece5.position.x -= 10;
        piece6.position.x -= 10;
        piece7.position.x -= 10;

    }
    a++;
    if (a==3){a=1;}
}
/* FINAL BOTAO DE ACAO */

console.log('aqui');

//document.getElementById('btn_bolso_baixo').onclick = function (){
    /*var abrir_bolso = THREE.AnimationClip.findByName(clips,'bolso de cima');
    var abrir_bolso_de_cima = mixer.clipAction(abrir_bolso);
    abrir_bolso_de_cima.play();*/

    //mixer.clipAction(THREE.AnimationClip.findByName(clips,'Backpack_v3.mdd')).play();
//}

//FALTA TER O NOME DO CLIP DE ANIMACAO

