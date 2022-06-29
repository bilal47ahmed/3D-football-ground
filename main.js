const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )

renderer.setClearColor("rgb(0,0,0)" )
document.body.appendChild( renderer.domElement )
camera.position.z = 15

var geometry = new THREE.BoxGeometry( 15, 0.3, 15)
var material = new THREE.MeshStandardMaterial( { color: "rgb(255,255,255)" })
var cube = new THREE.Mesh ( geometry, material )
const texture= new THREE.TextureLoader().load(".ground.png")
const material8 = new THREE.MeshBasicMaterial({ map: texture })
scene.add( cube )
cube.position.x=0
cube.position.y-=5
cube.position.z=0

const geometry1 = new THREE.PlaneGeometry( 0.1, 2 );
const material1 = new THREE.MeshBasicMaterial( {color:"rgb(255,255,255)" , side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry1, material1 );
scene.add( plane );
plane.position.y -= 3.8
plane.position.x -= 2
plane.position.z += 7


const geometry2 = new THREE.PlaneGeometry( 0.1, 2 );
const material2 = new THREE.MeshBasicMaterial( {color: "rgb(255,255,255)", side: THREE.DoubleSide} );
const plane2 = new THREE.Mesh( geometry2, material2 );
scene.add( plane2 );
plane2.position.y -= 3.8
plane2.position.x += 2
plane2.position.z += 7


const geometry3 = new THREE.PlaneGeometry( 4, 0.1 );
const material3 = new THREE.MeshBasicMaterial( {color: "rgb(255,255,255)", side: THREE.DoubleSide} );
const plane3 = new THREE.Mesh( geometry3, material3 );
scene.add( plane3 );
plane3.position.y -= 2.8

plane3.position.z += 7


const geometry4 = new THREE.PlaneGeometry( 0.1, 2 );
const material4 = new THREE.MeshBasicMaterial( {color: "rgb(255,255,255)", side: THREE.DoubleSide} );
const plane4 = new THREE.Mesh( geometry4, material4 );
scene.add( plane4 );
plane4.position.y -= 3.8
plane4.position.x += 2
plane4.position.z -= 7

const geometry5 = new THREE.PlaneGeometry( 0.1, 2 );
const material5 = new THREE.MeshBasicMaterial( {color: "rgb(255,255,255)", side: THREE.DoubleSide} );
const plane5 = new THREE.Mesh( geometry5, material5 );
scene.add( plane5 );
plane5.position.y -= 3.8
plane5.position.x -= 2
plane5.position.z -= 7

const geometry6 = new THREE.PlaneGeometry( 4, 0.1 );
const material6 = new THREE.MeshBasicMaterial( {color: "rgb(255,255,255)", side: THREE.DoubleSide} );
const plane6 = new THREE.Mesh( geometry6, material6 );
scene.add( plane6 );
plane6.position.y -= 2.8
plane6.position.z -= 7

const geometry7 = new THREE.SphereGeometry( 0.4, 69, 45);
const material7 = new THREE.MeshBasicMaterial( { color:  "rgb(255,255,255)"} );
const sphere7 = new THREE.Mesh( geometry7, material7 );
scene.add( sphere7 );

sphere7.position.y -= 4.43



var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
scene.add( ambientLight )


var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

let r=5;
let angle=0;
function animate() {
    
	requestAnimationFrame( animate );
camera.position.x=r*(Math.cos(angle));
camera.position.y=r*(Math.sin(angle));
angle+=Math.PI/200;


    //cube.rotation.x += 0.01;const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )

renderer.setClearColor("rgb(0,0,0)" )
document.body.appendChild( renderer.domElement )
camera.position.z = 15

var geometry = new THREE.BoxGeometry( 15, 0.3, 15)
var material = new THREE.MeshStandardMaterial( { color: "rgb(0,128,0)" })
var cube = new THREE.Mesh ( geometry, material )
const texture= new THREE.TextureLoader().load(".ground.png")
const material8 = new THREE.MeshBasicMaterial({ map: texture })
scene.add( cube )
cube.position.x=0
cube.position.y-=5
cube.position.z=0

const geometry1 = new THREE.PlaneGeometry( 0.1, 2 );
const material1 = new THREE.MeshBasicMaterial( {color:"rgb(255,255,255)" , side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry1, material1 );
scene.add( plane );
plane.position.y -= 3.8
plane.position.x -= 2
plane.position.z += 7


const geometry2 = new THREE.PlaneGeometry( 0.1, 2 );
const material2 = new THREE.MeshBasicMaterial( {color: "rgb(255,255,255)", side: THREE.DoubleSide} );
const plane2 = new THREE.Mesh( geometry2, material2 );
scene.add( plane2 );
plane2.position.y -= 3.8
plane2.position.x += 2
plane2.position.z += 7


const geometry3 = new THREE.PlaneGeometry( 4, 0.1 );
const material3 = new THREE.MeshBasicMaterial( {color: "rgb(255,255,255)", side: THREE.DoubleSide} );
const plane3 = new THREE.Mesh( geometry3, material3 );
scene.add( plane3 );
plane3.position.y -= 2.8

plane3.position.z += 7


const geometry4 = new THREE.PlaneGeometry( 0.1, 2 );
const material4 = new THREE.MeshBasicMaterial( {color: "rgb(255,255,255)", side: THREE.DoubleSide} );
const plane4 = new THREE.Mesh( geometry4, material4 );
scene.add( plane4 );
plane4.position.y -= 3.8
plane4.position.x += 2
plane4.position.z -= 7

const geometry5 = new THREE.PlaneGeometry( 0.1, 2 );
const material5 = new THREE.MeshBasicMaterial( {color: "rgb(255,255,255)", side: THREE.DoubleSide} );
const plane5 = new THREE.Mesh( geometry5, material5 );
scene.add( plane5 );
plane5.position.y -= 3.8
plane5.position.x -= 2
plane5.position.z -= 7

const geometry6 = new THREE.PlaneGeometry( 4, 0.1 );
const material6 = new THREE.MeshBasicMaterial( {color: "rgb(255,255,255)", side: THREE.DoubleSide} );
const plane6 = new THREE.Mesh( geometry6, material6 );
scene.add( plane6 );
plane6.position.y -= 2.8
plane6.position.z -= 7

const geometry7 = new THREE.SphereGeometry( 0.4, 69, 45);
const material7 = new THREE.MeshBasicMaterial( { color:  "rgb(255,255,255)"} );
const sphere7 = new THREE.Mesh( geometry7, material7 );
scene.add( sphere7 );

sphere7.position.y -= 4.43



var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
scene.add( ambientLight )


var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

let r=5;
let angle=0;
document.addEventListener('keydown',(e)=>{
	//pagedown
	if(e.keyCode==34){
	  camera.position.z -= 1
	  renderer.render(scene,camera)
	}
	//pageup
	else if(e.keyCode==33){
	camera.position.z += 1
	renderer.render(scene,camera)
	}
	else if(e.keyCode==16){
	  camera.position.x -= 1
	  renderer.render(scene,camera)
	  }
	  //cltright
	  else if(e.keyCode==17){
		camera.position.x += 1
		renderer.render(scene,camera)
		}
		else if(e.keyCode==87){
		  camera.rotation.x -= 0.1
		  renderer.render(scene,camera)
		  }
		  else if(e.keyCode==83){
			camera.rotation.x += 0.1
			renderer.render(scene,camera)
			}
			else if(e.keyCode==65){
			  camera.rotation.y += 0.1
			  renderer.render(scene,camera)
			  }
			  else if(e.keyCode==68){
				camera.rotation.y -= 0.1
				renderer.render(scene,camera)
				}
	
				else if(e.keyCode==80){
				  camera.position.y += 1
				  renderer.render(scene,camera)
				  }
				  else if(e.keyCode==76){
					camera.position.y -= 1
					renderer.render(scene,camera)
					}
		})
function animate() {
    
	requestAnimationFrame( animate );
//camera.position.x=r*(Math.cos(angle));
//camera.position.y=r*(Math.sin(angle));
//angle+=Math.PI/200;


    //cube.rotation.x += 0.01;
	//cube.rotation.y += 0.01;
    //cube.rotation.z +=0.01;
	//sphere.rotation.x += 0.7;
	//sphere.rotation.y += 0.5;
   // camera.translateZ (0.01);
   // camera.rotation.z +=0.1;
    



    
    
	
	renderer.render( scene, camera );
}
animate()
    
	//cube.rotation.y += 0.01;
    //cube.rotation.z +=0.01;
	//sphere.rotation.x += 0.7;
	//sphere.rotation.y += 0.5;
   // camera.translateZ (0.01);
   // camera.rotation.z +=0.1;
    



    
    
	
	renderer.render( scene, camera );
}
animate()