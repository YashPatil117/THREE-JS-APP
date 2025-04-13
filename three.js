import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);  //fov,aspect ratio, near, far
const renderer = new THREE.WebGLRenderer({ antialias: true }); //antialiasing: binary
renderer.setSize(window.innerWidth,window.innerHeight);   // can be rendered at half the resolution just divide each paramter by 2 i.e, window.innerwidth/2, window.innerheight/2
document.body.appendChild(renderer.domElement);

//adding cube

const cubegeometry = new THREE.BoxGeometry(1,1,1); //width, height, depth
const cubematerial = new THREE.MeshBasicMaterial({color: 0x00ff00}); //color of the cube

const cubegeometry2 = new THREE.BoxGeometry(1,1,1); //width, height, depth
const cubematerial2 = new THREE.MeshBasicMaterial({color: 0x0000ff}); //color of the cube



const cube = new THREE.Mesh(cubegeometry, cubematerial); //creating a mesh of the cube geometry and material
const cube2 = new THREE.Mesh(cubegeometry2, cubematerial2); //creating a mesh of the cube geometry and material

//const letters = new THREE.TextGeometry('Hello World')//creating a text geometry




scene.add(cube); //adding the cube to the scene
scene.add(cube2); //adding the cube to the scene
camera.position.z = 5; //positioning the camera

function animate() {
  requestAnimationFrame(animate); // ensure continuous loop
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  cube2.rotation.x -= 0.01;
  cube2.rotation.y -= 0.01;
  
  renderer.render(scene, camera);
}
animate();