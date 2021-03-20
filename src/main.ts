import * as THREE from "three";

const WIDTH = 16 * 40;
const HEIGHT = 9 * 40;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const animate = () => {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
