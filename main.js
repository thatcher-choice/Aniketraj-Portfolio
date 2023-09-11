import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
const scene = new THREE.Scene();
import moonText from './moon.jpg';
import spaceImage from './space.jpg';
import moonNormal from './normal.jpg';
// import blackHoleGlb from './blackhole.glb'
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // fov, aspect ratio, view frustum
const renderer = new THREE.WebGLRenderer({ //to render out the actual graphic
  canvas: document.querySelector('#bg'),
});



var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(100, 31, 31);
var light2 =new THREE.DirectionalLight(0xffffff, 1); 
light2.position.set
scene.add(light);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
// 0.9434 0.9434 47.17
camera.position.set(0, 0, 100);
renderer.render(scene, camera);
var loader = new GLTFLoader();
let blackHole;
loader.load(  
  './blackhole.glb',
  function (gltf) {
    blackHole = gltf.scene;
    blackHole.position.set(0.1,0.2,-35)
    scene.add(blackHole);
    // Tilt the black hole to a specific angle
    var tiltAngle = -Math.PI / 8; // Adjust the angle as desired
    blackHole.parent.rotation.z = tiltAngle;

  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    console.error('Error loading GLTF file:', error);
  }
);
// Assuming you have already set up the Three.js scene and camera

// Position of the black hole
const blackHolePosition = new THREE.Vector3(0.1, 0.2, -35); // Update with the actual position

// Set up a scroll event listener
window.addEventListener('scroll', function () {
  // Get the scroll position
  const scrollPosition = window.scrollY;

  // Calculate the distance from the black hole
  const distance = camera.position.distanceTo(blackHolePosition);

  // Assuming you want to trigger the redirection when the camera reaches the center of the black hole
  // You can adjust the threshold value as per your requirements
  const threshold = 1;

  // Check if the camera is within the threshold distance of the black hole center
  if (distance < threshold && scrollPosition > 0) {
    // Redirect to the "projects" page
    window.location.href = 'http://localhost:3000/works'; // Update with the actual URL of your projects page
  }
});

// const geometry = new THREE.TorusGeometry(10, 3, 16, 100);  // set of vectors that define the object itself
// const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
// const toros = new THREE.Mesh(geometry, material);
// scene.add(toros);
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(1,1,1);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new  THREE.GridHelper(200,50);
// scene.add(lightHelper, gridHelper);
// const controls =new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.05, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);
  scene.add(star);
}

Array(5000).fill().forEach(addStar);
// background
const spaceTexture = new THREE.TextureLoader().load(spaceImage);
scene.background = spaceTexture;

//anni
const anniTexture = new THREE.TextureLoader().load('anni.jpg');

const anni = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshStandardMaterial({
    map: anniTexture
  })
);

// scene.add(anni)
//mooon

const moonTexture = new THREE.TextureLoader().load(moonText);
const normalTexture = new THREE.TextureLoader().load(moonNormal);
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshBasicMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);
scene.add(moon);

moon.position.z = -10;
moon.position.setX(-5);

anni.position.z = -5;
anni.position.x = 2;

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  // anni.rotation.y += 0.01;
  // anni.rotation.z += 0.01;

  camera.position.z = t * +0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0001;

  // console.log(camera.position.x,camera.rotation.y,camera.position.z );
}
document.body.onscroll = moveCamera;
moveCamera();
function animate() {
  requestAnimationFrame(animate);
  

  moon.rotation.x += 0.005;
  anni.rotation.x += 0.005;
  // controls.update();
  blackHole.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
window.scrollTo(0, document.body.scrollHeight);

