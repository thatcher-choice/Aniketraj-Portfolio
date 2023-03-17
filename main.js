import './style.css'

import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
const scene =  new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000); // fov, aspect ratio, view frustum
const renderer =  new THREE.WebGLRenderer({ //to render out the actual graphic
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);
renderer.render(scene , camera);

const geometry = new THREE.TorusGeometry(10, 3 ,16, 100);  // set of vectors that define the object itself
const material = new THREE.MeshStandardMaterial({color:0xff6347});
const toros = new THREE.Mesh(geometry, material);
scene.add(toros);
const pointLight = new THREE.PointLight(0xffffff); 
pointLight.position.set(5,5,5);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new  THREE.GridHelper(200,50);
// scene.add(lightHelper, gridHelper);
// const controls =new OrbitControls(camera, renderer.domElement);

function addStar(){
  const geometry = new THREE.SphereGeometry(0.05, 24, 24);
  const material =new THREE.MeshStandardMaterial({color: 0xffffff})
  const star = new THREE.Mesh( geometry, material);

  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x,y,z);
  scene.add(star);
}

Array(5000).fill().forEach(addStar);
// background
const spaceTexture = new THREE.TextureLoader().load('space.jpg'); 
scene.background = spaceTexture;
 
//anni
const anniTexture = new THREE.TextureLoader().load('anni.jpg');

const anni = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshStandardMaterial({
    map: anniTexture
  })
);

scene.add(anni)
//mooon

const moonTexture =new THREE.TextureLoader().load('moon.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshBasicMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);
scene.add(moon);

moon.position.z=30;
moon.position.setX(-10);

anni.position.z = -5;
anni.position.x = 2;

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05; 

  anni.rotation.y +=0.01;
  anni.rotation.z +=0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}
document.body.onscroll = moveCamera;
moveCamera();
function animate(){
  requestAnimationFrame(animate);
  toros.rotation.x += 0.01; 
  toros.rotation.y += 0.005;
  toros.rotation.z += 0.01;

  moon.rotation.x += 0.005;
  anni.rotation.x +=0.005;
  // controls.update();
  renderer.render(scene, camera);
}

animate();