// import React, { useRef, useEffect } from "react";
// import ReactDOM from "react-dom";
// import * as THREE from "three";

// const RotatingEarth = () => {
//   const mount = useRef(null);

//   useEffect(() => {
//     const rootElement = document.getElementById("root");
//     let width = mount.current.clientWidth;
//     let height = mount.current.clientHeight;

//     //ADD SCENE
//     let scene = new THREE.Scene();

//     //ADD CAMERA
//     let camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     camera.position.z = 4;

//     //ADD RENDERER
//     let renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setClearColor("#000000");
//     renderer.setSize(width, height);

//     //ADD CUBE
//     let geometry = new THREE.SphereGeometry(1, 32, 32);

//     let loader = new THREE.TextureLoader();

//     let texture = loader.load(
//       "/Earth_Western_Hemisphere_transparent_background.png"
//     );

//     let material = new THREE.MeshBasicMaterial({ map: texture });

//     let cube = new THREE.Mesh(geometry, material);

//     scene.add(cube);

//     //RENDER LOOP
//     const renderScene = () => {
//       cube.rotation.x += 0.005;
//       cube.rotation.y += 0.01;
//       renderer.render(scene, camera);
//     };
//     requestAnimationFrame(renderScene);
//     mount.current.appendChild(renderer.domElement);
//   }, []);
//   return <div className="identity" ref={mount} />;
// };
// // ReactDOM.render(<App />, rootElement);
// export default RotatingEarth;
