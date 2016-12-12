var camera, scene, renderer;
var mesh;
init();
animate();
function init() {
  camera = new THREE.PerspectiveCamera( 70, 100 / 100, 1, 1000 );
  camera.position.z = 400;
  scene = new THREE.Scene();
  var texture = new THREE.TextureLoader().load( 'img/planet/earth.jpg' );
  var geometry = new THREE.SphereGeometry( 200, 200, 200 );
  var material = new THREE.MeshBasicMaterial( { map: texture } );
  mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( 400, 400 );
  document.getElementById("container1").appendChild(renderer.domElement);
  //
  window.addEventListener( 'resize', onWindowResize, true );
}
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}
function animate() {
  requestAnimationFrame( animate );
  mesh.rotation.y -= 0.0006;
  mesh.rotation.x += 0.0006;
  renderer.render( scene, camera );
}
